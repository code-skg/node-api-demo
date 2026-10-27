const test = require("node:test");
const assert = require("node:assert/strict");

const BASE_URL = process.env.TEST_URL || "http://127.0.0.1:3000";

test("GET /health returns a healthy status", async () => {
  const response = await fetch(`${BASE_URL}/health`);

  assert.equal(response.status, 200);

  const data = await response.json();

  assert.equal(data.status, "ok");
  assert.equal(data.service, "node-api-demo");
});