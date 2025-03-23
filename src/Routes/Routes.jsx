import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ThredCarseCard from "../Components/3d-carse-card/Thre-carse-card";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/thredCarseCard",
        element: <ThredCarseCard />,
      },
    ],
  },
]);
