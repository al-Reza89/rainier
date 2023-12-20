import { login, signin } from "../controllers/user.controller";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/signin", signin);
userRouter.get("/login", login);

export default userRouter;
