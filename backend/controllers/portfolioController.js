let portfolios = []; // In-memory "database"

exports.getAll = (req, res) => {
  res.json(portfolios);
};

exports.create = (req, res) => {
  const newPortfolio = {
    id: Date.now(),
    ...req.body,
  };
  portfolios.push(newPortfolio);
  res.status(201).json(newPortfolio);
};

exports.update = (req, res) => {
  const { id } = req.params;
  const index = portfolios.findIndex(p => p.id == id);
  if (index === -1) return res.status(404).json({ message: 'Not found' });

  portfolios[index] = { ...portfolios[index], ...req.body };
  res.json(portfolios[index]);
};

exports.remove = (req, res) => {
  const { id } = req.params;
  portfolios = portfolios.filter(p => p.id != id);
  res.json({ message: 'Deleted successfully' });
};
