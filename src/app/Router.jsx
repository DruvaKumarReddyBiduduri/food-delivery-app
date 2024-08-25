import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../components/layout";
import Cart from "./routes/Cart";
import Home from "./routes/Home";
import Restaurant from "./routes/Restaurant"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path:"restaurants/:restaurantId",
        element:<Restaurant/>
      }
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
