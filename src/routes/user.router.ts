import { login, signin } from "../controllers/user.controller";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/signin", signin);
userRouter.post("/login", login);

export default userRouter;
