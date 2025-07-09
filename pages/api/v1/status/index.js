import database from "infra/database.js";

async function status(req, res) {
  console.log("GET - /api/v1/status");

  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);

  res.status(200).json({
    status: "OK",
    date: new Date(),
  });
}
export default status;
