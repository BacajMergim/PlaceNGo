import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import BookingPage from "../pages/BookingPage";
import ContactUsPage from "../pages/ContactUsPage";

export const appRoutes: RouteObject[] = [
  { path: "/", element: <Navigate to="Home" replace /> },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "/Booking",
    element: <BookingPage />,
  },
  {
    path: "/Contact",
    element: <ContactUsPage />,
  },
];

export const Routes = () => {
  const routes = useRoutes(appRoutes);
  return routes;
};
