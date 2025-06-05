import React, { useEffect } from 'react'
import { ReactTyped } from 'react-typed'
import Aos from 'aos'
import 'aos/dist/aos.css'



const Infotext = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='min-h-screen p-6 -mt-25 text-white mx-auto flex items-end justify-start bg-violet-500' >
            <div className='m-6 flex flex-col'>
                <p className='font-bold text-white sm:text-lg text-sm'>Cargo Shipping Made Easy. </p>
                <h1 className='font-bold py-2 text-3xl md:text-5xl sm:text-4xl bg-gradient-to-r bg-clip-text text-transparent from-cyan-500 to-white' data-aos="zoom-in" data-aos-delay="400" data-aos-once="true">The Place To Be Since 2007 </h1>
                <ReactTyped className='font-bold text-gray-300 text-lg' strings={['anything to know about Shipping Services', 'anything to know about Affortable Shipping Price', 'anything to know about as a reference']} typeSpeed={40} backSpeed={30} loop />
                {/* <button className='animate-bounce px-14 py-2 my-4 rounded-md bg-slate-600 font-bold font-sans border border-white hover:bg-transparent duration-300'>Join Us</button> */}
            </div>
        </div>
    )
}

export default Infotext