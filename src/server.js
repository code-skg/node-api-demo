const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Basic endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Node API is running!",
  });
});

// Health-check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "node-api-demo",
  });
});

// POST endpoint
app.post("/api/message", (req, res) => {
  const { message } = req.body;

  if (typeof message !== "string" || !message.trim()) {
    return res.status(400).json({
      error: "A non-empty message is required",
    });
  }

  res.status(200).json({
    received: message,
    reply: `You sent: ${message}`,
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;