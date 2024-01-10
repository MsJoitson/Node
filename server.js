const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   console.log("request received");
//   res.end("response recieved");
// });

// const server = http.createServer();

// server.on("request", (req, res) => {
//   console.log("new request");
//   res.end("new response");
// });

// server.listen(4000, () => {
//   console.log("server is running on port 4000");
// });
const rqListener = require("./routes");

const server = http.createServer(rqListener);

server.listen(4000, console.log("server Started"));
