const http = require("http");

const PORT = process.env.PORT || 3000;
const ENVIRONMENT = process.env.RAILWAY_ENVIRONMENT_NAME || "local";

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      message: "Hello from Railway!",
      environment: ENVIRONMENT,
    })
  );
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} [env: ${ENVIRONMENT}]`);
});
