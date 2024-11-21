import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProject } from '../store'
import PageLayout from '../layout/PageLayout'

const Project = () => {
    const { id } = useParams()
    const project = useSelector((x) => x.app.project.data)
    const dispatch = useDispatch()

    useEffect(() => {
        if (id) {
            console.log('fetching project data', id)

            dispatch(getProject(id))
        }
    }, [id])
    return (
        <PageLayout heading={project.name}>
            <div className='cursor-pointer border h-8 flex items-center'>Add Task</div>
            <div>{id ? id : 'null'}</div>

        </PageLayout>
    )
}

export default Project