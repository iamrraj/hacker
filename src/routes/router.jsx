import { Suspense } from "react";
import Loading from "../screen/Loading/Loading";
import { Route, Navigate } from "react-router-dom";
import routesPath from "./routerPath";
import ErrorBoundary from "../screen/ErrorBoundry/Error";
import Cookies from "universal-cookie";
import { BrowserRouter, Routes } from "react-router-dom";
import Slug from "../resources/Slug/Slug";

// const Public = lazy(() => {
//   return import("../container/Layout/Header/Public");
// });
// const Footer = lazy(() => {
//   return import("../container/Layout/Footer");
// });

const cookies = new Cookies();

const isAuthenticated = cookies.get("@mrkt_storage_access_token");

function RequireAuth({ children, redirectTo }) {
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

function NotRequireAuth({ children, redirectTo }) {
  return isAuthenticated ? <Navigate to={redirectTo} /> : children;
}

export const PublicPath = () => (
  <BrowserRouter>
    {/* <Public /> */}
    <Suspense fallback={<Loading />}>
      <Routes>
        {routesPath.Private.map((c, i) => (
          <Route
            path={c.path}
            key={i + 1}
            element={
              <NotRequireAuth redirectTo={Slug._loginPath}>
                <ErrorBoundary>{c.component}</ErrorBoundary>
              </NotRequireAuth>
            }
          ></Route>
        ))}
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export const PrivateRoutes = () => (
  <BrowserRouter>
    {/* <Public /> */}
    <Suspense fallback={<Loading />}>
      <Routes>
        {routesPath.Private.map((c, i) => (
          <Route
            path={c.path}
            key={i + 1}
            element={
              <RequireAuth redirectTo={Slug._dashboardPath}>
                <ErrorBoundary>{c.component}</ErrorBoundary>
              </RequireAuth>
            }
          ></Route>
        ))}
      </Routes>
    </Suspense>
    {/* <Footer /> */}
  </BrowserRouter>
);
