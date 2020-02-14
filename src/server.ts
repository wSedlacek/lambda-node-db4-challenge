import * as express from 'express';
import * as helmet from 'helmet';

export const server = express();

server.use(helmet());
server.use(express.json());
