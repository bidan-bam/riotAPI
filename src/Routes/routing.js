import { createBrowserRouter } from "react-router-dom";
import TrollPage from "../Pages/Trolltime/index.";
const router = createBrowserRouter([
  {
    path: "",
    element: <TrollPage />,
  },
]);

export default router;
