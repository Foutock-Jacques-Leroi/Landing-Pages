import React, { useRef } from 'react'




import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import "react-toastify/dist/ReactToastify.css"
import { toast } from 'react-toastify'





function Footer() {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_vw35i4p', 'template_hit28ws', form.current, {
                publicKey: 'xcRX1TpEIaJgAaWkp',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success("E-Mail Successfully Send !")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Not Send, try again !")

                },
            );
    };

    return (
        <div className='h-fit w-full bg-slate-900'>
            <div className='flex flex-wrap'>
                <h1 className='my-2 p-2 text-white font-extrabold font-sans md:text-5xl sm:text-4xl text-3xl text-shadow-lg'>Nous Contacter</h1>
                
                <div className=' flex max-[800px]:flex-wrap justify-center items-center '>

                    <div className='flex flex-col h-[50vh] w-full items-center'>
                        <p className='text-xl font-serif font-semibold text-white p-8'>Nous vous apportons une fiabilite sans faille et nous restons a lecoute de vos exigences tels quelle soit. Les Feedbacks nourisses d'avantage des liens et d'experiences</p>
                        <div className='flex m-4 gap-3 justify-center items-center'>
                            <FaLinkedin size={40} className='text-sky-800 cursor-pointer' />
                            <FaFacebook size={40} className='text-blue-800 cursor-pointer' />
                            <img src="instagram.svg" height={40} width={40} className='cursor-pointer' />
                        </div>
                    </div>

                    <div className='w-full'>

                        <form className="w-full flex flex-col py-3" ref={form} onSubmit={sendEmail}>

                            <input className='p-2 text-black font-thin text-md px-6 m-2 rounded-sm border border-white  mx-auto w-[70%] bg-white' placeholder='Your Name' type="text" name="from_name" />
                            <input className='p-2 text-black font-thin text-md px-6 m-2 rounded-sm border border-white  mx-auto w-[70%] bg-white' placeholder='Your Email' type="email" name="from_email" />
                            <textarea className='p-2 text-black font-thin text-md px-6 m-4 rounded-sm border border-white  mx-auto w-[70%] bg-white' placeholder='Enter Your Message...' name="message" />
                            <input className='cursor-pointer text-white px-12 border-[2px] text-lg border-teal-400 py-2 rounded-sm hover:bg-black duration-300 font-bold w-[70%] mx-auto' type="submit" value="Notify Us" />
                        </form>

                    </div>

                </div>
            </div>
            <p className='text-center text-white text-sm font-thin'>Copyright Protected &copy; FYJL</p>
        </div>
    )
}

export default Footer