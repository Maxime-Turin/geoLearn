require('dotenv').config();
const { createServer } = require('http');

const app = require('./app');

const port = process.env.PORT || 3000;

const server = createServer(app);

server.listen(port, () => {
  console.log(`Serveur connecté sur -> http://localhost:${port}`);
});
