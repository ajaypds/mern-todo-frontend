import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProject, getProjects, getTodos } from '../store'
import { Button, Input } from '@mui/material'

const MainContent = () => {
    const dispatch = useDispatch()
    const projects = useSelector((x) => x.app.projects.data)
    const todos = useSelector((x) => x.app.todos.data)
    const [input, setInput] = useState('')

    useEffect(() => {
        dispatch(getTodos())
        dispatch(getProjects())
    }, [])

    const handleAddProject = () => {
        if (input !== '') {
            dispatch(addProject({ name: input })).then(() => {
                dispatch(getProjects())
                setInput('')
            })
        }
    }

    return (
        <div>
            Main Content!!
            <div>Projects</div>
            <div>{projects && projects.map((project) => {
                return <div key={project?._id}>{project?.name}</div>
            })}</div>
            <div>Todos</div>
            <div>{todos && todos.map((todo) => {
                return <div key={todo?._id}>{todo?.taskname} </div>
            })}</div>

            <Input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
            <Button onClick={handleAddProject}>Add Project</Button>
        </div>
    )
}

export default MainContent