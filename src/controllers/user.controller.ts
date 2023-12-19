import bcrypt from "bcrypt";

import prisma from "../libs/prismadb";

// signin user
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user?.create({
      data: {
        email,
        hashedPassword,
      },
    });

    if (!user) return res.status(400).json({ message: "Try different Email" });

    return res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user?.findUnique({
      where: {
        email,
      },
    });

    if (
      user &&
      user.hashedPassword !== null &&
      (await bcrypt.compare(password, user?.hashedPassword))
    ) {
      const { hashedPassword, ...userWithoutPassword } = user;
      return res.status(200).json({ user: userWithoutPassword });
    } else {
      return res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
