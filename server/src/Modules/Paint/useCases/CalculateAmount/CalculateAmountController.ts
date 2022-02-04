import { Request, Response } from 'express';

import { CalculateAmountService } from './CalculateAmountService';

class CalculateAmountController {
    constructor( private calculateAmountService: CalculateAmountService )
        {};

    handle( request: Request, response: Response ): Response {
        try {
            const { walls, windows_doors } = request.body;

            const data = {
                walls: JSON.stringify(walls),
                windows_doors: JSON.stringify(windows_doors)
            }

            const paintsData = this.calculateAmountService.execute( data );

            return response.status(200).json( paintsData );
        } catch (error) {
            return response.status(500).json( { error_message: error } );
        }
    }    

}

export { CalculateAmountController };