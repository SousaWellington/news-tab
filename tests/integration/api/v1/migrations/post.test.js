const baseUrl = "http://localhost:3000";
import database from "infra/database.js";

test("POST - /api/v1/migrations shold return 200", async () => {
  // const migrations = await database.query("SELECT to_regclass('public.pgmigrations');")
  const response = await fetch(`${baseUrl}/api/v1/migrations`, {
    method: "POST",
  });
    expect(response.status).toBe(201);
    const responseBody = await response.json();
    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody.length).toBeGreaterThan(0);

    const response2 = await fetch(`${baseUrl}/api/v1/migrations`, {
      method: "POST",
    });
    expect(response2.status).toBe(200);
    const response2Body = await response2.json();
    expect(response2Body.length).toBe(0);

});
