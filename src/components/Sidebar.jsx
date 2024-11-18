import { AddCircle, Filter, GridViewOutlined, HorizontalSplit, Inbox, KeyboardArrowDown, KeyboardArrowRight, MenuOutlined, Search, Tag, Today, Upcoming } from '@mui/icons-material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toggleSidebar } from '../store'
import { IconButton } from '@mui/material'

const Sidebar = () => {

    const [accord, setAccord] = useState(false)

    const dispatch = useDispatch()

    const handleMenuClick = () => {
        dispatch(toggleSidebar())
    }

    return (
        <div className='pr-2 flex flex-col gap-4 text-gray-600'>
            <div className='flex justify-between items-center'>
                <div>Ajay</div>
                <div><IconButton onClick={handleMenuClick}><MenuOutlined /></IconButton></div>
            </div>
            <div className='flex flex-col'>
                <div className='w-full h-10'>
                    <div className='hover:bg-gray-100 transition-all duration-500 rounded-md cursor-pointer p-1 active:mr-1 active:ml-1 active:mt-1 flex items-center gap-1'><span className='text-orange-600'><AddCircle /></span> <span className='text-orange-800 font-semibold'>Add Task</span></div>
                </div>
                <div className='w-full h-10'>
                    <div className='hover:bg-gray-100 transition-all duration-500 rounded-md cursor-pointer p-1 active:mr-1 active:ml-1 active:mt-1 flex items-center gap-1'><span className=''><Search /></span> <span className=''>Search</span></div>
                </div>
                <NavLink to='/inbox' className={({ isActive }) => `rounded-md ${isActive ? 'text-red-700 bg-orange-100/80' : 'text-gray-600 hover:bg-gray-100'}`} >
                    <div className='p-1 flex items-center gap-1'><span ><Inbox /></span> Inbox</div>
                </NavLink>
                <NavLink to='/today' className={({ isActive }) => `rounded-md ${isActive ? 'text-red-700 bg-orange-100/80' : 'text-gray-600 hover:bg-gray-100'}`} >
                    <div className='p-1 flex items-center gap-1'><span className=''><Today /></span> Today</div>
                </NavLink>
                <NavLink to='/upcoming' className={({ isActive }) => `rounded-md ${isActive ? 'text-red-700 bg-orange-100/80' : 'text-gray-600 hover:bg-gray-100'}`} >
                    <div className='p-1 flex items-center gap-1'><span className=''><HorizontalSplit /></span> Upcoming</div>
                </NavLink>
                <NavLink to='/filter-labels' className={({ isActive }) => `rounded-md ${isActive ? 'text-red-700 bg-orange-100/80' : 'text-gray-600 hover:bg-gray-100'}`} >
                    <div className='p-1 flex items-center gap-1'><span className=''><GridViewOutlined /></span> Filter & Labels</div>
                </NavLink>




                {/* <NavLink to='/' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-gray-600'}`} >Home</NavLink>
                <NavLink to='projects' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-gray-600'}`} >Projects</NavLink>
                <NavLink to='project/123' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-gray-600'}`} >Project/123</NavLink>
                <NavLink to='todos' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-gray-600'}`} >Todos</NavLink> */}
            </div>
            <div className='flex-col'>
                <div className='font-semibold flex justify-between items-center'>
                    <div>My Projects</div>
                    <div className={`hover:bg-gray-100 rounded-full transition-all duration-500 ${!accord ? 'rotate-0' : 'rotate-90'}`} onClick={() => setAccord(!accord)}><KeyboardArrowRight /></div>
                </div>
                <div className={`transition-all duration-500 overflow-clip flex flex-col  ${!accord ? 'max-h-0' : 'max-h-80'}`}>
                    <NavLink to='/' className={({ isActive }) => `rounded-md ${isActive ? 'text-red-700 bg-orange-100/80' : 'text-gray-600 hover:bg-gray-100'}`} >
                        <div className='p-1 flex items-center gap-1'><span className='text-xl' >#</span> Home</div>
                    </NavLink>
                    <NavLink to='/projects' className={({ isActive }) => `rounded-md ${isActive ? 'text-red-700 bg-orange-100/80' : 'text-gray-600 hover:bg-gray-100'}`} >
                        <div className='p-1 flex items-center gap-1'><span className='text-xl' >#</span> Projects</div>
                    </NavLink>
                    <NavLink to='/project/123' className={({ isActive }) => `rounded-md ${isActive ? 'text-red-700 bg-orange-100/80' : 'text-gray-600 hover:bg-gray-100'}`} >
                        <div className='p-1 flex items-center gap-1'><span className='text-xl' >#</span> Project/123</div>
                    </NavLink>
                    <NavLink to='/todos' className={({ isActive }) => `rounded-md ${isActive ? 'text-red-700 bg-orange-100/80' : 'text-gray-600 hover:bg-gray-100'}`} >
                        <div className='p-1 flex items-center gap-1'><span className='text-xl' >#</span> Todos</div>
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

export default Sidebar