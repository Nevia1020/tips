let num = 0
let num2 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(num + num2)
})
input.onButtonPressed(Button.A, function () {
    num += 1
})
input.onButtonPressed(Button.AB, function () {
    num = 0
})
input.onButtonPressed(Button.B, function () {
    num += -1
})
// save variable num and now going to be called num2.
input.onGesture(Gesture.Shake, function () {
    num2 = num
})
basic.forever(function () {
    basic.showNumber(num)
})
