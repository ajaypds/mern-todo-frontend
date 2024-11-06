import React from 'react'
import Header from '../components/Header'
import ContentLayout from './ContentLayout'

const MainLayout = () => {
    return (
        <div className='flex flex-col h-full pl-5 pr-5'>
            <Header />
            <ContentLayout />
        </div>
    )
}

export default MainLayout