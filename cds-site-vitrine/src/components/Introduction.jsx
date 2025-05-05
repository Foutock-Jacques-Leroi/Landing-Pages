import React from 'react'









function Introduction() {
    return (
        <div className='w-full h-auto '>

            <div className='flex flex-col justify-around items-center mx-2 py-6'>
                <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl text-blue-500 gap-4'> Qui Sommes-Nous <span className='font-extrabold text-teal-300 md:text-5xl sm:text-4xl text-3xl '>?</span></h1>
                <p className='p-10'><span className='font-bold font-sans'>CDS Technologies Sarl</span> est une entreprise de droits Camerounaise qui vise a offrir des
                    services innovant sur le territoire national et dans la sous-regions d'Afrique central tels que la <span className='font-bold font-sans'>Fourniture d'internet </span>
                    par fibre optique, <span className='font-bold font-sans'>l'interconnexion des sites, Installations et la fourniture Telecom </span> et enfin la <span className='font-bold font-sans'> Maintenance. </span>
                    Nos <span className='font-bold font-sans text-red-700'>16ans </span> d'Experiences et d'Expertise consolide nos relations avec nos partenaires.</p>
            </div>

        </div>
    )
}

export default Introduction