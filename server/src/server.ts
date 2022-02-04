import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger.json';

import { paintsRouter } from './routes/paints.routes';

const app = express();

app.use(cors());
app.use( express.json() );

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/paints", paintsRouter);

export { app };