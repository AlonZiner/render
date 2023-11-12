const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const dummyData = {
    message: 'Hello, World!',
    details: 'This is a dummy JSON object.',
  };
  res.json(dummyData);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});