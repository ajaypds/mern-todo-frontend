import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const PageLayout = ({ children, heading }) => {
    const [title, setTitle] = useState()
    const location = useLocation()

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    useEffect(() => {
        setTitle(heading)
    }, [heading])
    return (
        <div className='flex justify-center w-full h-full text-gray-700 pt-8'>
            <div className='w-[calc(90%)] max-w-[calc(800px)] min-w-[calc(300px)] h-full flex flex-col gap-2'>
                {!location?.pathname.includes('/project/') ? <div className='text-2xl font-bold border border-white rounded-md py-1 px-1'>
                    {title}
                </div> :
                    <input className='border border-white rounded-md text-2xl font-bold p-1 hover:border-gray-200 focus:border-gray-400 focus:outline-none'
                        value={title} defaultValue={title} onChange={handleTitleChange} type='text' />}
                <div className='h-[calc(95%)] overflow-y-auto rounded-lg pr-2 pb-6'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default PageLayout