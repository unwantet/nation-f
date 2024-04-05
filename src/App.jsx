import { createBrowserRouter , RouterProvider ,  } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"

//page
import Home from "./pages/Home"
import RetseptInfo from "./pages/RetseptInfo"
import Create from "./pages/Create"
import Contact from "./pages/Contact"


export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/create",
          element: <Create />,
        },
        {
          path: "/RetseptInfo/:id",
          element: <RetseptInfo />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        }
      ]
    }
  ])

  return <RouterProvider router={routes}/>
}
