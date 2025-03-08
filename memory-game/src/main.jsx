import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CreateCards } from './cards'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateCards/>
  </StrictMode>,
)
