import React, { useState } from 'react'









const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='-m-6 p-0 max-w-full px-4 h-24 bg-slate-200 text-black mx-auto'>
            <div className='w-full flex justify-around items-center m-6 '>
                <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl font-sans text-orange-300'>Clovis Cargo.</h1>

                <ul className='hidden md:flex text-xl font-light'>
                    <li className='py-4 mx-6 '>Home</li>
                    <li className='py-4 mx-6 '>About</li>
                    <li className='py-4 mx-6 '>Product & Services</li>
                    <li className='py-4 mx-6 '>Galleries</li>
                    <li className='py-4 mx-6 '>FAQ</li>
                    <li className='py-4 mx-6 '>Contact</li>
                </ul>
                

                <div onClick={handleNav} className='block md:hidden px-8'>
                    {!nav ? 'Open' : 'Close'}
                </div>
                

                <div className={nav ? 'fixed top-0 left-0 w-[70%] min-h-[90vh] border-r border-r-orange-400 bg-slate-900 duration-500 ' : 'fixed left-[-100%]'}>
                    
                    <h1 className='font-extrabold py-10 px-10 md:text-4xl sm:text-3xl text-2xl font-sans-serif text-orange-300'>JACQUES.</h1>

                    <ul className='font-bold block text-lg px-12'>
                        
                        <li className='py-4 mx-6 '>Home</li>
                        <li className='py-4 mx-6 '>About</li>
                        <li className='py-4 mx-6 '>Product & Services</li>
                        <li className='py-4 mx-6 '>Galleries</li>
                        <li className='py-4 mx-6 '>FAQ</li>
                        <li className='py-4 mx-6 '>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar