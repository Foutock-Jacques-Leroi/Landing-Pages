import React from 'react'







function Page() {
    return (
        <div className='w-full bg-cyan-800 font-sans my-6 p-6'>

            <div>
                <h2 className='font-sans font-extrabold text-white md:text-5xl sm:text-4xl text-3xl text-center p-6'> Trusted by millions of people around the world</h2>
                <div className='flex justify-center items-center max-sm:flex-col gap-16 mt-10'>
                    <div className='text-2xl font-light text-white text-center'>
                        <h1 className='font-extrabold md:text-5xl sm:text-4xl text-3xl'>99 %</h1>
                        <p>Satisfied Clients</p>
                    </div>

                    <div className='text-2xl font-light text-white text-center'>
                        <h1 className='font-extrabold md:text-5xl sm:text-4xl text-3xl'>100 +</h1>
                        <p>Client Assistance</p>
                    </div>

                    <div className='text-2xl font-light text-white text-center'>
                        <h1 className='font-extrabold md:text-5xl sm:text-4xl text-3xl'>10k +</h1>
                        <p>World wide Users</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Page