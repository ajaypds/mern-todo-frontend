import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const SecondaryLayout = () => {

    const sidebar = useSelector((x) => x.app.sidebar)
    const [borderDelay, setBorderDelay] = useState(true)

    useEffect(() => {
        if (!sidebar) {
            setTimeout(() => {
                setBorderDelay(true)
            }, 300);
        } else {
            setBorderDelay(false)
        }
    }, [sidebar])

    return (
        <div className='flex h-full w-full bg-slate-300'>
            <div className={`transition-all duration-500 overflow-hidden ${borderDelay ? 'border-none' : 'border-r'} ${!sidebar ? 'w-0' : 'w-0 tablet:w-32'} `}>
                <Sidebar />
            </div>
            <div className='transition-all duration-500 pl-2'>
                <Outlet />
            </div>
        </div>
    )
}

export default SecondaryLayout