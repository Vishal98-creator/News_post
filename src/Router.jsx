import React from "react";
import Header from "./components/Header";
import Home from "./screens/Home/Index";
import PostDetails from "./screens/PostDetails/Index";
import Footer from "./components/Footer";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AddPost from "./screens/admin/AddPost/Index";
import AboutUs from './screens/AboutUs/Index'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin/add-post",
    element: <AddPost />,
  },
  {
    path: "/view-post/:post_id",
    element: <PostDetails />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
]);

const Router = () => {
  return (
    <div className="" style={{ marginBottom: "300px" }}>
      {/* <Header /> */}
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default Router;
