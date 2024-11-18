import React from 'react'
import { useParams } from 'react-router-dom'

const Project = () => {
    const { id } = useParams()
    return (
        <div>

            <div>Project</div>
            <div>{id ? id : 'null'}</div>

            <input type='date' />
        </div>
    )
}

export default Project