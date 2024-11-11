import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getTodos } from '../store'

const MainContent = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTodos())
    }, [])
    return (
        <div>
            Main Content!!
        </div>
    )
}

export default MainContent