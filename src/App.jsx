import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'

const App = () => {
  return (
    <div className='h-screen w-full bg-slate-300 text-sm overflow-hidden'>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </div>
  )
}

export default App