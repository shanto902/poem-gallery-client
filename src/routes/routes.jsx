import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./private/PrivateRoute";
import Register from "../pages/Register";
import Profile from "../pages/dashboard/Profile";
import EditProfile from "../pages/dashboard/EditProfile";
import AddPoems from "../pages/dashboard/AddPoems";
import AllPoems from "../pages/dashboard/AllPoems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/edit/:id",
        element: <EditProfile />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/user/get/${params.id}`),
      },

      {
        path: "add-poem",
        element: <AddPoems />,
      },
      {
        path: "all-poems",
        element: <AllPoems />,
      },
    ],
  },
]);
