const { parser } = require('./index');

(async () => {
    const data = await parser('red_sbicon.nbt')
    console.log(data.blocks.length)
    console.log(data.simplify(false))
})()