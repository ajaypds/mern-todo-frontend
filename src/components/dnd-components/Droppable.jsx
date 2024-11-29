import { useDroppable } from '@dnd-kit/core'
import React from 'react'

const Droppable = (props) => {
    const { isOver, setNodeRef } = useDroppable({
        id: props.id,
    })
    const style = {
        color: isOver ? 'green' : undefined
    }
    return (
        <div className='h-20 w-full bg-slate-100 border rounded-lg flex items-center px-2' ref={setNodeRef} style={style}>
            {props.children}
        </div>
    )
}

export default Droppable