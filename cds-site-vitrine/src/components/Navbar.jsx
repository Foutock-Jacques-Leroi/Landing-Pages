import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { AiFillHome, AiFillProject, AiFillContacts, AiOutlineGithub, AiFillGithub, AiFillDashboard } from 'react-icons/ai'








const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [about, setAbout] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    const handleAbout = () => {
        setAbout(!about)
    }
    return (
        <div className='relative top-0 w-full h-auto text-black bg-opacity-55 mx-auto'>
            <div className='flex justify-between items-center m-4'>
                <h1 className='font-extrabold p-2 md:text-4xl sm:text-3xl text-2xl font-sans-serif bg-clip-text bg-gradient-to-r from-slate-100 to-sky-400  text-transparent text-orange-300 ml-6'>CDS Technologies.</h1>

                <motion.ul
                    viewport={{ once: true }}
                    initial={{
                        position: 'relative',
                        top: '-60px',

                    }}

                    whileInView={{
                        position: 'relative',
                        top: '0px'
                    }}

                    transition={{
                        duration: 1,
                        ease: 'linear',

                    }}

                    className='hidden md:flex font-bold text-white text-lg [&_li]:cursor-pointer'>

                    <li ><a className='mt-2 flex items-center py-3 mx-4 px-2 hover:border-l-[3px] duration-200 border-l-white transition-all' href='#accueil'>Accueil</a></li>
                    <li ><a className='mt-2 flex items-center py-3 mx-4 px-2 hover:border-l-[3px] duration-200 transition-all border-l-white' href="#services"> Services</a></li>
                    <li> <a className='mt-2 -mr-2 flex items-center py-3 mx-4 px-2 hover:border-l-[3px] duration-200 transition-all border-l-white' href="#a-propos"> Apropos </a></li>
                    <li className='relative flex gap-1 items-center py-3 mx-6 px-2 cursor-pointer '><a className="px-6 py-2 bg-blue-900 rounded-sm text-white cursor-pointer" href="#contact">Contact</a></li>
                </motion.ul>


                <div onClick={handleNav} className='block md:hidden px-8'>
                    {!nav ? <AiOutlineMenu size={25} className='cursor-pointer text-white' /> : <AiOutlineClose size={25} className='cursor-pointer text-white' />}
                </div>


                <div className={nav ? 'opress fixed z-index-[100] top-0 left-0 w-[70%] min-h-[100vh] border-r border-r-black bg-slate-200 duration-500 ' : 'fixed left-[-100%] duration-700'}>


                    <h1 className='py-8 px-10 md:text-4xl sm:text-3xl text-2xl font-extrabold p-2 md:text-4xl sm:text-3xl text-2xl font-sans-serif bg-clip-text bg-gradient-to-r from-slate-600 to-sky-400 text-transparent ml-6'>CDS Technologies.</h1>

                    <ul className='font-bold block text-black text-lg px-12 [&_li]:focus:text-sky-100 cursor-pointer'>

                        <li onClick={() => handleNav()} ><a className='flex gap-4 items-center py-3 my-4 mx-6 px-2 border-l-[3px] hover:border-l-[3px] duration-200 transition-all border-l-black' href='#home'><AiFillHome size={25} className='cursor-pointer' />Acceuil</a></li>
                        <li onClick={() => handleNav()} ><a className='flex gap-4 items-center py-3 my-4 mx-6 px-2 border-l-[3px] hover:border-l-[3px] duration-200 transition-all border-l-black' href='#contact'><AiFillContacts size={25} className='cursor-pointer' />Services</a></li>
                        <li onClick={() => handleNav()} ><a className='flex gap-4 items-center py-3 my-4 mx-6 px-2 border-l-[3px] hover:border-l-[3px] duration-200 transition-all border-l-black' href='#project'><AiFillProject size={25} className='cursor-pointer' />Apropos</a></li>
                        <li onClick={() => handleAbout()} className='relative flex gap-4 items-center py-3 my-4 mx-6 px-2 border-l-[3px] hover:border-l-[3px] duration-200 transition-all border-l-black'><AiFillDashboard size={25} className='cursor-pointer' />Contact</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar