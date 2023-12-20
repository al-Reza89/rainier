import bcrypt from "bcrypt";

import prisma from "../libs/prismadb";

// create a course
export const createCourse = async (req, res) => {
  try {
    console.log({ body: req.body });

    const data = req.body;

    const course = await prisma.course?.create({
      data: data,
    });

    if (!course)
      return res.status(400).json({ message: "Try different course name" });

    return res
      .status(200)
      .json({ message: "The course has been added successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// get all courses

export const allCourses = async (req, res) => {
  try {
    const course = await prisma.course?.findMany({});

    if (!course)
      return res.status(400).json({ message: "Sorry Something Went wrong" });

    return res.status(200).json(course);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// get one course
export const oneCourse = async (req, res) => {
  try {
    const id = req.params.id;

    const course = await prisma.course?.findUnique({
      where: {
        id: id,
      },
    });

    if (!course)
      return res.status(400).json({ message: "Sorry Something Went wrong" });

    return res.status(200).json(course);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// update course

export const updateCourse = async (req, res) => {
  try {
    const id = req.params.id;

    const data = req.body;

    const course = await prisma.course?.update({
      where: {
        id: id,
      },
      data: data,
    });

    if (!course)
      return res.status(400).json({ message: "Sorry Something Went wrong" });

    return res.status(200).json(course);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// delete course

export const deleteCourse = async (req, res) => {
  try {
    const id = req.params.id;

    const course = await prisma.course?.delete({
      where: {
        id: id,
      },
    });

    if (!course)
      return res.status(400).json({ message: "Sorry Something Went wrong" });

    return res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
