import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.get('/channels/:id/qr', (req, res) => {
  const { id } = req.params;
  res.json({ channelId: id, qr: 'mock-qr-data-url' });
});

const port = process.env.PORT ? Number(process.env.PORT) : 3001;
app.listen(port, () => {
  console.log(`wa-connector listening on ${port}`);
});