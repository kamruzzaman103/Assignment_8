import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context/AppContext';
// import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  
  <React.StrictMode>
    <AppProvider>
      
        <App />
        <ToastContainer />
      
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ReactDOM.render(
//   <React.StrictMode>
//     <AppProvider>
//       <Router>
//         <App />
//         <ToastContainer />
//       </Router>
//     </AppProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );




