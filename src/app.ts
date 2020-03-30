// Import node modules
import * as http from 'http';
import * as express from 'express';
import { getLogger } from 'log4js';
import morgan = require('morgan');
import bodyParser = require('body-parser');
// Logger initialise
const logger = getLogger();
logger.level = '' + 'debug';

// Create HTTP server
let app = express();

//Import Routes
const analyticsRoute = require('./api/routes/analytics.route');

// Server Port 
const port = process.env.PORT || 3000;

// Start Server
http.createServer(app).listen(port, () => {
  logger.info(`express is listening on ${port}`);
});

//Middlewares
app.use(morgan('dev')); // Logging
app.use(bodyParser.urlencoded({ // Body Parser
  extended: false
}));
app.use(bodyParser.json());

//Cross Origin Resource Scripting
app.use((req, res, next) => {
  //res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }

  //To avoid CORB issue
  res.setHeader("Content-Type", "application/json");

  next();
});


// Routes which should handle requests
app.use("/api/skills/analytics", analyticsRoute);

app.use((req, res, next) => {
  let error = new Error("Not found");
  error.name = '404';
  next(error);
});

app.use((error: any, req: any, res: any, next: any) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

