input.onButtonPressed(Button.A, function () {
    dice = randint(1, 6)
    basic.showNumber(dice)
    basic.showString("Press b to roll dice 2")
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + dice + "+" + dice_2)
    basic.showNumber(dice + dice_2)
})
input.onButtonPressed(Button.B, function () {
    dice_2 = randint(1, 6)
    basic.showNumber(dice_2)
    basic.showString("a+b for answer")
})
let dice_2 = 0
let dice = 0
basic.showString("Press A to roll dice 1")
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
