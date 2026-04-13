import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import PublicHome from "./pages/public";
import PanelHome from "./pages/panel";
import Dashboard from "./components/panel/Dashboard";
import Mycards from "./components/panel/Mycards";
import Equipo from "./components/panel/Equipo";

const router = createBrowserRouter([
  {
    path: "/",
    Component: PublicHome,
  },
  {
    path: "/panel",
    Component: PanelHome,
    children: [
      { path: "dashboard", Component: Dashboard },
      { path: "my-cards", Component: Mycards },
      { path: "equipo/:id", Component: Equipo },
    ]
  }
]);


const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);