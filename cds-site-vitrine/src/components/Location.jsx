import React from 'react'







function Location() {


    const data = [{
        id: 1,
        town: "Douala",
        location: "Makepe BLOC L, Carrefour VIP 237",
        bp: "7629 DOUALA-CAMEROUN",
        tel: "(+237) 697 095 724 / 671 306 581"
    }, {
        id: 2,
        town: "Yaounde",
        location: "Tsinga, sise face Marie",
        tel: "(+237) 697 095 724 / 671 306 581"
    },
    {
        id: 3,
        town: "BAFOUSSAM",
        location: "Carrefour TOCKET apres L'OBC",
        tel: "(+237) 697 095 724 / 671 306 581"
    },
    {
        id: 4,
        town: "GAROUA",
        location: "Marouare Carrefour Clinic Southia a cote de la direction Arica Security",
        tel: "(+237) 697 095 724/ 671 306 581"
    }
    ]

    return (
        <div className='w-full h-screen px-6 m-4'>
            <h1 className='text-shadow-lg font-extrabold md:text-4xl sm:text-3xl text-2xl text-blue-500 gap-4'> Ou Nous Trouver <span className='font-extrabold text-teal-300 md:text-5xl sm:text-4xl text-3xl '>?</span></h1>

            <div className='px-2 my-10 flex flex-wrap justify-center gap-6'>
                {
                    data.map(item => {
                        return (
                            <>
                                <div key={item.id} className='gap-2 border-l-[9px] border-slate-900 flex flex-col justify-center items-start p-8 px-4 md:w-[40%] w-full h-[40vh]'>
                                    <h2 className='text-green-400 font-bold text-2xl mb-2'>{item.town}</h2>
                                    <p className='font-thin text-xl'>Siege Social:<span className='font-bold text-xl font-sans'>{item.location}</span></p>
                                    {item.id === 1 ? <><p className='font-thin text-xl'>BP:<span className='font-bold text-xl font-sans'>{item.bp}</span></p></>:null}
                                    <p className='font-thin text-xl'>Tel:<span className='font-bold text-xl font-sans'>{item.tel}</span></p>
                                </div>

                            </>
                        )
                    })
                }

                {/* <div className='border-l-[9px] border-slate-900 flex flex-col justify-center items-start p-8 px-4 w-1/2 shadow-lg rounded-bl-lg'>
                    <h2 className='text-green-400 font-bold text-2xl mb-6'>DOUALA</h2>
                    <p className='font-thin text-xl'>Siege Social:<span className='font-bold text-xl font-sans'>Makepe BLOC L, Carrefour VIP 237</span></p>
                    <p className='font-thin text-xl'>BP:<span className='font-bold text-xl font-sans'>7629 DOUALA-CAMEROUN</span></p>
                    <p className='font-thin text-xl'>Tel:<span className='font-bold text-xl font-sans'>(+237) 697 095 724/ 671 306 581</span></p>
                </div> */}
            </div>
        </div>
    )
}

export default Location