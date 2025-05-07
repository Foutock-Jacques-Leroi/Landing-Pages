import React from 'react'










function Nos_Services() {


    const data = [{
        id: 1,
        name: "INTERNET",
        info: "Debit tres eleve, fiable et securise destine a etre efficient a l'echelle national et international toute Entreprise confondus",
        image: "/image4.jpg"
    },
    {
        id: 2,
        name: "INSTALLATION RESEAU ET TELECOM",
        info: "Ons vous accompagne la conception et la mise en oeuvre et la maintenance de vos projets dasnle secteur des reseau et la telecommunications.",
        image: "/images3.jpg"
    },
    {
        id: 3,
        name: "INTERCONNEXION DE SITE",
        info: "L'interconnexion est une solution efficace pour permettre l'echange de donneees entre des sites distant d'une Entreprise et le success de cette operation doit etre confie a nous les experts",
        image: "/cover_page_2.jpg"
    },
    {
        id: 4,
        name: "ENERGIE PHOTOVOLTAIQUE",
        info: "Nous vous accompangnions totalement dans la conceptions, la Fourniture du materiels, et dans l'installation et maintenance des champs solaire.",
        image: "/images2.jpg"
    },
    {
        id: 5,
        name: "FTTH (Fiber To The Home) / IPTV ",
        info: "L'un de nos services en connaissance qui offres un Connexion internet illimite, des chaines numeriques en HD et des Videos a la demande. IPTV offre des equipement et mise en services",
        image: "/cover_page_2.jpg"
    },
    {
        id: 6,
        name: "MAINTENANCE",
        info: "Le NOC (Network Operating Center) est disponible 24H/24 7J/7 a vous aider et guider pour des solutions.",
        image: "/images3.jpg"
    }

    ]

    return (
        <div className='w-full h-auto px-6'>
            <div className='py-6 mx-3 '>
                <div className='font-sans text-black flex flex-col justify-between gap-4'>
                    <h1 className='text-blue-500 font-extrabold font-sans md:text-5xl sm:text-4xl text-3xl text-shadow-lg'>Nos Services</h1>
                    <p className='font-light'>Nous offrons de varieter de services, tous de tres bonne qualite avec un excelent rendu, en etant fiable et a l'ecoute pour etre optimale.</p>
                </div>

                <div className=' w-full h-fit my-4'>
                    {/* <div className='bg-gray-200'>
                        <div className='flex items-center gap-4 h-fit max-sm:flex-wrap'>
                            <img className='h-[40vh] w-1/4 max-sm:w-full' src="image4.jpg" />
                            <div className='flex flex-col justify-between'>
                                <div className='md:w-[30%] sm:w-[70%] mx-auto border-b-[3px] border-b-slate-900'>
                                    <h1 className=' text-xl font-extrabold text-center md:text-3xl sm:text-2xl'>INTERNET</h1>
                                </div>
                                <p className='font-light p-6'>Debit tres eleve, fiable et securise destine a etre efficient a l'echelle national et international toute Entreprise confondus</p>
                                <p className='text-center font-bold p-2'>Voir Plus ...</p>
                            </div>

                        </div>
                    </div> */}
                    {
                        data.map((item) => {
                            return (
                                <div className='bg-gray-200 my-6 mx-2' key={item.id}>

                                    <div className={item.id === 6 || item.id === 1 ? 'flex items-center h-fit max-sm:flex-wrap gap-10 max-sm:gap-4' : 'flex items-center h-fit max-sm:flex-wrap'}>

                                        <img className='h-[40vh] max-sm:w-full' src={`${item.image}`} width={200} height={250} />

                                        <div className={item.id === 6 ? 'flex flex-col justify-between ' : 'flex flex-col justify-between my-4'}>
                                            <div className='md:w-[70%] sm:w-[70%] mx-auto border-b-[3px] border-b-slate-900'>
                                                <h1 className=' text-xl font-extrabold text-center md:text-3xl sm:text-2xl p-1'>{item.name}</h1>
                                            </div>
                                            <p className='font-light p-6 text-center'>{item.info}</p>
                                            <p className={item.id === 6 ? 'hidden' : 'text-center font-bold p-2'}>Voir Plus ...</p>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default Nos_Services