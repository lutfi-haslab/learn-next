export default async function (req, res) {
  switch (req.method) {
    case "GET":
      return await getById(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getById = async (req, res) => {
  const { search_query, page, limit } = req.query;

  return res.status(200).json({
    search_query,
    page,
    limit,
  });
};
