import { lazy } from "react";
import Intro from "../screens/Intro/Intro";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../screens/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Intro onNext={() => {}} />,
      },
      {
        path: "/dashboard",
        element: (
            <Dashboard poems={[]}/>
        ),
      }, 
])