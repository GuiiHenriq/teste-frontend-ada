import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyThemeProvider } from './styles/MyThemeProvider'
import Kanban from './templates/Kanban'
 import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <Kanban />
    </MyThemeProvider>
  </React.StrictMode>
)
