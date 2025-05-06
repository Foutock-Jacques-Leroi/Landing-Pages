import React from 'react'









function Nos_Clients() {
    const data = [{
        id: 1,
        image: "orange.png"
    },
    {
        id: 2,
        image: "cotco.jpg"
    },
    {
        id: 3,
        image: "port-autonome-de-douala-seeklogo.png"
    },
    {
        id: 4,
        image: "rtc.png"
    },
    {
        id: 5,
        image: "php.jpg"
    },
    {
        id: 6,
        image: "huawei.jpg"
    },
    {
        id: 7,
        image: "mtn-new-logo.svg"
    },
    {
        id: 8,
        image: "camtel.svg"
    },
    {
        id: 9,
        image: "art.png"
    },
    {
        id: 10,
        image: "schsa.png"
    },
    {
        id: 11,
        image: "omnium.jpg"
    },
    {
        id: 12,
        image: "sepbc.jpg"
    },
    {
        id: 13,
        image: "afriland.svg"
    },
    {
        id: 14,
        image: "sgc.png"
    },
    {
        id: 15,
        image: "camrail.jpg"
    },
    {
        id: 16,
        image: "cegelec-seeklogo.png"
    },
    {
        id: 17,
        image: "IUC.jpg"
    },
    {
        id: 18,
        image: "eneo.png"
    },
    {
        id: 19,
        image: "saconets.jpg"
    },
    {
        id: 20,
        image: "hevecam.jpg"
    },
    {
        id: 21,
        image: "ieng.jpg"
    },
    {
        id: 22,
        image: "zte.png"
    },
    ]
    return (
        <div className='w-full h-fit'>
            <div className='px-8 my-4 flex flex-col justify-between gap-4'>
                <div>
                    <h1 className='text-blue-500 font-extrabold font-sans md:text-5xl sm:text-4xl text-3xl'>Nos Clients</h1>
                    <p className='font-[forte] text-2xl gap-4'>ils nous font tous confiance</p>
                </div>
                <div className='flex flex-wrap'>
                    {
                        data.map(item => {
                            return (
                                <>
                                    <div key={item.id} className='m-2 flex items-center justify-center' >
                                        <img src={item.image} height={150} width={150} />
                                    </div>
                                </>
                            )
                        })
                    }
                    {/* <div className=''>
                        <img src="" alt="" />
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default Nos_Clients