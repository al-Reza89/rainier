import {
  allCourses,
  createCourse,
  deleteCourse,
  oneCourse,
  updateCourse,
} from "../controllers/course.controller";
import { Router } from "express";

const courseRouter = Router();

courseRouter.get("/", allCourses);
courseRouter.get("/:id", oneCourse);
courseRouter.post("/create-course", createCourse);
courseRouter.put("/:id", updateCourse);
courseRouter.delete("/:id", deleteCourse);

export default courseRouter;
