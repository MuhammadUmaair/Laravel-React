import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import routes from "./routes/routes";
import Home from "./components/frontend/Home";
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import E403 from "./components/errors/Page403";
import E404 from "./components/errors/Page404";
import AdminPrivateRoute from "./components/admin/AdminPrivateRoute";

function App() {
  const authToken = localStorage.getItem("auth_token");
  const AdminToken = localStorage.getItem("admin_token");
  const renderRoutes = () => (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.e403} element={<E403 />} />
      <Route path={routes.e404} element={<E404 />} />
      <Route
        path={routes.login}
        element={authToken ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path={routes.register}
        element={authToken ? <Navigate to="/" /> : <Register />}
      />
    </Routes>
  );
  const adminRoutes = () => (
    // <Routes>
    //   <Route path={routes.admin} element={<MasterLayout />}>
    //     <Route path={routes.dashboard} element={<Dashboard />} />
    //     <Route path={routes.profile} element={<Profile />} />
    //   </Route>
    // </Routes>
    <AdminPrivateRoute authToken={authToken}/>
  );

  return (
    <div className="App">
      <Router>{renderRoutes()}</Router>
      <Router>{AdminToken && adminRoutes()}</Router>
    </div>
  );
}

export default App;
