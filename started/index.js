const scribble = require('scribbletune')

let perc = scribble.clip({
    notes: ['c2', 'c#2', 'd2', 'd#2'],
    pattern: 'x-x-x--x',
    sizzle: true,
    shuffle: true
})

let perc1 = scribble.clip({
    notes: ['c2', 'c#2', 'd2', 'd#2'],
    pattern: 'x-x-xxxx',
    sizzle: true,
    shuffle: true
})

scribble.midi(perc.concat(perc, perc, perc1), 'perc.mid')

let bass = scribble.clip({
    notes: ['f#2'],
    pattern: 'x-'.repeat(8)
})
scribble.midi(bass, 'bass.mid')

let kick = scribble.clip({
    notes: ['c4'],
    pattern: 'x---'.repeat(4)
})
scribble.midi(kick, 'kick.mid')

let snare = scribble.clip({
    notes: ['c4'],
    pattern: '----x-----------'
})
scribble.midi(snare, 'snare.mid')

let clip = scribble.clip({
    notes: ['c4'],
    pattern: '-----------x---'
})
scribble.midi(clip, 'clip.mid')

let hats = scribble.clip({
    notes: ['c4'],
    pattern: '--x-'.repeat(4)
})
scribble.midi(hats, 'hats.mid')

let rise = scribble.clip({
    notes: ['c4'],
    pattern: 'x'.repeat(16),
    accentMap: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 120, 120, 120]
})
scribble.midi(rise, 'rise.mid')