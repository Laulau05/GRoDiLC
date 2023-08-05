require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');

const appRouters = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*'
}));

// Importez le fichier db.js
const db = require('./config/db');

// api routes
appRouters.forEach((router) => {
    app.use('/api/v1', router);
});

// Appel de la fonction initialize de manière asynchrone
async function startServer() {
    try {
        // start server
        const port = process.env.PORT || 3003;
        app.listen(port, () => console.log('Server listening on port ' + port));
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}

startServer();