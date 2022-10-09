import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getUser(req, res);
    case "POST":
      return await addUser(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getUser = async (req, res) => {
  try {
    const response = await prisma.user.findMany();
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const addUser = async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: "Alice",
        email: "alice@prismaa.io",
      },
    });
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
