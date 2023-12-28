// Importing required modules
const express = require('express'); // Express framework
const morgan = require('morgan'); // HTTP request logger middleware



// Importing route modules
const tourRouter = require('./routes/tourRoutes'); // Tour routes
const userRouter = require('./routes/userRoute'); // User routes

// Creating an Express application
const app = express();

// Importing cors 
const cors = require('cors');
// Use cors middleware to handle CORS headers
app.use(cors({ origin: '*' }));

// Middleware for logging HTTP requests (only in development environment)
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Middleware for parsing JSON in the request body
app.use(express.json());

// Middleware for serving static files from the 'public' directory
app.use(express.static(`${__dirname}/public`));

// Custom middleware example
app.use((req, res, next) => {
    console.log('Hello from middleware');
    next();
});

// Custom middleware to add a timestamp to the request object
app.use((req, res, next) => {
    const requestTime = new Date().toISOString();
    req.requestTime = requestTime;
    next();
});

// Routes configuration
app.use('/api/v1/tours', tourRouter); // Use tour routes for '/api/v1/tours' endpoint
app.use('/api/v1/users', userRouter); // Use user routes for '/api/v1/users' endpoint

// Export the configured Express application
module.exports = app;
