import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../components/conact.css"
import "react-toastify/dist/ReactToastify.css"
import { toast } from 'react-toastify'

function Contact() {


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
        <form className="w-full flex flex-col px-8 py-3 border-x-[3px] rounded-lg border-x-green-500" ref={form} onSubmit={sendEmail}>

            <input className='p-2 text-black font-semibold text-md px-6 m-4 rounded-md border border-orange-400 outline-offset-1 mx-auto w-[80%]' placeholder='Your Name' type="text" name="from_name" />
            <input className='p-2 text-black font-semibold text-md px-6 m-4 rounded-md border border-orange-400 outline-offset-1 mx-auto w-[80%]' placeholder='Your Email' type="email" name="from_email" />
            <textarea className='p-2 text-black font-semibold text-md px-6 m-4 rounded-md border border-orange-400 outline-offset-1 mx-auto w-[80%]' placeholder='Enter Your Message...' name="message" />
            <input className='pointer px-12 border-[2px] text-lg border-orange-500 py-2 rounded-md hover:bg-orange-500  duration-300 font-bold' type="submit" value="Notify Me" />
        </form>
    );
};




export default Contact
