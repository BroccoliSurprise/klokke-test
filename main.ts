input.onButtonPressed(Button.A, function () {
    if (modus == 1 && minutt > 0) {
        minutt += -1
    }
    if (modus == 2 && time > 0) {
        time += -1
    }
})
function sekundTikk () {
    sekund += 1
    if (sekund > 59) {
        sekund = 0
        minutt += 1
        if (minutt > 59) {
            minutt = 0
            time += 1
            if (time > 23) {
                time = 0
            }
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    modus += 1
    if (modus == 1) {
        basic.showString("M")
    } else if (modus == 2) {
        basic.showString("H")
    } else {
        modus = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (modus == 1 && minutt < 60) {
        minutt += 1
    }
    if (modus == 2 && time < 24) {
        time += 1
    }
})
function klokkeDisplay () {
	
}
let modus = 0
let time = 0
let minutt = 0
let sekund = 0
sekund = 0
minutt = 0
time = 0
modus = 0
loops.everyInterval(1000, function () {
    sekundTikk()
    // oppdater skjerm
    if (modus == 0) {
        klokkeDisplay()
    } else if (modus == 1) {
        basic.showNumber(minutt)
    } else {
        basic.showNumber(time)
    }
})
basic.forever(function () {
	
})
