let angle = 0
servos.P0.setRange(10, 170)
basic.forever(function () {
    for (let index = 0; index <= 16; index++) {
        angle = index * (10 + 10)
        servos.P0.setAngle(angle)
        basic.pause(100)
    }
    for (let indexidvar = 0; indexidvar <= 32; indexidvar++) {
        angle += angle - 5
        servos.P0.setAngle(angle)
        basic.pause(100)
    }
})
