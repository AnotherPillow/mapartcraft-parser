const fs = require('fs'),
      nbt = require('prismarine-nbt');


// fs.readFile('red_sbicon.nbt', function(error, data) {
//     if (error) throw error;

//     nbt.parse(data, function(error, data) {
//         /*
//         const blocks = data.value.blocks.value.value

//         blocks.forEach(x => {
//             // console.log(x.pos.value)
//             console.log(x)
//         })*/
//         // console.log(data.value.palette.value.value)
//         console.log(data.value.blocks.value.value)
//         // console.log(data.value.size.value.value)
//     });
// });

// module.exports = async (path) => {
exports.parser = async (path) => {
    const buf = fs.readFileSync(path)
    const { parsed, /* type */ } = await nbt.parse(buf)

    const _dimensions = parsed.value.size.value.value

    let returnData = {
        bounds: [
            _dimensions[0], _dimensions[1]
        ]
    }

    const _palette = {}
    parsed.value.palette.value.value.forEach((elm, index) => {
        const v = elm.Name.value
        if (v !== 'minecraft:air') 
            _palette[index] = v
    })
    returnData.palette = _palette

    let ys = []
    const _blocks = parsed.value.blocks.value.value.map(x => {
        ys.push(x.pos.value.value[1])
        return {
            position: x.pos.value.value,
            block: _palette[x.state.value]
        }
    }).filter(x => x.block !== 'minecraft:air' && x.block !== undefined)
    

    // console.log(_blocks)

    returnData.isFlat = ys.filter(x=>x===2).length === ys.length;

    returnData.blocks = _blocks
    returnData.simplify = (yCoord = false) => {
        let condition = (n) => typeof yCoord === typeof 0 ? n == yCoord : true
        

        return structuredClone(returnData.blocks)
            .filter(a => condition(a.position[1]))
            .map(x => {
                return {
                    x: x.position[0],
                    z: x.position[2],
                    block: x.block
                }
            })
    }
    // console.log(parsed.value.palette.value.value)



    return returnData

    
}