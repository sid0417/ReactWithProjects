import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './Card'
import Dynamic from './Dynamic'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card></Card>
    <Dynamic></Dynamic>
    <Dynamic></Dynamic>
    <Dynamic></Dynamic>
    <Dynamic></Dynamic>
    <Dynamic></Dynamic>
  </StrictMode>,
)
