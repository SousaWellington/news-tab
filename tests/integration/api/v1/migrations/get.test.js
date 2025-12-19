import database from "infra/database.js";
const baseUrl = "http://localhost:3000";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public");
}

describe("GET - /api/v1/migrations", () => {
  test("should return 200", async () => {
    const response = await fetch(`${baseUrl}/api/v1/migrations`);
    expect(response.status).toBe(200);
    const responseBody = await response.json();
    // console.log(responseBody);
    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody.length).toBeGreaterThan(0);
  });
});
