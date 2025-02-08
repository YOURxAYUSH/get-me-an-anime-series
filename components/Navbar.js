'use client'
import React from 'react'
import Button from '@/components/Button'
import Link from 'next/link'
import { useSession, signIn,signOut } from 'next-auth/react'


const Navbar = ()=>{
   const { data: session } = useSession()
  
 return(
    <div className="navbar flex flex-col text-xl md:text-lg md:flex-row bg-gray-900 md:h-12 w-full  justify-between items-center text-white font-bold   ">
      <div>Get Me An Anime Series</div>
     
      {session ? <div className='flex pt-3  md:gap-3  md:mr-5'>
       <Link href={`${session.user.name}`} ><Button className='px-3 w-28 py-1' buttonName='Your Page'/></Link>
        <Button onClick={()=>{signOut()}} className='px-3 py-1 w-28' buttonName='Logout'/>
       <Link href={'/dashboard'}><Button className='px-3 py-1 w-28' buttonName='Dashboard'/></Link>
        
      

         
         </div>:
      <div className='flex pt-3 md:flex-row pb-2 justify-around  md:gap-3 md:mr-5'>
      <div className='mt-2  text-sm md:text-lg'>Want to be supported ?</div>
      <div><Link href={'/login'}><Button className='px-3 w-24 py-1' buttonName='Login'/></Link></div>
      <div className='mt-2 text-sm md:text-lg'>Want to support others ?</div>
      <div><Link href={'/supporter'}> <Button className='px-3 py-1 w-24' buttonName='Supporter'/></Link></div>
      </div>
}
    </div>
 )
}

export default Navbar