import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthPrividers from './Providers/AuthPrividers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <React.StrictMode>
      <AuthPrividers>
        <RouterProvider router={router} />
      </AuthPrividers>
    </React.StrictMode>,
  </div>
)
