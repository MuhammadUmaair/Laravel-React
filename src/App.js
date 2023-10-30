import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import MasterLayout from "./layouts/admin/MasterLayout";
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";
import routes from "./routes/routes";
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import Home from "./components/frontend/Home";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={routes.home} element={<Home/>} />
          <Route path={routes.login} element={<Login/>} />
          <Route path={routes.register} element={<Register/>} />
          <Route  path={routes.admin} element={<MasterLayout />}>
            <Route path={routes.dashboard} element={<Dashboard />} /> {/* Relative path */}
            <Route path={routes.profile} element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
