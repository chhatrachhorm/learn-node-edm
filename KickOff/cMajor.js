const scribble = require('scribbletune')
let cMajor = scribble.clip({
    notes: ['c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4', 'c5'],
    pattern: 'x-x-x-x-x-x-x-x-x-'
})
let cMajorScale  = scribble.clip({
    // return c, e, g, b
    notes: scribble.scale('c', 'major')
        .filter((a, x)=> x % 2 === 0),
    pattern: 'x-'.repeat(8)
})
let cMajorScaleOther  = scribble.clip({
    // return c, e, g, b
    notes: scribble.scale('c', 'major')
        .filter((a, x)=> x % 2),
    pattern: 'x-'.repeat(8)
})
scribble.midi(cMajor.concat(cMajorScale).concat(cMajorScaleOther))