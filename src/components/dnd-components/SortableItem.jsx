import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { PiDotsSixVerticalBold } from "react-icons/pi";
import React, { useState } from 'react'

const SortableItem = (props) => {
    const [hovered, setHovered] = useState()
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: props.id.id })


    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    const handleMouseEnter = () => {
        const id = props.id.id
        setHovered(id)
    }

    const handleMouseLeave = () => {
        setHovered('')
    }

    return (
        <div className={`flex items-center w-full `} ref={setNodeRef} style={style} {...attributes} {...listeners} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  >
            <div className={`rounded-md cursor-move py-1 px-1 absolute hover:bg-slate-100 hover:visible ${hovered === props.id.id ? 'visible' : 'hidden'}`} {...attributes} {...listeners}><PiDotsSixVerticalBold size={19} /></div>
            <div className='w-6'></div>
            <div className={`py-2 px-2 border-b w-full cursor-pointer ${(props.dragging && hovered === props.id.id) && 'bg-slate-50'}`} >Item {props.id.id}</div>
            <div className='w-6'></div>
        </div >
    )
}

export default SortableItem