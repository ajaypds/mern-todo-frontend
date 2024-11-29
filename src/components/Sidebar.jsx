import { AddCircle } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getProjects, toggleSidebar } from '../store'
import { IconButton, Popover } from '@mui/material'
import { HiChevronRight } from "react-icons/hi2";
import { PiHashThin } from "react-icons/pi";
import { BsLayoutSidebar } from "react-icons/bs";
import { PiDotsThreeOutlineThin } from "react-icons/pi";
import { IoAddCircleSharp, IoFileTray, IoFileTrayOutline, IoSearchOutline, IoGrid, IoGridOutline, IoAdd, IoToday, IoTodayOutline, IoCalendarOutline, IoCalendarSharp } from "react-icons/io5";


const Sidebar = () => {

    const [accord, setAccord] = useState(false)
    const [hoverSidebar, setHoverSidebar] = useState(false)
    const [hoverProject, setHoverProject] = useState(null)
    const [projectAnchor, setProjectAnchor] = useState(null)
    const projects = useSelector((x) => x.app.projects.data)
    const dispatch = useDispatch()
    const projectMenuOpen = Boolean(projectAnchor)

    useEffect(() => {
        dispatch(getProjects())
    }, [])

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

    const handleMouseEnterSidebar = () => {
        setHoverSidebar(true)
    }

    const handleMouseLeaveSidebar = () => {
        setHoverSidebar(false)
    }

    const handleMouseEnterProject = (id) => {
        setHoverProject(id)
    }

    const handleMouseLeaveProject = () => {
        setHoverProject(null)
    }

    const handleMenuClick = () => {
        dispatch(toggleSidebar())
    }

    const handleProjectMenuClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setProjectAnchor(e.currentTarget)
    }

    const handleProjectMenuClose = () => {
        setProjectAnchor(null)
    }

    return (
        <div className='pr-2 h-full flex flex-col gap-4 text-gray-600 tracking-wider' onMouseEnter={handleMouseEnterSidebar} onMouseLeave={handleMouseLeaveSidebar}>
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
                    <div className='hover:bg-gray-100 h-full transition-all duration-500 rounded-md cursor-pointer  active:mr-1 active:ml-1 active:mt-1 flex items-center gap-1'><span className='text-amber-600'><IoAddCircleSharp size={26} /></span> <span className='text-amber-800 font-semibold'>Add Task</span></div>
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
                            <div className={`hover:bg-gray-200 ${!hoverSidebar && 'hidden'} h-5 w-5 flex justify-center items-center rounded-full cursor-pointer transition-all duration-500 `} onClick={handleAddProject}><IoAdd size={19} /></div>
                            <div className={`hover:bg-gray-200 ${!hoverSidebar && 'hidden'} h-5 w-5 flex justify-center items-center rounded-full cursor-pointer transition-all duration-500 ${!accord ? 'rotate-0' : 'rotate-90'}`} onClick={handleExpandProjects}><HiChevronRight size={19} /></div>
                        </span>
                    </div>
                </NavLink>
                <div className={`transition-all duration-500 overflow-clip flex flex-col ml-1 tracking-wider ${!accord ? 'max-h-0' : 'max-h-80'}`}>
                    {projects && projects.map((x) => {
                        return (
                            <NavLink key={x._id} to={`/project/${x._id}`} className={({ isActive }) => `rounded-md ${isActive ? 'text-amber-700 bg-orange-100/80' : 'text-gray-600 hover:bg-gray-100'}`} >
                                <div className='py-2 px-1 w-full flex items-center gap-1'
                                    onMouseEnter={() => handleMouseEnterProject(x._id)} onMouseLeave={handleMouseLeaveProject} >
                                    <div className='text-xl mr-1' ><PiHashThin size={19} /></div>
                                    <div className='flex justify-between items-center w-full'>
                                        <div>{x.name}</div>
                                        {hoverProject === x._id ?
                                            <div className='hover:bg-slate-200 p-1 rounded-md' onClick={handleProjectMenuClick}><PiDotsThreeOutlineThin size={14} /></div>
                                            : <div className='text-[calc(0.70rem)]'>{x.incompleteTasks > 0 ? x.incompleteTasks : ''}</div>}
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
            </div>

            <Popover className='mr-2 ' open={projectMenuOpen} anchorEl={projectAnchor} onClose={handleProjectMenuClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}>
                <div className='w-60 h-80 py-6 px-4'>Project Menu</div>
            </Popover>
        </div>
    )
}

export default Sidebar