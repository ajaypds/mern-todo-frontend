import { Menu } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../store'

const Header = () => {
    const dispatch = useDispatch()

    const handleMenuClick = () => {
        dispatch(toggleSidebar())
    }
    return (
        <div className='py-5 flex justify-between'>
            <div>
                {/* Header */}
                <IconButton onClick={handleMenuClick}><Menu /></IconButton>
            </div>
            <div></div>
        </div>
    )
}

export default Header