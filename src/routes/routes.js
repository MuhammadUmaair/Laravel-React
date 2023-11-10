const mainRoutes = {
    home: "/",
    register: "/register",
    login: "/login",
    admin: "/admin",
}

const dashboardRoutes = {
    home: `${mainRoutes.home}`,
    dashboard: `${mainRoutes.admin}/dashboard`,
    profile: `${mainRoutes.admin}/profile`,
}

const errorRoutes = {
    e403: `${mainRoutes.home}403`,
    e404: `${mainRoutes.home}404`,
    
}

const routes = {
    ...mainRoutes,
    ...dashboardRoutes,
    ...errorRoutes,
};

export default routes;

