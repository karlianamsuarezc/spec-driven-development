import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('AgentClinic is open for business');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`AgentClinic server is running on http://localhost:${port}`);
  });
}

export default app;
