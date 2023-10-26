const { parser } = require('./index');

(async () => {
    const data = await parser('red_sbicon.nbt')
    console.log(data.blocks[0].position)
    console.log(data.simplify(false))
})()