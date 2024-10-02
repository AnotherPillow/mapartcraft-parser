export const parser = function (path: string, yCoord: number | null): Promise<{
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
    
}>