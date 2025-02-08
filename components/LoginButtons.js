import React from 'react'


const LoginButtons = ({onClick, buttonName,className}) => {
  return (
    <div>
       
       <button onClick={onClick} className={` py-1 px-6  rounded-lg  bg-white ${className}`}>   <span>{buttonName}</span> </button>
    </div>
  )
}

export default LoginButtons
