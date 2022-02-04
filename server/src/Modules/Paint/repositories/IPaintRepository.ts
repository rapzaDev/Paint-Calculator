interface PaintCalculatorProps {
    walls: string;
    windows_doors: string;
}

type ClientPaintsType = {
    latasGG: number;
    latasG: number;
    latasM: number;
    latasP: number;
}

interface IPaintRepository {
    paintCalculator( { walls, windows_doors }: PaintCalculatorProps ): ClientPaintsType;
}

export { IPaintRepository, PaintCalculatorProps, ClientPaintsType };