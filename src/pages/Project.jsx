import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'
import React, { useEffect, useState } from 'react'
import Todo from '../components/Todo'
import { useDispatch, useSelector } from 'react-redux'
import { getProject, updateTodoOrder } from '../store'
import { useParams } from 'react-router-dom'
import AddTaskInline from '../components/AddTaskInline'
import PageLayout from '../layout/PageLayout'
import Todo2 from '../components/Todo2'

const Project = () => {
    const { id } = useParams()
    const project = useSelector((x) => x.app.project.data)
    const [hoveredCheckId, setHoveredCheckId] = useState()
    const [hovered, setHovered] = useState(null)
    const [dragId, setDragId] = useState()
    const [checkedTasks, setCheckedTasks] = useState([])
    const [dragging, setDragging] = useState(false)
    const dispatch = useDispatch()
    const [todos, setTodos] = useState([])

    useEffect(() => {
        if (id) {
            dispatch(getProject(id))
        }
    }, [id])

    useEffect(() => {
        if (project && project.todos?.length > 0) {
            let list = [...project.todos]
                .sort((a, b) => a.id - b.id)
            setTodos(list)
        } else {
            setTodos([])
        }
    }, [project])

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragStart = (e) => {
        setDragging(true)
        setDragId(e.active.id)
    }

    const handleDragEnd = async (event) => {
        const { active, over } = event;
        const order = []
        if (active.id !== over.id) {
            setTodos((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
                const arr = arrayMove(items, oldIndex, newIndex)
                arr.forEach((ar) => {
                    order.push(ar._id)
                })
                return arr
            })
            // updating order in db
            dispatch(updateTodoOrder(order))
        }
        setDragging(false)
    }

    return (
        <PageLayout heading={project.name}>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
                <SortableContext items={todos.map(i => i.id)} strategy={verticalListSortingStrategy}>
                    <div className='flex flex-col'>
                        {todos.map((todo) => {
                            return (
                                <Todo key={todo._id} todo={todo} dragging={dragging} dragId={dragId} hoveredCheckId={hoveredCheckId} setHoveredCheckId={setHoveredCheckId}
                                    hovered={hovered} setHovered={setHovered} checkedTasks={checkedTasks} setCheckedTasks={setCheckedTasks} />
                            )
                        })}
                    </div>
                </SortableContext>
            </DndContext>
            {id && <AddTaskInline projectId={id} />}
        </PageLayout >
    )
}

export default Project