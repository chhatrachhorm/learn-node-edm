const scribble = require('scribbletune')
let clip = scribble.clip({
    notes: 'c4',
    pattern: 'x---'.repeat(100)
})
scribble.midi(clip)
