'use client'
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import Image from 'next/image'
import Button from './Button'
import { initiate } from '@/app/actions/payment'
import { fetchpayments, fetchuser } from '@/app/actions/payment'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import { Bounce } from 'react-toastify'
import { useSearchParams } from 'next/navigation'
import Typedtext from './Typedtext'

const PaymentPage = ({ username }) => {
  const router = useRouter()
  const searchparams = useSearchParams()

  const [paymentform, setPaymentform] = useState({ name: '', message: '', amount: '' })
  const [currentUser, setcurrentUser] = useState({})
  const [payments, setPayments] = useState([])

  // Fetch user data (using username from the URL) and payment history
  useEffect(() => {
    const getData = async () => {
      try {
        const u = await fetchuser(username)
        console.log("Fetched user:", u)
        if (!u) {
          toast.error('User not found. Please check the username.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          })
          router.push('/notfound')
          return
        }
        if (!u.razorpayid || !u.razorpaysecret) {
          toast.error('Payment system is not configured for this user.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          })
          return
        }
        setcurrentUser(u)
        const dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
      } catch (error) {
        console.error('Error fetching user data:', error)
        toast.error('An error occurred while fetching user data. Please try again later.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
      }
    }
    getData()
  }, [username, router])

  // Handle paymentdone query parameter feedback
  useEffect(() => {
    const paymentStatus = searchparams.get('paymentdone')
    const lastPaymentTime = parseInt(sessionStorage.getItem('lastPaymentTime'), 10)
    const currentTime = Date.now()
    if (paymentStatus === 'true' && (!lastPaymentTime || currentTime - lastPaymentTime > 10000)) {
      toast('Thank You For Your Support ❤', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
      sessionStorage.setItem('lastPaymentTime', currentTime.toString())
      const params = new URLSearchParams(searchparams.toString())
      params.delete('paymentdone')
      const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`
      setTimeout(() => {
        window.history.replaceState(null, '', newUrl)
      }, 0)
    }
  }, [searchparams])

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }

  // Initiate Razorpay payment using the credentials from currentUser
  const pay = async (amount) => {
    try {
      if (!currentUser.razorpayid || !currentUser.razorpaysecret) {
        toast.error('Payment system is not configured for this user.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
        return
      }
      if (!amount || (amount / 100) < 10 || (amount / 100) > 100000) {
        toast.error('Enter an amount between ₹10 and ₹100,000.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
        return
      }
      const response = await initiate(amount, username, paymentform)
      if (!response || !response.id) {
        throw new Error('Failed to initiate payment. Please try again later.')
      }
      const orderId = response.id
      const options = {
        key: currentUser.razorpayid,
        amount: amount,
        currency: "INR",
        name: "GET ME AN ANIME SERIES",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId,
        callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
        prefill: {
          name: paymentform.name,
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      }
      const rzp1 = new Razorpay(options)
      rzp1.on('payment.failed', function (response) {
        console.error('Payment failed:', response.error)
        toast.error('Payment failed! Please check your details and try again.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
      })
      rzp1.open()
    } catch (error) {
      console.error('Error during payment:', error)
      toast.error('Payment failed. Please try again later.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div>
        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
        <div className='text-white bg-white h-80 w-full' style={{ backgroundImage: `url(${currentUser.coverpic})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <div className='absolute top-[363px] md:top-80 left-[40vw] md:left-[46vw] border-2 border-white rounded-full'>
            <img className='rounded-full aspect-square object-cover' src={currentUser.profilepic} width={90} height={90} alt="profile" />
          </div>
        </div>
        <div className="info text-white flex my-12 flex-col justify-center items-center">
          <div className='text-2xl font-bold'>@{username}</div>
          <div className='text-slate-500'>Let's help {username} get an anime series!</div>
          <div className=" inline-flex items-center px-2 py-1 rounded shadow text-white">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-1 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.355 2.438a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.54 1.118l-3.355-2.438a1 1 0 00-1.175 0l-3.355 2.438c-.784.57-1.838-.197-1.54-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.07 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
  </svg>
  <span className=" font-bold">
    ₹{payments.reduce((total, payment) => total + payment.amount, 0).toLocaleString()}
  </span>
  <span className="ml-1 text-sm text-gray-400"> total raised</span>
</div>

        </div>
        <div className='payment text-white pl-10 md:gap-4 mr-5 min-h-[340px] pb-40 gap-40 flex-col md:flex-row flex'>
          <div className="supportes w-full min-h-[40vh] md:w-[50vw] bg-gray-700 overflow-y-hidden pb-6 p-5 rounded-lg font-thin">
            <h2 className='font-extrabold mb-4 sticky'>Top 10 Supporters</h2>
            <ul>
              {payments.length === 0 ? (
                <div className='text-3xl'>Be My First Supporter! 😍</div>
              ) : (
                <div>
                  {payments.map((p, i) => (
                    <li key={i}>
                      <div className="flex gap-2 items-center mt-2">
                        <span className='hidden md:block'>
                          <img className='rounded-full' src="/watashi-money.gif" alt="img" width={20} height={40} />
                        </span>
                        <span className='md:hidden block'>
                          <img className='rounded-full' src="/watashi-money.gif" alt="img" width={80} height={40} />
                        </span>
                        <span>
                          {p.name} supported with <span className='font-bold'>₹{p.amount}</span> and dropped a message &quot;{p.message}&quot;
                        </span>
                      </div>
                    </li>
                  ))}
                </div>
              )}
            </ul>
          </div>
          <div className='payment-link rounded-lg p-5 w-full md:w-1/2 bg-gray-700'>
            <div className='font-bold'><Typedtext firstText={'Make A Payment'} secondText={'Be A Supporter'} thirdText={'Share The Page With Others'}/></div>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-3'>
                <input onChange={handleChange} maxLength='10' name='name' value={paymentform.name} className='w-full mr-4 mt-1 rounded-md p-2 text-white h-10 bg-gray-500' placeholder="Enter your name (Max Character: 10)" />
                <input onChange={handleChange} maxLength="20" name='message' value={paymentform.message} className='w-full mr-4 mt-1 rounded-md p-2 text-white h-10 bg-gray-500' placeholder="Enter your message / default is enjoy (Max Character: 20)" />
                <input onChange={handleChange} type='number' maxLength='6' max={100000} name='amount' value={paymentform.amount} className='w-full mr-4 mt-1 rounded-md p-2 text-white h-10 bg-gray-500' placeholder="Enter your preferred amount (Min Amount: 10 || Max Amount: 400000)" />
              </div>
              <Button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} className="w-full mt-1" buttonName={"Pay"} />
            </div>
            <div className='flex pt-3 flex-row'>
              <button onClick={() => pay(5000)} className='bg-slate-800 px-5 py-1 rounded-lg mr-3'>Pay &#8377;50</button>
              <button onClick={() => pay(10000)} className='bg-slate-800 px-5 py-1 rounded-lg mr-3'>Pay &#8377;100</button>
              <button onClick={() => pay(20000)} className='bg-slate-800 px-5 py-1 rounded-lg mr-3'>Pay &#8377;200</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentPage;
