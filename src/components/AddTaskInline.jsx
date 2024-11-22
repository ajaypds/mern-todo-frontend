import { TextField } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import { IoAddOutline } from "react-icons/io5";

const AddTaskInline = () => {

    const [addTaskHovered, setAddTaskHovered] = useState(false)
    const [addDisabled, setAddDisabled] = useState(true)
    const [showForm, setShowForm] = useState(false)

    const CustomTextField = styled(TextField)({
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            border: 'none'
        }
    })

    const handleMouseHoverInAddTaskLink = () => {
        setAddTaskHovered(true)
    }
    const handleMouseLeaveInAddTaskLink = () => {
        setAddTaskHovered(false)
    }

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    return (
        <>
            <div className={`cursor-pointer font-semibold text-gray-500 hover:text-amber-800 h-8 gap-2 flex items-center ${showForm && 'hidden'}`}
                onMouseOver={handleMouseHoverInAddTaskLink} onMouseOut={handleMouseLeaveInAddTaskLink} onClick={toggleForm}>
                <span className={`rounded-full ${addTaskHovered ? 'bg-amber-600 text-white' : ''}`}><IoAddOutline size={19} /></span>
                <span>Add Task</span>
            </div>
            <div className={`flex flex-col border rounded-lg ${!showForm && 'hidden'}`}>
                <div className='border-b pb-2'>
                    <CustomTextField fullWidth type='text' placeholder='Task name' variant='outlined' />
                </div>
                <div className='flex justify-end items-center gap-2 p-2'>
                    <div className='min-w-24 px-4 border text-center py-1 rounded-lg font-semibold bg-gray-200 hover:bg-gray-300 cursor-pointer' onClick={toggleForm}>Cancel</div>
                    <div className={`min-w-24 px-4 border text-center py-1 rounded-lg font-semibold ${addDisabled ? 'bg-amber-500/60 cursor-not-allowed' : 'cursor-pointer bg-amber-600 hover:bg-amber-700'}  text-white`}>Add</div>
                </div>
            </div>

        </>
    )
}

export default AddTaskInline