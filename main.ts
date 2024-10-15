let time = 0
let times_repeat = 0
let time_minus = 0
input.onButtonPressed(Button.A, function () {
    time += 1
    basic.showNumber(time)
    times_repeat += 1
    time_minus = -1
})
input.onButtonPressed(Button.AB, function () {
    time += time_minus
    basic.showNumber(time)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < times_repeat; index++) {
        basic.showNumber(time)
        time += time_minus
        basic.pause(1000)
        if (time == 1) {
            basic.showNumber(1)
            basic.pause(1000)
            time = 0
            music.play(music.stringPlayable("G A G A F G A F ", 300), music.PlaybackMode.UntilDone)
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(time)
})
