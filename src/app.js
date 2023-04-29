import express from "express";
import path from "path";
import morgan from "morgan";
const mysql = require('mysql');
const myConnection = require('xpress-myconnection');
 
s
import customerRoutes from "./routes/customer.routes.js";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middlewares
app.use(morgan("dev"));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '0000',
    port: 3306,
    database: 'crudnojs'
}, 'single'))

// routes
app.use(customerRoutes);

// static files
app.use(express.static(path.join(__dirname, "public")));

// starting the server
export default app;