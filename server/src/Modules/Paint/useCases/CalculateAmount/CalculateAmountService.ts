import { ClientPaintsType, IPaintRepository, PaintCalculatorProps } from "../../repositories/IPaintRepository";

class CalculateAmountService {

    constructor ( private paintRepository: IPaintRepository )
        {};

    execute ( { walls, windows_doors }: PaintCalculatorProps ): ClientPaintsType {
        const paintsData = this.paintRepository.paintCalculator( { walls, windows_doors } );

        return paintsData;
    };

}

export { CalculateAmountService };