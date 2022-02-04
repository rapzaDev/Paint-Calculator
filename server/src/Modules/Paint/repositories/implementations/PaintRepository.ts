import { IPaintRepository, PaintCalculatorProps, ClientPaintsType } from "../IPaintRepository";

class PaintRepository implements IPaintRepository {

    private static INSTANCE: PaintRepository;

    public static getInstance(): PaintRepository {
        if (!PaintRepository.INSTANCE) {
            PaintRepository.INSTANCE = new PaintRepository();
        }

        return PaintRepository.INSTANCE;
    }

    // [ 18, 3.6, 2.5, 0.5 ]L = [ 90, 18, 12.5, 2.5 ]m2 ;
    private latasm2 = [ 90, 18, 12.5, 2.5 ];

    private logicPaint( m2: number ): ClientPaintsType {

        const amount = {
            GG: 0, 
            G: 0, 
            M: 0,
            P: 0
        };

        for(let i=0; i<1; i++ ) {

            if ( ( m2 / this.latasm2[0] ) >= 1 || (m2 / this.latasm2[0]) === 0 ) {
                amount.GG += Math.floor( m2/this.latasm2[0] );
                m2 -= ( amount.GG * this.latasm2[0] );
            }

            if ( ( m2 / this.latasm2[1] ) >= 1 || (m2 / this.latasm2[1]) === 0 ) {
                amount.G += Math.floor( m2/this.latasm2[1] );
                m2 -= ( amount.G * this.latasm2[1] );
            }

            if ( ( m2 / this.latasm2[2] ) >= 1 || (m2 / this.latasm2[2]) === 0 ){
                amount.M += Math.floor( m2/this.latasm2[2] );
                m2 -= ( amount.M * this.latasm2[2] );
            }

            if ( ( m2 / this.latasm2[3] ) >= 1 || (m2 / this.latasm2[3]) === 0 ){
                amount.P += Math.floor( m2/this.latasm2[3] );
                m2 -= ( amount.P * this.latasm2[3] );
            }

        }
    
        return {
            latasGG: amount.GG,
            latasG: amount.G,
            latasM: amount.M,
            latasP: amount.P
        };
    };

    paintCalculator( { walls, windows_doors }: PaintCalculatorProps  ) {
        let totalOfM2 = JSON.parse(walls) - JSON.parse(windows_doors);
        totalOfM2 = Math.floor(totalOfM2) + 1;

        const clientPaints = this.logicPaint( totalOfM2 );

        return clientPaints;
    };
};

export { PaintRepository };