import React from 'react'









function Accueil() {
    return (
        <div id="acceuil" className=' h-[100vh] w-[100%] -mt-30 flex justify-start items-end p-4 bg-[url(/image4.jpg)] bg-no-repeat bg-cover bg-center'>
            <div className='w-[90%] h-[80%] flex items-end p-8 font-sans max-sm:my-8'>
                <div className='p-3 m-2 w-full h-1/2 flex flex-col justify-between items-start '>
                    <h1 className='sm:text-4xl md:text-3xl text-xl font-bold text-white'>CDS Technologies</h1>
                    <p className='font-semibold text-white'>La reference de la Telecommunication dans  le <br />territoire National et les sous-regions d'Afrique Central</p>
                    <button><a className='font-bold font-sans px-10 py-2 bg-blue-700 text-white border border-blue-700 hover:bg-transparent hover:border-blue-700 cursor-pointer transition-all' href="#services">NOS SERVICES 🦺</a></button>
                </div>
            </div>

        </div>
    )
}

export default Accueil