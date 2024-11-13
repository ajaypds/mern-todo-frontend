import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='pr-2 flex flex-col gap-4'>
            <div>Sidebar Menu</div>
            <div className='flex flex-col gap-2'>

                <NavLink to='/' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-gray-800'}`} >Home</NavLink>
                <NavLink to='projects' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-gray-800'}`} >Projects</NavLink>
                <NavLink to='todos' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-gray-800'}`} >Todos</NavLink>
            </div>
        </div>
    )
}

export default Sidebar