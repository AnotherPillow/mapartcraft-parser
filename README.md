# mapartcraft-parser

A 2D .nbt schematic parser, designed for maparts outputted by rebane2001's mapartcraft

[See this project on npm.](https://www.npmjs.com/package/mapartcraft-parser)
[See this project on github.](https://github.com/anotherPillow/mapartcraft-parser)

## usage

1. `npm i mapartcraft-parser`
2. 
```js 
const { parser } = require('mapartcraft-parser');

(async () => {
    const data = await parser('red_sbicon.nbt')
    console.log(data)
})()
```

## examples

See `test.js`