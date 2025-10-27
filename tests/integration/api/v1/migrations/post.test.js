const baseUrl = "http://localhost:3000";

test("POST - /api/v1/migrations shold return 200", async () => {
  const response = await fetch(`${baseUrl}/api/v1/migrations`, {
    method: "POST",
  });
  expect(response.status).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
  expect(Array.isArray(responseBody)).toBe(true);
});
