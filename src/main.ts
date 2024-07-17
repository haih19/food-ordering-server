import { app } from './app';
import http from 'http';

const port = 8080;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Application running on http://localhost:${port}`);
});
