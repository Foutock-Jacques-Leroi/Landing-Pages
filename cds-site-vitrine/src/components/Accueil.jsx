import React from 'react'









function Accueil() {
    return (
        <div className='bg-yellow-500 h-[100vh] w-[100%] -mt-5 flex justify-start items-end p-4'>
            <div className='bg-red-600 w-[90%] h-[80%] flex items-end p-8 font-sans'>
                <div className='bg-red-300 p-3 m-2 w-1/2 h-1/2 flex flex-col justify-between items-start '>
                    <h1 className='sm:text-4xl md:text-3xl text-xl font-bold gap-2'>CDS Technologies</h1>
                    <p className='font-semibold'>La reference de la Telecommunication dans  le <br />territoire National et les sous-regions d'Afrique Central</p>
                    <button className='font-bold px-8 py-3 bg-blue-700 text-white border border-blue-700 hover:bg-transparent hover:border-blue-700 cursor-pointer transition-all'>NOS SERVICES 🦺</button>
                </div>
            </div>

        </div>
    )
}

export default Accueil