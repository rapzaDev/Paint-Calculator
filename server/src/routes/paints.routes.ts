import { Router } from "express";

import { calculateAmountController } from '../Modules/Paint/useCases/CalculateAmount/';

const paintsRouter = Router();

paintsRouter.post("/", (request, response) => 
    calculateAmountController.handle(request, response)
);

export { paintsRouter };