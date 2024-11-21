import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { toggleSidebar } from '../store'
import { IconButton } from '@mui/material'
import { BsLayoutSidebar } from "react-icons/bs";

const AppLayout = () => {

    const sidebar = useSelector((x) => x.app.sidebar)
    const [borderDelay, setBorderDelay] = useState(true)

    const dispatch = useDispatch()

    const handleMenuClick = () => {
        dispatch(toggleSidebar())
    }

    useEffect(() => {
        if (!sidebar) {
            setTimeout(() => {
                setBorderDelay(true)
            }, 200);
        } else {
            setTimeout(() => {
                setBorderDelay(false)
            }, 100);
        }
    }, [sidebar])

    return (
        <div className='flex h-full w-full bg-white'>
            <div className={`transition-all duration-500 bg-orange-50/50 overflow-hidden ${!sidebar ? 'w-0' : 'w-0 tablet:w-80 tablet:pl-4'} `}>
                <Sidebar />
            </div>
            <div className='w-full transition-all duration-500 mx-2 h-full flex-col'>
                <div className='h-10 flex items-center'><span className={`${borderDelay ? 'visible' : 'hidden'}`}><IconButton onClick={handleMenuClick}><BsLayoutSidebar size={19} /></IconButton></span> </div>
                <div className='h-[calc(100vh-3rem)]'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AppLayout