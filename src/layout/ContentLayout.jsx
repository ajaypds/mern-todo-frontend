import React from 'react'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'
import { useSelector } from 'react-redux'

const ContentLayout = () => {

    const sidebar = useSelector((x) => x.app.sidebar)

    return (
        <div className='flex h-full w-full bg-slate-300'>
            <div className={`transition-all duration-500 border-r overflow-hidden ${sidebar ? 'w-0 border-none' : 'w-0 tablet:w-32'} `}>
                <Sidebar />
            </div>
            <div className='transition-all duration-500'>
                <MainContent />
            </div>
        </div>
    )
}

export default ContentLayout