// Zustandsautomat V3:
// Funktionalität für den Zustandswechsel ist ausgelagert in das Unterprogramm AendereZustand. Anmerkung: Jetzt ohne Funktion müsste in "dauerhaft" ausgetauscht 
function Zustandsautomat3 () {
    if (zustand == 1) {
        rot.showImage(0)
        AendereZustand(2, 6)
    } else if (zustand == 2) {
        rotOrange.showImage(0)
        AendereZustand(3, 2)
    } else if (zustand == 3) {
        gruen.showImage(0)
        AendereZustand(4, 6)
    } else {
        orange.showImage(0)
        AendereZustand(1, 2)
    }
}
// Endlichen Zustandautomat dürfen keine Wartezeiten implementiert werden !
// Zustandsänderungen werden  direkt im Unterprogramm durchgeführt.
function Zustandsautomat () {
    if (zustand == 1) {
        rot.showImage(0)
        zustand = 2
    } else if (zustand == 2) {
        rotOrange.showImage(0)
        zustand = 3
    } else if (zustand == 3) {
        gruen.showImage(0)
        zustand = 4
    } else {
        orange.showImage(0)
        zustand = 1
    }
}
// Fussgänger Schalter simulieren
input.onButtonPressed(Button.A, function () {
    basic.pause(500)
    zustand = 4
})
// Unterprogramm mit 2 Übergabeparametern. Verändert den Zustand und inkrementiert den zaehler
function AendereZustand (numZustand: number, numintervall: number) {
    if (zaehler >= numintervall) {
        zustand = numZustand
        zaehler = 0
    }
    zaehler += 1
}
// Verbesserter Zustandsautomat mit einer Zeitsteuerung (zaehler =1 Sekunde), da in "dauerhaft" 1 Sekunde pausiert wird. Anmerkung: Jetzt ohne Funktion müsste in "dauerhaft" ausgetauscht werden.
function Zustandsautomat2 () {
    if (zustand == 1) {
        rot.showImage(0)
        if (zaehler == 10) {
            zustand = 2
            zaehler = 0
        }
    } else if (zustand == 2) {
        rotOrange.showImage(0)
        if (zaehler == 3) {
            zustand = 3
            zaehler = 0
        }
    } else if (zustand == 3) {
        orange.showImage(0)
        if (zaehler == 3) {
            zustand = 4
            zaehler = 0
        }
    } else {
        gruen.showImage(0)
        if (zaehler == 10) {
            zustand = 1
            zaehler = 0
        }
    }
    zaehler += 1
}
// Variablen initialisieren
let gruen: Image = null
let orange: Image = null
let rotOrange: Image = null
let rot: Image = null
let zustand = 0
let zaehler = 0
zaehler = 0
zustand = 1
rot = images.createImage(`
    # . # # #
    . . # . #
    . . # # #
    . . # # .
    . . # . #
    `)
rotOrange = images.createImage(`
    # . # # #
    # . # . #
    . . # # #
    . . # # #
    . . # # #
    `)
orange = images.createImage(`
    . . # # #
    # . # . #
    . . # . #
    . . # . #
    . . # # #
    `)
gruen = images.createImage(`
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
