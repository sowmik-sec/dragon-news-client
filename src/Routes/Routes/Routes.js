import Main from "../../layout/Main";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [],
  },
]);
