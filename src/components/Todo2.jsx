import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import React from 'react'
import { GoCheckCircle } from "react-icons/go";
import { PiCircleThin } from "react-icons/pi";

const Todo2 = ({ todo }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: todo.id })


    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }


    return (
        <div className='flex items-center w-full' ref={setNodeRef} style={style} {...attributes} {...listeners}  >
            <div className='w-6'></div>
            <div className='py-2 px-2 border-b w-full cursor-pointer' >Item {todo.taskname}</div>
            <div className='w-6'></div>
        </div >
    )
}

export default Todo2