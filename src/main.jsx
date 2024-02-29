import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Contact from "./Contact";
import { getContactLoader, getContactsLoader } from "./loaders/contactsLoader";
import {
  createContactAction,
  deleteContactAction,
  editContactAction,
  updateContactFav,
} from "./actions/contactsActions";
import EditContact from "./EditContact";
import Index from ".";

//Todo 1 hr 7 min

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactAction,
    children:[
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "/contacts/:contactId",
            element: <Contact />,
            loader: getContactLoader,
            action: updateContactFav,
          },
          {
            path: "/contacts/:contactId/edit",
            element: <EditContact />,
            loader: getContactLoader,
            action: editContactAction,
          },
          {
            path: "/contacts/:contactId/destroy",
            action: deleteContactAction,
            errorElement: <div>OOpps! THere was an error in contect page!</div>,
          },
        ],
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
