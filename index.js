const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');


// for keeping good stuff :)
dotenv.config();

// express server initialization
const app = express();

// end point to get block details and list of blocks available
const getBlockInfo = require('./routes/cord')

// app use declaration, change according to your need
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));
app.use('/blocks',getBlockInfo);
// Middleware for security headers, prolly dont need but still
app.use(helmet({
    contentSecurityPolicy: false,
    xDownloadOptions: false,
}));

// basic home route to check if server is running, again dont need it but a good practice
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is running smoothly!' });
});

// Centralized error handling
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server with error handling
const PORT = process.env.PORT || 5050;


const listner = app.listen(PORT, () => {
    console.log(`Server running at port: ${listner.address().port}`);
}).on('error', (err) => {
    console.error(`Server failed to start due to error: ${err.message}`);
});
