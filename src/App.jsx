import { RouterProvider } from "react-router";
import "./App.css";
import Login from "./pages/login/login";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
