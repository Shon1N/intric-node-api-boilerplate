var config = require("../config.js");
const express = require("express");
const app = express();
const courses = require('./controllers/courses.js');
app.use(express.json());
app.use("/api/courses", courses);

const port = config.server.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...` ));