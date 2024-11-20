import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from '../store'
import { PiHashThin, PiDotsThreeOutlineThin } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import PageLayout from '../layout/PageLayout';

const Projects = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [hoveredProject, setHoveredProject] = useState(null)
    const projects = useSelector((x) => x.app.projects.data)

    useEffect(() => {
        dispatch(getProjects())
    }, [])

    const handleProjectMenuClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

    }

    const handleMouseEnterOnProject = (id) => {
        setHoveredProject(id)
    }

    const handleMouseLeaveOnProject = (id) => {
        setHoveredProject(null)
    }

    return (
        <PageLayout heading='My Projects'>
            <div className='border-b font-semibold'>{projects.length} projects</div>
            <div className='flex flex-col w-full h-auto overflow-y-auto'>
                {(projects && projects.length > 0) && projects.map((x, i) => {
                    return (
                        <div key={i} className='px-1 flex items-center justify-between cursor-pointer min-h-12 rounded-md hover:bg-gray-100'
                            onMouseEnter={() => handleMouseEnterOnProject(x?._id)} onMouseLeave={() => handleMouseLeaveOnProject(x?._id)}
                            onClick={() => navigate(`/project/${x?._id}`)}>
                            <div className='flex gap-2 items-center'>
                                <div><PiHashThin size={20} /></div>
                                <div>{x.name}</div>
                            </div>
                            <div className={`mr-2 px-2 rounded-md hover:bg-gray-50 ${hoveredProject === x?._id ? 'visible' : 'hidden'}`} onClick={handleProjectMenuClick}><PiDotsThreeOutlineThin size={19} /></div>
                        </div>
                    )
                })}
            </div>
        </PageLayout>
    )
}

export default Projects