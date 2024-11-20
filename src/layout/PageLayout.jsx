import React from 'react'

const PageLayout = ({ children, heading }) => {

    return (
        <div className='flex justify-center w-full h-full text-gray-700 pt-8'>
            <div className='w-[calc(90%)] max-w-[calc(800px)] min-w-[calc(300px)] h-full flex flex-col gap-2'>
                <div className='text-2xl font-bold'>{heading}</div>
                {children}
            </div>
        </div>
    )
}

export default PageLayout