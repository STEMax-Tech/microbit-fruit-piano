input.onButtonPressed(Button.A, function () {
    led.plot(0, 0)
    volume = Math.max(volume - 10, 10)
})
input.onButtonPressed(Button.AB, function () {
    led.plot(0, 0)
    led.plot(4, 0)
    volume = 200
})
input.onButtonPressed(Button.B, function () {
    led.plot(4, 0)
    volume = Math.min(volume + 10, 260)
})
let volume = 0
let pinValue = 450
pins.setAudioPin(DigitalPin.P16)
volume = 200
music.setVolume(volume)
serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    serial.writeNumbers([
    pins.analogReadPin(AnalogReadWritePin.P10),
    pins.analogReadPin(AnalogReadWritePin.P4),
    pins.analogReadPin(AnalogReadWritePin.P3),
    pins.analogReadPin(AnalogReadWritePin.P2),
    pins.analogReadPin(AnalogReadWritePin.P1),
    pins.analogReadPin(AnalogReadWritePin.P0),
    volume
    ])
    basic.pause(200)
    led.unplot(0, 0)
    led.unplot(4, 0)
})
basic.forever(function () {
    music.setVolume(volume)
    if (pins.analogReadPin(AnalogReadWritePin.P0) >= 500) {
        led.toggle(2, 2)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    if (pins.analogReadPin(AnalogReadWritePin.P10) >= 600) {
        led.toggle(2, 2)
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    if (pins.analogReadPin(AnalogReadWritePin.P4) >= 600) {
        led.toggle(2, 2)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    if (pins.analogReadPin(AnalogReadWritePin.P3) >= 600) {
        led.toggle(2, 2)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    if (pins.analogReadPin(AnalogReadWritePin.P2) >= pinValue) {
        led.toggle(2, 2)
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    if (pins.analogReadPin(AnalogReadWritePin.P1) >= pinValue) {
        led.toggle(2, 2)
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
})
