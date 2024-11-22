import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./navigation/routes";
import Intro from "./screens/Intro/Intro";
import Dashboard from "./screens/Dashboard/Dashboard";
import Detail from "./screens/Detail/Detail";
import Form from "./screens/Form/Form";

function App() {

  return (
    <RouterProvider router={router}/>
  );

}

export default App;
