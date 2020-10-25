const bodyParser = require('body-parser');
const express  = require('express'); 
const app = express();                 
const {
    prueba
    } = require('./routers.js');

const port = 8080;  // set our port

app.use((req, res, next) => {
    bodyParser.json()(req, res, err => {
        if (err) {
            throw err;
        }
        next();
    });
});
app.use('/api', prueba);
const server = app.listen(port, () => {
    console.log("Server running");
});

if (process.platform === "win32") {
    const rl = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on("SIGINT", () => {
        process.emit("SIGINT");
    });
}

process.on("SIGINT", () => {
    //graceful shutdown
    console.log("Killing process and shutdown server");
    server.close(() => {
        console.log("Server OFF");
        process.exit();
    });
});

console.log("Listening in the port %d...", port);