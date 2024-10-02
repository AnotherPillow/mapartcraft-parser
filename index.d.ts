export interface Block {
    position: [
        number, number, number
    ],
    block: string
}

export interface ParsedSchematic {
    bounds: [number, number],
    palette: {
        [key: string]: string
    },
    blocks: Block[],
    isFlat: boolean
    simplify: (yCoord?: number | null | boolean) => {
        x: number,
        z: number,
        block: string
    }[]
    
}

export function parser(path: string, yCoord?: number | null): Promise<ParsedSchematic>