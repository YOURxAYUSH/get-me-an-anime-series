'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import React from 'react'
import Image from 'next/image'
import {useSession ,handlelogin,handlelogiut, signIn } from 'next-auth/react'
import LoginButtons from '@/components/LoginButtons'




const Login = () => {
   const { data: session, status } = useSession()
   const router = useRouter()
  
   useEffect(() => {
      if (status === 'authenticated' && session) {
        // Redirect only if session is authenticated
        router.push('/dashboard');
      }
    }, [session, status]);
   
  
  
 
   return (
    <>
    <div  className=' min-h-screen pt-10 pb-40' style={{backgroundImage:' url(/kibutsuji-muzan.webp)' ,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
     {session ? (<div className='flex flex-col gap-40 text-center text-blue-200 relative z-10'><div className='text-3xl'>Successfully logged-in to our page!</div><div className='  text-2xl w-full font-thin'> Hey {session.user.name.toLowerCase()}!🚀 Ready to level up? Start raising funds and make it happen for yourself!💰🔥 <div className='mt-10'>Go To Dashboard!</div></div></div>): (<div><div className="  text-2xl text-neutral-200 text-center">Login / SignUp to Anime Lovers To Support Yourself</div>
     <div className=" py-10 px-5 mt-5 bg-opacity-30 flex flex-col gap-2 bg-neutral-100 rounded-lg text-center w-fit mx-auto opacity">
        <div className='text-2xl font-bold '>Welcome Back</div>
        <div className="  text-sm text-gray-800">Please enter your details to login.</div>
     <div className='loginButtons flex gap-2 items-center justify-center mt-5'>

        <LoginButtons className='px-10 py-2' onClick={()=> {signIn('github')}}  buttonName={<Image src="/twitter.svg" alt="Twitter Logo" width={24} height={24} />}/>
        <LoginButtons className='px-10 py-2' onClick={()=> {signIn('google')}}  buttonName={<Image src='/google.svg' alt='Logo' width={24} height={24}/>}/>
        <LoginButtons className='px-10 py-2' onClick={()=> {signIn('facebook')}}  buttonName={<Image src='/facebook.svg' alt='Logo' width={24} height={24}/>}/>
        <LoginButtons className='px-10 py-2' onClick={()=> {signIn('github')}}  buttonName={<Image src='/github.svg' alt='Logo' width={24} height={24}/>}/>

     </div>
     <div className='mt-5 flex items-center justify-around gap-2'>
        <div className='bg-gray-400 h-0.5  w-36 '></div>
        <div className='text-sm text-gray-800'>OR</div>
        <div className='bg-gray-400 h-0.5  w-36 '></div>

     </div>
     <div className='flex flex-col justify-start items-start gap-1'>
        <div className='font-medium text-black'>
            E-Mail Address
        </div>
        <input className='w-full px-3 py-1 rounded-md ' type='text' placeholder='Enter your email...'></input>
     </div>
     <div className='flex flex-col justify-start items-start gap-1'>
        <div className='font-medium text-black'>
            Password
        </div>
        <div className='w-full flex bg-[#ffffff] rounded-md px-2 contain-content hover:outline hover:-outline-offset-4 '>
        <input className='w-full px-3 py-1 rounded-md outline-none' type='text' placeholder='******************'></input>
        <Image width={20} height={10} alt={'eye'} src='/eye.svg'/>
        </div>
     </div>
     <div className='flex justify-between items-center '>
        <div className='flex items-center gap-2 text-black font-semibold'><input className='w-6' type='checkbox'></input>Remember Me</div>
        <div className='text-black  underline underline-offset-4 '>Forgot Password?</div>
     </div>
     <div className='bg-black h-10 text-white text-sm rounded-md text-center py-2'>
        SignIn
     </div>
     <div className=' font-semibold text-gray-800'>
        Don't Have an account yet? <span className='text-black'>SignUp</span>
     </div>
     
     </div></div>)}

    </div>
     
    </>
  )
}

export default Login
