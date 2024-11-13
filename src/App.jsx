import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'

const App = () => {
  return (
    <div className='h-full w-full bg-slate-300'>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </div>
  )
}

export default App