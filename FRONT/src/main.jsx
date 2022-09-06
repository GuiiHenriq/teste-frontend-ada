import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import { MyThemeProvider } from './styles/MyThemeProvider'
import Kanban from './templates/Kanban'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <Kanban />
      <ToastContainer />
    </MyThemeProvider>
  </React.StrictMode>
)
