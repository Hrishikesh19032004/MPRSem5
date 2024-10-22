import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { AuthProvider } from './store/auth.jsx'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <React.StrictMode>
    <App />
    <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
bodyClassName='toastBody'
/>
  </React.StrictMode>
  </AuthProvider>
)