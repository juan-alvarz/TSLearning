import express from "express";
const app = express();
app.use(express.json());
import diaryRouter from "./routes/diaries";

/* MINUTE = 27:36 */

const PORT = 3001;

app.use("/api/diaries", diaryRouter);

app.get("/ping", (_req, res) => {
  console.log(`Today is ${new Date().toLocaleDateString()}`);
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
