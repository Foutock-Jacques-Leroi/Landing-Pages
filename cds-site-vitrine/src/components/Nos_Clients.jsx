import React from 'react'









function Nos_Clients() {
    return (
        <div className='w-full h-screen'>
            <div className='px-8 my-4 flex flex-col justify-between gap-4'>
                <div>
                    <h1 className='text-blue-500 font-extrabold font-sans md:text-5xl sm:text-4xl text-3xl'>Nos Clients</h1>
                    <p className='font-[forte] text-2xl gap-4'>ils nous font tous confiance</p>
                </div>
                <div className='bg-red-300 grid grid-rows-4 grid-cols-6 justify-between'>
                    <div className=''>
                        <p>logo</p>
                    </div>
                    <div className=''>
                        <p>logo</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Nos_Clients