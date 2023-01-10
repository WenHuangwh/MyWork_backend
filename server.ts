/**
 * @file Implements an Express Node HTTP server. Declares RESTful Web services
 * enabling CRUD operations on the following resources:
 * <ul>
 *     <li>users</li>
 *     <li>tuits</li>
 *     <li>likes</li>
 *     <li>follows</li>
 *     <li>bookmarks</li>
 *     <li>messages</li>
 * </ul>
 * 
 * Connects to a remote MongoDB instance hosted on the Atlas cloud database
 * service
 */

import express, { Request, Response } from 'express';
import LeetcodesController from './controllers/LeetcodesController';
import SolutionsController from './controllers/SolutionsController';

import mongoose from "mongoose";
import JobsController from './controllers/JobsController';
const session = require("express-session");

var cors = require('cors')
require('dotenv').config();
// build the connection string
const PROTOCOL = "mongodb+srv";
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const HOST = "cluster0.wzzajgf.mongodb.net";
const DB_NAME = "my_work";
const DB_QUERY = "retryWrites=true&w=majority";
const connectionString = `${PROTOCOL}://${DB_USERNAME}:${DB_PASSWORD}@${HOST}/${DB_NAME}?${DB_QUERY}`;
// connect to the database
mongoose.connect(connectionString);
const app = express();
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(express.json());
// Creates the session middleware.
let sess = {
    secret: process.env.SECRET,
    cookie: {
        secure: false,
        resave: false,
        saveUninitialized: false,
        // Enables cross-site delivery between Netlify and Heroku.
        sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax'
    }
}
// Using default env variable on Heroku
if (process.env.NODE_ENV == 'production') {
    app.set('trust proxy', 1)
    sess.cookie.secure = true
}
app.use(session(sess));

app.get('/', (req: Request, res: Response) =>
    res.send('卷起来!'));
// create RESTful Web service API
const leetcodesController = LeetcodesController.getInstance(app);
const solutionsController = SolutionsController.getInstance(app);
const jobsController = JobsController.getInstance(app);

/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 5001;
app.listen(process.env.PORT || PORT);