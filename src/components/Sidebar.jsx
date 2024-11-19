import { AddCircle } from '@mui/icons-material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toggleSidebar } from '../store'
import { IconButton } from '@mui/material'
import { HiChevronRight } from "react-icons/hi2";
import { PiHashThin } from "react-icons/pi";
import { BsLayoutSidebar } from "react-icons/bs";
import { IoAddCircleSharp, IoFileTray, IoFileTrayOutline, IoSearchOutline, IoGrid, IoGridOutline, IoAdd, IoToday, IoTodayOutline, IoCalendarOutline, IoCalendarSharp } from "react-icons/io5";


const Sidebar = () => {

    const [accord, setAccord] = useState(false)
    const [hovr, setHovr] = useState(false)
    const dispatch = useDispatch()


    const handleExpandProjects = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setAccord(!accord);
    }

    const handleAddProject = (event) => {
        event.preventDefault();
        event.stopPropagation();
    }

    const handleUserMenuClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleMouseEnter = () => {
        setHovr(true)
    }

    const handleMouseLeave = () => {
        setHovr(false)
    }

    const handleMenuClick = () => {
        dispatch(toggleSidebar())
    }

    return (
        <div className='pr-2 h-full flex flex-col gap-4 text-gray-600' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='flex justify-between items-center h-9 mt-1'>
                <div className='flex gap-2 items-center font-semibold mt-1'>
                    <div className='h-7 w-7 rounded-full bg-cyan-500 flex items-center justify-center text-white text-lg'>A</div>
                    <div>Ajay</div>
                    <div className='h-4 w-4 hover:bg-gray-100 rounded-full rotate-90 cursor-pointer flex items-center justify-center' onClick={handleUserMenuClick}><HiChevronRight /></div>
                </div>
                <div><IconButton onClick={handleMenuClick}><BsLayoutSidebar size={19} /></IconButton></div>
            </div>
            <div className='flex flex-col'>
                <div className='w-full h-9'>
                    <div className='hover:bg-gray-100 h-full transition-all duration-500 rounded-md cursor-pointer p-1 active:mr-1 active:ml-1 active:mt-1 flex items-center gap-1'><span className='text-amber-600'><IoAddCircleSharp size={26} /></span> <span className='text-amber-800 font-semibold'>Add Task</span></div>
                </div>
                <div className='w-full h-9'>
                    <div className='hover:bg-gray-100 h-full transition-all duration-500 rounded-md cursor-pointer p-1 active:mr-1 active:ml-1 active:mt-1 flex items-center gap-1'><span className=''><IoSearchOutline size={19} /></span> <span className=''>Search</span></div>
                </div>
                <NavLink to='/inbox' className={({ isActive }) => `rounded-md h-9 flex items-center ${isActive ? 'text-amber-700 bg-orange-100/80' : 'text-gray-600 hover:bg-gray-100'}`} >
                    {({ isActive }) => (<div className='p-1 flex items-center gap-1'><span >{isActive ? <IoFileTray size={19} /> : <IoFileTrayOutline size={19} />}</span> Inbox</div>)}
                </NavLink>
                <NavLink to='/today' className={({ isActive }) => `rounded-md h-9 flex items-center ${isActive ? 'text-amber-700 bg-orange-100/80' : 'text-gray-600 hover:bg-gray-100'}`} >
                    {({ isActive }) => (<div className='p-1 flex items-center gap-1'><span className=''>{isActive ? <IoToday size={19} /> : <IoTodayOutline size={19} />}</span> Today</div>)}
                </NavLink>
                <NavLink to='/upcoming' className={({ isActive }) => `rounded-md h-9 flex items-center ${isActive ? 'text-amber-700 bg-orange-100/80' : 'text-gray-600 hover:bg-gray-100'}`} >
                    {({ isActive }) => (<div className='p-1 flex items-center gap-1'><span className=''>{isActive ? <IoCalendarSharp size={19} /> : <IoCalendarOutline size={19} />}</span> Upcoming</div>)}
                </NavLink>
                <NavLink to='/filter-labels' className={({ isActive }) => `rounded-md h-9 flex items-center ${isActive ? 'text-amber-700 bg-orange-100/80' : 'text-gray-600 hover:bg-gray-100'}`} >
                    {({ isActive }) => (<div className='p-1 flex items-center gap-1'><span className=''>{isActive ? <IoGrid size={19} /> : <IoGridOutline size={19} />}</span> Filter & Labels</div>)}
                </NavLink>

            </div>

            <div className='flex flex-col'>
                <NavLink to='/projects' className={({ isActive }) => `rounded-md h-8 ${isActive ? 'bg-orange-100/80' : 'text-gray-600 hover:bg-gray-100'}`} >
                    {/* <div className='p-1 flex items-center gap-1'><span className='text-xl' >#</span> Projects</div> */}

                    <div className='p-1 font-semibold flex justify-between' >
                        <div className=''>My Projects</div>
                        <span className='flex gap-1 items-center'>
                            <div className={`hover:bg-gray-200 ${!hovr && 'hidden'} h-5 w-5 flex justify-center items-center rounded-full cursor-pointer transition-all duration-500 `} onClick={handleAddProject}><IoAdd size={19} /></div>
                            <div className={`hover:bg-gray-200 ${!hovr && 'hidden'} h-5 w-5 flex justify-center items-center rounded-full cursor-pointer transition-all duration-500 ${!accord ? 'rotate-0' : 'rotate-90'}`} onClick={handleExpandProjects}><HiChevronRight size={19} /></div>
                        </span>
                    </div>
                </NavLink>
                {/* <div className='font-semibold flex justify-between items-center'>
                    <div>My Projects</div>
                    <div className={`hover:bg-gray-100 rounded-full cursor-pointer transition-all duration-500 ${!accord ? 'rotate-0' : 'rotate-90'}`} onClick={() => setAccord(!accord)}><KeyboardArrowRight /></div>
                </div> */}
                <div className={`transition-all duration-500 overflow-clip flex flex-col ml-2  ${!accord ? 'max-h-0' : 'max-h-80'}`}>
                    <NavLink to='/' className={({ isActive }) => `rounded-md ${isActive ? 'text-amber-700 bg-orange-100/80' : 'text-gray-600 hover:bg-gray-100'}`} >
                        <div className='p-1 flex items-center gap-1'><span className='text-xl' ><PiHashThin size={19} /></span> Home</div>
                    </NavLink>
                    {/* <NavLink to='/projects' className={({ isActive }) => `rounded-md ${isActive ? 'text-amber-700 bg-orange-100/80' : 'text-gray-600 hover:bg-gray-100'}`} >
                        <div className='p-1 flex items-center gap-1'><span className='text-xl' >#</span> Projects</div>
                    </NavLink> */}
                    <NavLink to='/project/123' className={({ isActive }) => `rounded-md ${isActive ? 'text-amber-700 bg-orange-100/80' : 'text-gray-600 hover:bg-gray-100'}`} >
                        <div className='p-1 flex items-center gap-1'><span className='text-xl' ><PiHashThin size={19} /></span> Project/123</div>
                    </NavLink>
                    <NavLink to='/todos' className={({ isActive }) => `rounded-md ${isActive ? 'text-amber-700 bg-orange-100/80' : 'text-gray-600 hover:bg-gray-100'}`} >
                        <div className='p-1 flex items-center gap-1'><span className='text-xl' ><PiHashThin size={19} /></span> Todos</div>
                    </NavLink>
                </div>
            </div>


        </div>
    )
}

export default Sidebar