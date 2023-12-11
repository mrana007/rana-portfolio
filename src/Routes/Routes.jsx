import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Projects from "../pages/Home/Projects/Projects";
import ContactMe from "../components/ContactMe/ContactMe";
import BuildingManagement from "../components/ProjectsDetails/BuildingMangament/BuildingManagement";
import GroupStudy from "../components/ProjectsDetails/GroupStudy/GroupStudy";
import BrandShop from "../components/ProjectsDetails/BrandShop/BrandShop";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "contact",
            element: <ContactMe />
        },
        {
            path: "projects",
            element: <Projects />
        },
        {
            path: "building",
            element: <BuildingManagement />
        },
        {
            path: "study",
            element: <GroupStudy />
        },
        {
            path: "shop",
            element: <BrandShop />
        }
      ]
    },
  ]);