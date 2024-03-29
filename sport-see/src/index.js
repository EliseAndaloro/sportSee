import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import NavHorizontal from "./components/NavHorizontal/NavHorizontal";
import Dashbord from "./pages/dashbord/Dashboard";
import Error from './pages/error/Error';
import Home from './pages/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <NavHorizontal />
        <Routes>
            <Route path="/user/:id" element={<Dashbord />} />
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
