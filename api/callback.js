export default function handler(req, res) {
  const code = req.query.code;

  res.status(200).send(`
    <h2>Autorizado com sucesso</h2>
    <p>Code recebido: ${code}</p>
  `);
}
