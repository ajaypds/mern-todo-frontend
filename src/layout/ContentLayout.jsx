import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'
import { useSelector } from 'react-redux'

const ContentLayout = () => {

    const sidebar = useSelector((x) => x.app.sidebar)
    const [borderDelay, setBorderDelay] = useState(false)

    useEffect(() => {
        if (sidebar) {
            setTimeout(() => {
                setBorderDelay(true)
            }, 450);
        } else {
            setBorderDelay(false)
        }
    }, [sidebar])

    return (
        <div className='flex h-full w-full bg-slate-300'>
            <div className={`transition-all duration-500 overflow-hidden ${borderDelay ? 'border-none' : 'border-r'} ${sidebar ? 'w-0' : 'w-0 tablet:w-32'} `}>
                <Sidebar />
            </div>
            <div className='transition-all duration-500'>
                <MainContent />
            </div>
        </div>
    )
}

export default ContentLayout