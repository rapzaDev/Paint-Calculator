import { PaintRepository } from "../../repositories/implementations/PaintRepository";
import { CalculateAmountService } from "./CalculateAmountService";
import { CalculateAmountController } from "./CalculateAmountController";

const paintRepository = PaintRepository.getInstance();
const calculateAmountService = new CalculateAmountService( paintRepository );
const calculateAmountController = new CalculateAmountController( calculateAmountService );

export { calculateAmountController };