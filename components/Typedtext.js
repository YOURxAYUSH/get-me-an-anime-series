'use client'
import React from 'react'
import Typed from 'typed.js'
import { useRef, useEffect } from 'react'

const Typedtext = ({firstText, secondText , thirdText}) => {
    const typedElement = useRef(null)
    const typedInstance = useRef(null)

    useEffect(() => {
        // Initialize Typed.js
        typedInstance.current = new Typed(typedElement.current, {
          strings: [
            firstText,
            secondText,
            thirdText,
          ],
          typeSpeed: 50,
          backSpeed: 30,
          loop: true,
          backDelay: 1500,
        });
    
        // Cleanup Typed.js on component unmount
        return () => {
          typedInstance.current.destroy();
        };
      }, [firstText,secondText,thirdText]);

  return (
    <div>
       <span ref={typedElement} className="text-white"></span>
    </div>
  )
}

export default Typedtext
