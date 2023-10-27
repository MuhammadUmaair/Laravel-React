const mainRoutes = {
    home: "/",
    admin: "/admin",
}

const dashboardRoutes = {
    dashboard: `${mainRoutes.admin}/dashboard`,
    profile: `${mainRoutes.admin}/profile`,
}

const routes = {
    ...mainRoutes,
    ...dashboardRoutes,
};

export default routes;

