import { DndContext } from '@dnd-kit/core'
import React, { useState } from 'react'
import Draggable from './Draggable'
import Droppable from './Droppable'

const DndComponent = () => {
    const [isDropped, setIsDropped] = useState(false)
    const [parent, setParent] = useState('B')
    const draggableMarkup = (
        <Draggable id="draggable">Drag me</Draggable>
    )
    const containers = ['A', 'B', 'C']

    const handleDragEnd = (event) => {
        // if (event.over && event.over.id === 'droppable') {
        //     setIsDropped(true);
        // } else {
        //     setIsDropped(false)
        // }
        const { over } = event
        setParent(over ? over.id : null)
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            {/* {!isDropped ? draggableMarkup : null} */}
            {parent === null ? draggableMarkup : null}
            {containers.map((id) => {
                return (<Droppable key={id} id={id}>
                    {parent === id ? draggableMarkup : 'Drop Here'}
                </Droppable>)
            })}

        </DndContext>
    )

    // function handleDragEnd(event) {
    //     if (event.over && event.over.id === 'droppable') {
    //         setIsDropped(true);
    //     }
    // }
}

export default DndComponent