import React from 'react'
import Header from '../components/Header'
import SecondaryLayout from './SecondaryLayout'

const Layout = () => {

    return (
        <div className='flex flex-col h-full pl-5 pr-5'>
            <Header />
            <SecondaryLayout />
        </div>
    )
}

export default Layout