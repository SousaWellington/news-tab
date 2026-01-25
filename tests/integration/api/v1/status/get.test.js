import orchestrator from "tests/orchestrator.js";
const baseUrl = "http://localhost:3000";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

test("GET - /api/v1/status shold return 200", async () => {
  const response = await fetch(`${baseUrl}/api/v1/status`);
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(responseBody.dependencies.database.version).toEqual("16.0");

  expect(responseBody.dependencies.database.max_connections).toEqual(100);

  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
  // expect(responseBody).not.toHaveProperty("password");
  // expect(responseBody).not.toHaveProperty("email");
});
