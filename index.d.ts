export const parser = function (path: string, yCoord: number | null = 1): Promise<{
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
    simplify: function(): {
        x: number,
        z: number,
        block: string
    }[]
}>{}