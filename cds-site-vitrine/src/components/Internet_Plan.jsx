import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'









function Internet_Plan() {

    const data = [{
        id: 1,
        type: "ECONOMIC",
        prix: 250000,
        mbp: {
            number: 1,
            desc: "Mbps Debit Dedie"
        },
        ip: {
            number: 1,
            desc: "1 Addresse IP"
        },

        domain: {
            number: 1,
            desc: "Nom de domaine en .cm"
        },
        email: {
            number: 5,
            desc: "5 Addresses mails personnalise"
        },

    },

    {
        id: 2,
        type: "BUSINESS",
        prix: 500000,
        mbp: {
            number: 2,
            desc: "Mbps Debit Dedie"
        },
        ip: {
            number: 1,
            desc: "1 Addresse IP"
        },

        domain: {
            number: 1,
            desc: "Nom de domaine en .cm"
        },
        email: {
            number: 10,
            desc: "Addresses mails personnalise"
        },

    },

    {
        id: 3,
        type: "BUSINESS PLUS",
        prix: 850000,
        mbp: {
            number: 4,
            desc: "Mbps Debit Dedie"
        },
        ip: {
            number: 2,
            desc: "Addresse IP"
        },

        domain: {
            number: 1,
            desc: "Nom de domaine en .cm"
        },
        email: {
            number: 15,
            desc: "Addresses mails personnalise"
        },

    },
    {
        id: 4,
        type: "EXCELLENCE",
        prix: 1900000,
        mbp: {
            number: 10,
            desc: "Mbps Debit Dedie"
        },
        ip: {
            number: 2,
            desc: "Addresse IP"
        },

        domain: {
            number: 1,
            desc: "Nom de domaine en .cm"
        },
        email: {
            number: 20,
            desc: "Addresses mails personnalise"
        },

    },

    {
        id: 5,
        type: "EXCELLENCE PLUS",
        prix: 3800000,
        mbp: {
            number: 20,
            desc: "Mbps Debit Dedie"
        },
        ip: {
            number: 3,
            desc: "Addresse IP"
        },

        domain: {
            number: 1,
            desc: "Nom de domaine en .cm"
        },
        email: {
            number: 20,
            desc: "Addresses mails personnalise"
        },

    }

    ]

    return (
        <div className='h-fit flex flex-col justify-between bg-gray-300'>
            <Navbar />
            <div className='p-4 m-2'>
                <h1 className='text-blue-500 font-extrabold font-sans md:text-5xl sm:text-4xl text-3xl m-6 text-shadow-lg text-center'>CDS TECH INTERNET FIBER</h1>
                <p className='font-forte font-bold text-xl text-gray-500 text-center p-4'> Des Offres Internet Puissantes Dediees aux Grandes Entreprises et Institution National et International </p>
                <div className='h-fit w-full flex flex-wrap items-center justify-center gap-2'>

                    {
                        data.map(items => {
                            return (
                                <>

                                    <div key={items.id} className='shadow-xl max-sm:w-full bg-gradient-to-r from-cyan-50 via-white to-white m-4 rounded-sm h-[70vh] px-6 py-6 flex flex-col items-start'>
                                        <h3 className='my-4 font-forte font-extrabold text-gray-600 text-2xl'>{items.type}</h3>
                                        <h1 className='mb-4 text-2xl font-bold font-serif mt-4'><i><span className='font-thin font-sans text-sm p-2 -mt-4'>FCFA</span></i>{items.prix}/Mois</h1>
                                        <p className='px-4 my-3 font-thin'>✔ <span className='font-extrabold'>{ items.mbp.number}</span> { items.mbp.desc}</p>
                                        <p className='px-4 my-3 font-thin'>✔ <span className='font-extrabold'>{items.ip.number}</span> {items.ip.desc}</p>
                                        <p className='px-4 my-3 font-thin'>✔ <span className='font-extrabold'>{items.domain.number}</span>  {items.domain.desc}</p>
                                        <p className='px-4 my-3 font-thin'>✔ <span className='font-extrabold'>{items.email.number}</span>  {items.email.desc}</p>

                                    </div>

                                </>
                            )
                        })
                    }

                    {/* <div className='w-full h-[60vh] bg-orange-300 px-6 py-6 flex flex-col justify-between items-start'>
                        <h3 className='font-forte font-extrabold text-gray-600 text-2xl'>ECONOMIC</h3>
                        <h1 className='text-2xl font-bold font-serif mt-4'><i><span className='font-thin font-sans text-sm p-2 -mt-4'>FCFA</span></i>250,000 /Mois</h1>
                        <p className='px-4 font-thin'>✔ <span className='font-extrabold'>1</span> Mbps Debits</p>
                        <p className='px-4 font-thin'>✔ <span className='font-extrabold'>1</span>  Addresse IP</p>
                        <p className='px-4 font-thin'>✔ <span className='font-extrabold'>1</span>  Nom de domain en .cm</p>
                        <p className='px-4 font-thin'>✔ <span className='font-extrabold'>5</span>  Addresse mail personnalises</p>

                    </div> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Internet_Plan