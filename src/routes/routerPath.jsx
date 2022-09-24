import { lazy } from "react";
import SLUGS from "../resources/Slug/Slug";

/* 
==========================================
 Public Router Path
==========================================
*/

const NotFound = lazy(() => {
  return import("../screen/NotFound");
});

/* 
==========================================
 Privater Router Path
==========================================
*/

const Dashboard = lazy(() => {
  return import("../screen/Dashboard");
});
const Mapa = lazy(() => {
  return import("../screen/Map");
});

const routesPath = {
  // Public Router Path without Authentication

  Private: [
    {
      path: SLUGS._dashboardPath,
      component: <Dashboard />,
    },
    {
      path: SLUGS._map_path,
      component: <Mapa />,
    },
    {
      path: "*",
      component: <NotFound />,
    },
  ],
};

export default routesPath;
