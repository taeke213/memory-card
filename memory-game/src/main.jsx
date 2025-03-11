import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CreateCards } from './components/cards'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateCards/>
  </StrictMode>,
)
