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
        _palette[index] = elm.Name.value
    })
    returnData.palette = _palette

    const _blocks = parsed.value.blocks.value.value.map(x => {
        return {
            position: x.pos.value.value,
            block: _palette[x.state.value]
        }
    })/*.filter(x => x.position[1] === yCoord)*/ /* .splice(1000) */

    // console.log(_blocks)

    returnData.blocks = _blocks
    returnData.simplify = () => {
        return structuredClone(returnData.blocks).map(x => {
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