import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'
import { Container } from '@mui/system';
import './firebase/config.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container maxWith='lg' sx={{ textAlign: 'center', marginTop: '50px' }}>
      <RouterProvider router={router} />
    </Container>

  </React.StrictMode>,
)
