import React from 'react'

const Footer = ()=>{
    const currentYear = new Date().getFullYear()
    return(
        <div className="footer bg-gray-900 flex gap-2 md:flex-row flex-col justify-center items-center text-white font-bold ">
         <div>Copyright &copy; {currentYear} GET ME AN ANIME SERIES </div> <div className='md:block hidden'> - </div> <div> All Rights Reserved to AYUSH VARSHNEY</div>
        </div>
    )
} 

export default Footer