import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { router } from './routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-[#FFFFFF] '>
      <div className='container mx-auto dm-serif-display-regular'>
      <RouterProvider router={router} />
      </div>

    </div>
   
  </StrictMode>,
)
