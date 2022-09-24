import React from "react";
import { PublicPath, PrivateRoutes } from "./router";
import Config from "../config/Config";

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}
function RoutesLink() {
  const [loading, setLoadinge] = React.useState(true);

  React.useEffect(() => {
    demoAsyncCall().then(() => setLoadinge(false));
  }, []);
  if (loading) {
    <div className="loader" style={{ backgroundColor: "red" }}></div>; // render null when app is not ready
  }

  return <>{Config.isValidToken ? PrivateRoutes() : PublicPath()}</>;
}

export default RoutesLink;
