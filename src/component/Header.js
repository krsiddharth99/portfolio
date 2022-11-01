import React from 'react'

function Header() {
    return (
        <div className='fixed left-0 right-0 grid grid-cols-2 mx-[96px] py-3 border-b-4 border-black'>
            <div className='col-span-1'>
                <h1 className='text-4xl font-black'>n.a</h1>
            </div>
            <div className='col-span-1'>
                <div className='font-extrabold'>
                    <a className='mx-4 hover:text-gray-500 transition-all duration-500 ease-in-out' href='12'>About</a>
                    <a className='mx-4 hover:text-gray-500 transition-all duration-500 ease-in-out' href='12'>Work</a>
                    <a className='mx-4 hover:text-gray-500 transition-all duration-500 ease-in-out' href='12'>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Header