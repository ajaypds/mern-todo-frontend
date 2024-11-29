import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import React, { useEffect } from 'react'
import { GoCheckCircle } from "react-icons/go";
import { PiCircleThin } from "react-icons/pi";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { useDispatch } from 'react-redux';
import { getProjects, toggleTodoComplete } from '../store';

const Todo = ({ todo, hoveredCheckId, setHoveredCheckId, checkedTasks, setCheckedTasks, dragging, dragId, hovered, setHovered }) => {

    const dispatch = useDispatch()
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

    const handleTaskCheckMouseEnter = (id) => {
        setHoveredCheckId(id)
    }
    const handleTaskCheckMouseLeave = () => {
        setHoveredCheckId(null)
    }

    const handleCheckClick = async (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        var data = {}
        if (checkedTasks.includes(id)) {
            data = { id: id, completed: false }
            setCheckedTasks(checkedTasks.filter((x) => x != id))
        } else {
            data = { id: id, completed: true }
            setCheckedTasks((x) => {
                return [...x, id]
            })
        }
        dispatch(toggleTodoComplete(data)).then(() => {
            dispatch(getProjects())
        })
    }

    useEffect(() => {
        if (todo.completed) {
            setCheckedTasks((x) => {
                return [...x, todo._id]
            })
        }
    }, [])

    return (
        <div className={`border-b min-h-9 flex items-center cursor-pointer ${(dragging && dragId === todo.id) && 'rounded-md border bg-white z-10 shadow-md'} `} ref={setNodeRef} style={style}
            onMouseEnter={() => setHovered(todo._id)}
            onMouseLeave={() => setHovered(null)}>
            <div className={`rounded-md cursor-move h-9 px-1 absolute -translate-x-7 flex items-center hover:bg-slate-50 hover:visible ${hovered === todo._id ? 'visible' : 'hidden'}`} {...attributes} {...listeners}><PiDotsSixVerticalBold size={19} /></div>
            <div className='text-gray-400 h-full w-8 flex items-center justify-center rounded-md '
                onClick={(e) => handleCheckClick(e, todo._id)}
                onMouseOver={() => handleTaskCheckMouseEnter(todo._id)}
                onMouseOut={handleTaskCheckMouseLeave}>
                {checkedTasks.includes(todo._id) ? <div className='text-gray-500'><GoCheckCircle size={22} /></div> : hoveredCheckId === todo._id ? <GoCheckCircle size={22} /> : <PiCircleThin size={24} />}
            </div>
            <div className={` w-full h-full flex items-center rounded-md pl-1 ${checkedTasks.includes(todo._id) ? 'line-through text-gray-400' : ''}`} onMouseEnter={handleTaskCheckMouseLeave} {...attributes} {...listeners}>{`${todo.taskname}`}</div>
        </div>
    )
}

export default Todo