import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MasterLayout from "../../layouts/admin/MasterLayout";
import Dashboard from "../../components/admin/Dashboard";
import Profile from "../../components/admin/Profile";
import routes from "../../routes/routes";
import axiosInstance from "../../config/axiosConfig";
import swal from "sweetalert";
import { useNavigate, redirect } from "react-router-dom";
import Login from "../frontend/auth/Login";

function AdminPrivateRoute() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const authToken = localStorage.getItem("admin_token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (authToken) {
          const response = await axiosInstance.get("/api/checkingAuthenticated");
          if (response.status === 200) {
            setIsAdmin(true);
          }
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          swal("Unauthorized", error.response.data.message, "warning");
          navigate("/");
        } else if (error.response && error.response.status === 403) {
          swal("Forbidden", error.response.data.message, "warning");
          navigate("/403");
        } else if (error.response && error.response.status === 404) {
          console.log(error);
          swal("404 Error", "Url/Page Not Found", "warning");
          navigate(routes.e404);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [authToken,navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }


  return (
    <Routes>
      <Route
        path={routes.admin}
        element={ <MasterLayout />}
      >
      
        <Route path={routes.dashboard} element={<Dashboard />} />
        <Route path={routes.profile} element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default AdminPrivateRoute;
