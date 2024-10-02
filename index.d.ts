export interface ParsedSchematic {
    bounds: [number, number],
    palette: {
        [key: string]: string
    },
    blocks: {
        position: [
            number, number, number
        ],
        block: string
    }[],
    isFlat: boolean
    simplify: (yCoord?: number | null | boolean) => {
        x: number,
        z: number,
        block: string
    }[]
    
}

export function parser(path: string, yCoord?: number | null): Promise<ParsedSchematic>