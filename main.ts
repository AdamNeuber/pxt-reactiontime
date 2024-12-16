//input.lightLevel()
let whoosh = 0
let svetlo = input.lightLevel()

basic.showString("Starting NOW")
music.ringTone(Note.C)
basic.pause(100)
music.stopAllSounds()
let time = randint(2000,8000)
basic.pause(time)
basic.showLeds(`
#####
#####
#####
#####
#####
`)
basic.pause(10)
music.play(music.tonePlayable(Note.C, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.pause(1)
basic.showLeds(`
. . . . .
. . . . .
. . . . .
. . . . .
. . . . .
`)
let StartCas = control.millis()
while(true) {
    svetlo = input.lightLevel()
    if (svetlo < 120) {
        break
    }
}
let EndCas = control.millis()
basic.pause(10)
whoosh = EndCas - StartCas
music.stopAllSounds()
basic.showString("GG")
basic.showNumber(whoosh)
basic.showString("Press Logo To Play Again")
while(true) {
    if (input.logoIsPressed()) {
        control.reset()
    }
}

