import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const connectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: connectionString });

app.get("/", (request, response) => {
  response.json("my root");
});

app.get("/users", async (request, response) => {
  const result = await db.query(`select
users.id,
users.full_name,
users.job_title,
users.industry,
users.bio,
posts.post
FROM users
JOIN posts_junction on posts_junction.user_id = users.id
JOIN posts on posts_junction.post_id = posts.post_id`);

  response.json(result.rows);
});

app.post("/user", async (request, response) => {
  const name = request.body.age;
  const comment = request.body.comment;
  const newUser = db.query(
    `INSERT INTO users(full_name, comment) VALUES ($1,$2)`,
    [full_name, comment]
  );
  response.json(newUser);
});
app.listen(8080, () => console.log("i am running on 8080"));
