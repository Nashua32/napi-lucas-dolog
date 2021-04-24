dolgok = ["Joey vagyok, Biankáért jöttem.",
"Gucci ékszerek",
"Almás körtés volt!",
"KFC-s kanállal fagyitortát enni...",
"Sasak",
"Az anyád egy kakukk volt!",
"Brush your teeth!",
"Everybody knows that the bird is the word.",
"Müzlit enni sátorban éjfélkor",
"Lucáéknál mindig van fagyi.",
"Első a fish, aztán a diszkó!",
"Diszkószünet"]

let maidatum = String((new Date()).getFullYear())+ String((new Date()).getMonth()) + String((new Date()).getDate())

if (localStorage.datum) {
    if (maidatum != localStorage.datum) {
        localStorage.datum = maidatum
        localStorage.napild  = Math.floor(Math.random() * dolgok.length)
    }
    if (! localStorage.napild) {
        localStorage.napild = 0
    }
}
else {
    localStorage.datum =  String((new Date()).getFullYear())+ String((new Date()).getMonth()) + String((new Date()).getDate())
}

document.getElementById("szoveg").innerHTML = dolgok[parseInt(localStorage.napild)]

function ujNapi() {
    localStorage.napild  = Math.floor(Math.random() * dolgok.length)
    window.location.reload()
}