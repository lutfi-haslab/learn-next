// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getHello(req, res);
    case "POST":
      return await postHello(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getHello = async (req, res) => {
  try {
    return res.status(200).json({ name: "John Doe" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const postHello = async (req, res) => {
  try {
    return res.status(200).json(req.body);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
