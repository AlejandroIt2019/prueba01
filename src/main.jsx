import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Reducer } from './Reducer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Reducer />
    </StrictMode>
  
)
