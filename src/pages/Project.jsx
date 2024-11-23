import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProject } from '../store'
import PageLayout from '../layout/PageLayout'
import { GoCheckCircle } from "react-icons/go";
import { PiCircleThin } from "react-icons/pi";
import AddTaskInline from '../components/AddTaskInline'


const Project = () => {
    const { id } = useParams()
    const project = useSelector((x) => x.app.project.data)
    const [hoveredCheckId, setHoveredCheckId] = useState()

    const [checkedTasks, setCheckedTasks] = useState([])
    const dispatch = useDispatch()

    const handleTaskCheckMouseEnter = (id) => {
        setHoveredCheckId(id)
    }
    const handleTaskCheckMouseLeave = () => {
        setHoveredCheckId(null)
    }

    const handleCheckClick = (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        if (checkedTasks.includes(id)) {
            setCheckedTasks(checkedTasks.filter((x) => x != id))
        } else {
            setCheckedTasks((x) => {
                return [...x, id]
            })
        }

    }
    useEffect(() => {
        if (id) {
            dispatch(getProject(id))
        }
    }, [id])

    return (
        <PageLayout heading={project.name}>

            <div className='flex flex-col gap-1 mt-2' onMouseLeave={handleTaskCheckMouseLeave}>
                {(project && project?.todos?.length > 0) && project?.todos.map((x, i) => {
                    return (
                        <div key={x._id} className='border-b min-h-8 flex items-center cursor-pointer'>
                            <span className='text-gray-400 h-8 w-8 flex items-center rounded-lg'
                                onClick={(e) => handleCheckClick(e, x._id)}
                                onMouseOver={() => handleTaskCheckMouseEnter(x._id)}
                                onMouseOut={handleTaskCheckMouseLeave}>
                                {checkedTasks.includes(x._id) ? <span className='text-gray-500'><GoCheckCircle size={22} /></span> : hoveredCheckId === x._id ? <GoCheckCircle size={22} /> : <PiCircleThin size={24} />}
                            </span>
                            <span className={`${checkedTasks.includes(x._id) ? 'line-through text-gray-400' : ''}`}>{x.taskname}</span>
                        </div>
                    )
                })}
            </div>
            {id && <AddTaskInline projectId={id} />}
        </PageLayout>
    )
}

export default Project