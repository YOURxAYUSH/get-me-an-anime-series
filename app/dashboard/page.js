'use client'
import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/navigation'
import { useSession } from 'next-auth/react'
import Button from '@/components/Button'
import { fetchuser,updateProfile } from '../actions/payment'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify'



const Dashboard = () => {

const {data:session , update} = useSession()
const [form, setForm] = useState({
  name: "",
  email: "",
  username: "",
  profilepic: "",
  coverpic: "",
  razorpayid: "",
  razorpaysecret:"",
});
const router= useRouter()

 
useEffect(() => {
  

  if (!session) {
      router.push('/login')
  }
  else {
      getData()
  }
}, [session])
 
const getData = async () => {
  const u = await fetchuser(session.user.name);
  setForm({
    name: u.name || '',
    email: u.email || '',
    username: u.username || '',
    profilepic: u.profilepic || '',
    coverpic: u.coverpic || '',
    razorpayid: u.razorpayid || '',
    razorpaysecret: u.razorpaysecret|| '',
  });
};

const handleSubmit = async (e) => {

  const success = await updateProfile(form, session.user.name);

  if (success) {
    toast('🦄 Profile updated successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    
    await getData(); // Refresh the form with updated data
  } else {
    toast('🦄 Failed to update profile. Please try again!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    
  }
};
const handleInputChange = (e) => {
  const { name, value } = e.target ;
  setForm((prevForm) => ({
    ...prevForm,
    [name]: value,
  }));
};

   
    return (
    <div >
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
      <div className='flex md:ml-80 pb-60 pt-10 text-white flex-col w-full p-4 md:w-1/2 '>
      <div className='text-center text-3xl mb-2 font-bold'>
        Welcome To Your Dashboard
      </div>
      <form action={handleSubmit}>
      <div>
        <span>Name</span>
      <input onChange={handleInputChange} name='name' value={form.name} className='w-full  mr-4 mt-1 rounded-md p-2 text-white h-10 bg-gray-500' placeholder="Enter your name"></input>
      </div>
      <div>
        <span>Email</span>
      <input onChange={handleInputChange} readOnly value={form.email} className='w-full  mr-4 mt-1 rounded-md p-2 text-white h-10 bg-gray-500' placeholder="Enter your email"></input>
      </div>
      <div>
        <span>Username</span>
      <input onChange={handleInputChange} readOnly name='username' value={form.username} className='w-full  mr-4 mt-1 rounded-md p-2 text-white h-10 bg-gray-500' placeholder="Enter your username"></input>
      </div>
      <div>
        <span>Profile Picture</span>
      <input onChange={handleInputChange} name='profilepic' value={form.profilepic} className='w-full  mr-4 mt-1 rounded-md p-2 text-white h-10 bg-gray-500' placeholder="Enter link to your profile picture "></input>
      </div>
      <div>
        <span>Cover Picture</span>
      <input onChange={handleInputChange} name='coverpic' value={form.coverpic} className='w-full  mr-4 mt-1 rounded-md p-2 text-white h-10 bg-gray-500' placeholder="Enter link to your cover picture"></input>
      </div>
      <div>
        <span>Razorpay Id</span>
      <input onChange={handleInputChange} name='razorpayid' value={form.razorpayid} className='w-full  mr-4 mt-1 rounded-md p-2 text-white h-10 bg-gray-500' placeholder="Enter your razorpay credentials "></input>
      </div>
      <div>
        <span>Razorpay Secret</span>
      <input onChange={handleInputChange} name='razorpaysecret' value={form.razorpaysecret} className='w-full  mr-4 mt-1 rounded-md p-2 text-white h-10 bg-gray-500' placeholder="Enter your razorpay credentials "></input>
      </div>
      <div>
      <Button type='submit'  className={'w-full mt-5' } buttonName={'Save Details'}/>
      </div>
      </form>
     
      </div>
      
    
    </div>
  )
}

export default Dashboard
Dashboard