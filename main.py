def Zustandsautomat3():
    if Zustand == 1:
        Rot.show_image(0)
        AendereZustand(2, 6)
    elif Zustand == 2:
        Rot_Orange.show_image(0)
        AendereZustand(3, 2)
    elif Zustand == 3:
        Gruen.show_image(0)
        AendereZustand(4, 6)
    else:
        Orange.show_image(0)
        AendereZustand(1, 2)
# Endlichen Zustandautomat dürfen keine Wartezeiten implementiert werden !!!
def Zustandsautomat():
    global Zustand
    if Zustand == 1:
        Rot.show_image(0)
        Zustand = 2
    elif Zustand == 2:
        Rot_Orange.show_image(0)
        Zustand = 3
    elif Zustand == 3:
        Gruen.show_image(0)
        Zustand = 4
    else:
        Orange.show_image(0)
        Zustand = 1

def on_button_pressed_a():
    global Zustand
    basic.pause(500)
    Zustand = 4
input.on_button_pressed(Button.A, on_button_pressed_a)

def AendereZustand(numZustand: number, numintervall: number):
    global Zustand, zaehler
    if zaehler >= numintervall:
        Zustand = numZustand
        zaehler = 0
    zaehler += 1
def Zustandsautomat2():
    global Zustand, zaehler
    if Zustand == 1:
        Rot.show_image(0)
        if zaehler == 10:
            Zustand = 2
            zaehler = 0
    elif Zustand == 2:
        Rot_Orange.show_image(0)
        if zaehler == 3:
            Zustand = 3
            zaehler = 0
    elif Zustand == 3:
        Orange.show_image(0)
        if zaehler == 3:
            Zustand = 4
            zaehler = 0
    else:
        Gruen.show_image(0)
        if zaehler == 10:
            Zustand = 1
            zaehler = 0
    zaehler += 1
Gruen: Image = None
Orange: Image = None
Rot_Orange: Image = None
Rot: Image = None
Zustand = 0
zaehler = 0
zaehler = 0
Zustand = 1
Rot = images.create_image("""
    # . # # #
        . . # . #
        . . # # #
        . . # # .
        . . # . #
""")
Rot_Orange = images.create_image("""
    # . # # #
        # . # . #
        . . # # #
        . . # # #
        . . # # #
""")
Orange = images.create_image("""
    . . # # #
        # . # . #
        . . # . #
        . . # . #
        . . # # #
""")
Gruen = images.create_image("""
    . . # # #
        . . # . .
        # . # . #
        . . # . #
        . . # # #
""")

def on_forever():
    Zustandsautomat()
    basic.pause(1000)
basic.forever(on_forever)
