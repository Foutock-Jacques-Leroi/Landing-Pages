import React, { useState } from 'react'










import { AiFillContacts, AiFillFileImage, AiFillHome, AiOutlineClose, AiOutlineHome, AiOutlineMenu, AiOutlineMenuFold, AiTwotoneFileImage } from 'react-icons/ai'
import { FaAddressBook, FaHome, FaProductHunt, FaRegRegistered, FaRegistered, FaServicestack, FaShip, FaShippingFast } from 'react-icons/fa'







const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='-m-6 p-0 max-w-full px-4 h-24 bg-slate-200 text-white mx-auto'>
            <div className='w-full flex justify-around items-center m-6 '>
                <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl font-sans text-white flex items-center gap-3'><FaShip /> Clocis Cargo.</h1>

                <ul className='hidden md:flex text-xl font-light'>
                    <li className='py-4 mx-6 '>Home</li>
                    <li className='py-4 mx-6 '>About</li>
                    <li className='py-4 mx-6 '>Product & Services</li>
                    <li className='py-4 mx-6 '>Galleries</li>
                    <li className='py-4 mx-6 '>FAQ</li>
                    <li className='py-4 mx-6 '>Contact</li>
                </ul>


                <div onClick={handleNav} className='block md:hidden px-8 mt-2'>
                    {!nav ? <AiOutlineMenu className='text-white text-xl cursor-pointer' /> : <AiOutlineClose className='text-white text-xl cursor-pointer' />}
                </div>


                <div className={nav ? 'fixed top-0 left-0 w-[100%] min-h-[90vh] border-r border-r-orange-400 bg-slate-900 duration-500 ' : 'fixed left-[-100%]'}>
                    <div className="flex justify-between text-white">
                        <h1 className='font-extrabold py-6 px-6 md:text-4xl sm:text-3xl text-2xl font-sans-serif text-white flex items-center gap-3'><FaShip />Clocis Cargo</h1>

                        <div onClick={handleNav} className='block md:hidden px-8 mt-8'>
                            {!nav ? <AiOutlineMenu className='text-white text-xl cursor-pointer' /> : <AiOutlineClose className='text-white text-xl cursor-pointer' />}

                        </div>
                    </div>
                    <ul className='font-bold text-white block text-lg px-12'>

                        <li className='py-4 mx-6 flex items-center gap-2  cursor-pointer'><FaHome />Home</li>
                        <li className='py-4 mx-6 flex items-center gap-2  cursor-pointer'><FaAddressBook />About</li>
                        <li className='py-4 mx-6 flex items-center gap-2  cursor-pointer'><FaShippingFast />Product & Services</li>
                        <li className='py-4 mx-6 flex items-center gap-2  cursor-pointer'><AiFillFileImage />Galleries</li>
                        <li className='py-4 mx-6 flex items-center gap-2  cursor-pointer'><FaRegistered />FAQ</li>
                        <li className='py-4 mx-6 flex items-center gap-2  cursor-pointer'><AiFillContacts />Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar