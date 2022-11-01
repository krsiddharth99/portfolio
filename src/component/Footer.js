import React from 'react'

function Footer() {
    return (
        <div className='mx-[96px] py-3'>
            <h1 className='font-black text-[14vw] name'>Noa Wynn</h1>
            <div className='grid grid-cols-4 justify-start border-b-4 pb-10 border-black'>
                <div className='col-span-1'>
                    <h1 className='text-4xl font-black'>n.a</h1>
                </div>
                <div className='col-span-1'>
                    <div className='flex flex-col gap-5 font-extrabold'>
                        <a className='mx-4 hover:text-gray-500 transition-all duration-500 ease-in-out' href='12'>About</a>
                        <a className='mx-4 hover:text-gray-500 transition-all duration-500 ease-in-out' href='12'>Work</a>
                        <a className='mx-4 hover:text-gray-500 transition-all duration-500 ease-in-out' href='12'>Contact</a>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className='flex flex-col gap-5 font-extrabold'>
                        <a className='mx-4 hover:text-gray-500 transition-all duration-500 ease-in-out' href='12'>Style guide</a>
                        <a className='mx-4 hover:text-gray-500 transition-all duration-500 ease-in-out' href='12'>License</a>
                        <a className='mx-4 hover:text-gray-500 transition-all duration-500 ease-in-out' href='12'>Password</a>
                        <a className='mx-4 hover:text-gray-500 transition-all duration-500 ease-in-out' href='12'>404</a>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className='flex flex-col gap-5 font-extrabold'>
                        <a className='mx-4 hover:text-gray-500 transition-all duration-500 ease-in-out' href='12'>Twitter</a>
                        <a className='mx-4 hover:text-gray-500 transition-all duration-500 ease-in-out' href='12'>Work</a>
                        <a className='mx-4 hover:text-gray-500 transition-all duration-500 ease-in-out' href='12'>Contact</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer