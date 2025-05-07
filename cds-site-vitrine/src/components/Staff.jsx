import React from 'react'








function Staff() {
    return (
        <div className='h-screen w-full p-6 m-2'>
            <h1 className='text-blue-500 font-extrabold font-sans md:text-5xl sm:text-4xl text-3xl'>Ce Que Nous Avons.</h1>
            <p className='px-2 font-[forte] text-xl'>Un Staff discipline, qualifie et tres competent a la hauteur de vos exigences</p>

            <div className='px-4 m-6 bg-teal-500'>
                <marquee behavior="" direction="left" >
                    <div className='flex gap-6'>
                        <img src="images3.jpg" height={400} width={400} />
                        <img src="images3.jpg" height={400} width={300} />
                        <img src="images3.jpg" height={400} width={300} />
                    </div>
                </marquee>
            </div>


            <div className='m-2'>
                <p className='m-4 px-2 font-[forte] text-xl'>Du Materiel de qualite le tout en etant durable repondent au normes international</p>
                <div className='flex flex-wrap px-4 justify-center items-center'>
                    <img src="image4.jpg" height={300} width={300} className='m-4 p-2 max-[754px]:w-full' />
                    <img src="image4.jpg" height={300} width={300} className='m-4 p-2 max-[754px]:w-full' />
                    <img src="image4.jpg" height={300} width={300} className='m-4 p-2 max-[754px]:w-full' />
                    <img src="image4.jpg" height={300} width={300} className='m-4 p-2 max-[754px]:w-full' />
                    <img src="image4.jpg" height={300} width={300} className='m-4 p-2 max-[754px]:w-full' />
                    <img src="image4.jpg" height={300} width={300} className='m-4 p-2 max-[754px]:w-full' />
                    <img src="image4.jpg" height={300} width={300} className='m-4 p-2 max-[754px]:w-full' />
                    <img src="image4.jpg" height={300} width={300} className='m-4 p-2 max-[754px]:w-full' />





                </div>
            </div>

        </div>
    )
}

export default Staff