import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await userWithPost(req, res);
    case "POST":
      return await addPost(req, res);
    case "PUT":
      return await updatePost(req, res);
    case "DELETE":
      return await deletePost(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}
const userWithPost = async (req, res) => {
  try {
    const usersWithPosts = await prisma.user.findMany({
      include: {
        posts: true,
      },
    });
    return res.status(200).json(usersWithPosts);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const addPost = async (req, res) => {
  try {
    const post = await prisma.post.create({
      data: {
        title: "Halo lagi",
        content: "Sekarang aku lagi makan",
        published: true,
        authorId: 6,
      },
    });
    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await prisma.post.update({
      where: {
        id: Number(req.query.id),
      },
      data: {
        title: "Halo aku terupdate",
        content: "Sekarang aku lagi makan",
        published: true,
        authorId: 6,
      },
    });
    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await prisma.post.delete({
      where: {
        id: Number(req.query.id),
      },
    });
    return res.status(200).json({
      data: post.id,
      message: "data deleted"
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const addPostWithUser = async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: "Bob",
        email: "bob@prisma.io",
        posts: {
          create: {
            title: "Hello World",
          },
        },
      },
    });
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
