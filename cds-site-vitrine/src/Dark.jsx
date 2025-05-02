import React, { useState } from 'react'








import { useDarkMode } from '../src/components/ThemeProvider'

function Dark() {
    const {darkMode, setDarkMode} = useDarkMode()
    return (
        <div>
            <div>
                <button onClick={() => setDarkMode(!darkMode)} className='shadow-sm rounded-full p-2 cursor-pointer'>
                    {darkMode ? <img className='theme' src="sunlight.svg" height={30} width={30} /> : <img className='theme' src="night-moon.svg" height={30} width={30} />}
                </button>
            </div>
        </div>
    )
}

export default Dark