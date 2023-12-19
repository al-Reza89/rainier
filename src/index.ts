import express from "express";
import userRouter from "./routes/user.router";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ message: "pong" }).status(200);
});

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
