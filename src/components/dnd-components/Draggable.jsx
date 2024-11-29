import { useDraggable } from '@dnd-kit/core'
import React, { useEffect } from 'react'

const Draggable = (props) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({
        id: props.id,
    })

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined

    return (
        <button className='bg-slate-200 rounded-lg h-10 w-20' ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </button>
    )
}

export default Draggable