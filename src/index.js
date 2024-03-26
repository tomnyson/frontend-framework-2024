import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DemoAPI from './DemoAPI';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './pages/page404'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostDetail from './pages/postDetail'
import Login from './pages/login';
import RoutePrivate from './routePrivate';
import Register from './pages/register';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Layout />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
