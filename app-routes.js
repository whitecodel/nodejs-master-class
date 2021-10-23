const studentR = require("./app-routes/student");

const AppRoutes = (app) => {
    app.use("/student", studentR);
};

module.exports = AppRoutes;
