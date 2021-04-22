function Zustandsautomat3 () {
    if (Zustand == 1) {
        Rot.showImage(0)
        AendereZustand(2, 6)
    } else if (Zustand == 2) {
        Rot_Orange.showImage(0)
        AendereZustand(3, 2)
    } else if (Zustand == 3) {
        Gruen.showImage(0)
        AendereZustand(4, 6)
    } else {
        Orange.showImage(0)
        AendereZustand(1, 2)
    }
}
// Endlichen Zustandautomat dürfen keine Wartezeiten implementiert werden !!!
function Zustandsautomat () {
    if (Zustand == 1) {
        Rot.showImage(0)
        Zustand = 2
    } else if (Zustand == 2) {
        Rot_Orange.showImage(0)
        Zustand = 3
    } else if (Zustand == 3) {
        Gruen.showImage(0)
        Zustand = 4
    } else {
        Orange.showImage(0)
        Zustand = 1
    }
}
// Fussgänger Schalter simulieren
input.onButtonPressed(Button.A, function () {
    basic.pause(500)
    Zustand = 4
})
function AendereZustand (numZustand: number, numintervall: number) {
    if (zaehler >= numintervall) {
        Zustand = numZustand
        zaehler = 0
    }
    zaehler += 1
}
function Zustandsautomat2 () {
    if (Zustand == 1) {
        Rot.showImage(0)
        if (zaehler == 10) {
            Zustand = 2
            zaehler = 0
        }
    } else if (Zustand == 2) {
        Rot_Orange.showImage(0)
        if (zaehler == 3) {
            Zustand = 3
            zaehler = 0
        }
    } else if (Zustand == 3) {
        Orange.showImage(0)
        if (zaehler == 3) {
            Zustand = 4
            zaehler = 0
        }
    } else {
        Gruen.showImage(0)
        if (zaehler == 10) {
            Zustand = 1
            zaehler = 0
        }
    }
    zaehler += 1
}
let Gruen: Image = null
let Orange: Image = null
let Rot_Orange: Image = null
let Rot: Image = null
let Zustand = 0
let zaehler = 0
zaehler = 0
Zustand = 1
Rot = images.createImage(`
    # . # # #
    . . # . #
    . . # # #
    . . # # .
    . . # . #
    `)
Rot_Orange = images.createImage(`
    # . # # #
    # . # . #
    . . # # #
    . . # # #
    . . # # #
    `)
Orange = images.createImage(`
    . . # # #
    # . # . #
    . . # . #
    . . # . #
    . . # # #
    `)
Gruen = images.createImage(`
    . . # # #
    . . # . .
    # . # . #
    . . # . #
    . . # # #
    `)
basic.forever(function () {
    Zustandsautomat()
    basic.pause(1000)
})
