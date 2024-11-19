import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { toggleSidebar } from '../store'
import { IconButton } from '@mui/material'
import { BsLayoutSidebar } from "react-icons/bs";

const SecondaryLayout = () => {

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
            }, 300);
        } else {
            setBorderDelay(false)
        }
    }, [sidebar])

    return (
        <div className='flex h-full w-full bg-white'>
            <div className={`transition-all duration-500 bg-orange-50/50 overflow-hidden ${borderDelay ? 'border-none' : 'border-none'} ${!sidebar ? 'w-0' : 'w-0 tablet:w-60 tablet:pl-4'} `}>
                <Sidebar />
            </div>
            <div className='transition-all duration-500 pl-2 flex-col'>
                <div className='h-10 flex items-center'>{!sidebar && <IconButton onClick={handleMenuClick}><BsLayoutSidebar size={19} /></IconButton>} Page Title</div>
                <Outlet />
            </div>
        </div>
    )
}

export default SecondaryLayout