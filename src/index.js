import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Dashboard from './dashboard/dashboard';
import ErrorPage from "./errorpage/Error-page";
import SignUp from './signup/SignUp';
import Login from './login/Login';

import * as serviceWorker from './serviceWorker';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /></div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <div><Dashboard /></div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <div><Login /></div>,
    errorElement: <ErrorPage />,

  },
  {
    path: "/register",
    element: <div><SignUp /></div>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
