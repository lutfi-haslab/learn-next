export default async function (req, res) {
  switch (req.method) {
    case "GET":
      return await getById(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getById = async (req, res) => {
  return res.status(200).json({
    id: req.query.test,
  });
};
