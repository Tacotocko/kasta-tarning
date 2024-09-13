radio.onReceivedString(function (receivedString) {
    if (receivedString == "SpelVal1") {
        number = 4
    }
})
input.onGesture(Gesture.Shake, function () {
    if (number == 4) {
        number = randint(1, 6)
        basic.showNumber(number)
        radio.sendValue("Bit 1", number)
        basic.pause(1000)
        basic.clearScreen()
    }
})
let number = 0
radio.setGroup(1)
