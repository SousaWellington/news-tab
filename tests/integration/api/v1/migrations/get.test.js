import database from "infra/database.js";
const baseUrl = "http://localhost:3000";

test("GET - /api/v1/migrations shold return 200", async () => {
  const response = await fetch(`${baseUrl}/api/v1/migrations`);
  expect(response.status).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);
});
