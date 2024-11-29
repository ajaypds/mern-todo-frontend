import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'
import React, { useEffect, useState } from 'react'
import SortableItem from './SortableItem'
import Todo from '../Todo'

const SortableDndList = () => {
    const [dragging, setDragging] = useState(false)
    const [items, setItems] = useState([
        { index: 1, id: 1 },
        { index: 2, id: 2 },
        { index: 3, id: 3 },
        { index: 4, id: 4 },
        { index: 5, id: 5 },
        { index: 6, id: 6 },
        { index: 7, id: 7 },
        { index: 8, id: 8 },
        { index: 9, id: 9 },
        { index: 10, id: 10 }
        // 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'
    ])
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            setItems((items) => {
                // const oldIndex = items.indexOf(active.id);
                // const newIndex = items.indexOf(over.id);
                const oldIndex = items.findIndex(item => item.index === active.id);
                const newIndex = items.findIndex(item => item.index === over.id);
                // console.log({ oldIndex, newIndex })
                return arrayMove(items, oldIndex, newIndex)
            })
        }
        setDragging(false)
    }

    const handleDragStart = () => {
        setDragging(true)
    }



    // useEffect(() => {
    //     console.log(items)
    // }, [items])

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
                {items.map((id) => {
                    return (
                        <SortableItem key={id.id} dragging={dragging} id={id} />
                        // <Todo key={id.index} todo={id} />
                    )
                })}
            </SortableContext>
        </DndContext>
    )
}

export default SortableDndList