import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, Routes } from "react-router-dom";
import { router } from '../routes/routes';
import { Provider } from 'react-redux'
import store from '../store/store';

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <Provider store={store}>
                <RouterProvider router={router} >
                    <Routes />
                </RouterProvider>
            </Provider>
        </React.StrictMode>
    )
}
