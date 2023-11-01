import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MasterLayout from "./layouts/admin/MasterLayout";
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";
import routes from "./routes/routes";
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import Home from "./components/frontend/Home";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

function App() {
  const authToken = localStorage.getItem("auth_token");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          {/* check either is login or not by authToken */}
          <Route path={routes.login} element={authToken ? <Navigate to="/" /> : <Login />}/>
          <Route path={routes.register} element={authToken ? <Navigate to="/" /> : <Register />}/>
          <Route path={routes.admin} element={<MasterLayout />}>
            <Route path={routes.dashboard} element={<Dashboard />} />{" "}
            {/* Relative path */}
            <Route path={routes.profile} element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
