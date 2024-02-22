//json se define con {} y arrays con []
console.log("entrada 1");
var entrada={
    "nombre":"dougals",
    "tipo":"apa",
    "grado":4.5
};

console.log(entrada);   
console.log("entrada 2");
var entrada2={
    "nombre":"dougals",
    "tipo":[
        "APA",
        "ipa",
        "Double IPA",
        "Stoud",
        "Session"
    ],
    "grado":4.5
};
 console.log(entrada2)
 console.log("entrada 3");
var entrada3=[
    {
        "nombre":"dougals",
        "tipo":[
            "APA",
            "ipa",
            "Double IPA",
            "Stoud",
            "Session"
        ],
        "grado promedio":4.5
    },   
    {
        "nombre":"Golpeadora",
        "tipo":[
            "Double IPA",
            "Stoud",
            "Session"
        ],
        "grado promedio":5.3
    },
    {
        "nombre":"Estralla Galicia",
        "tipo":[
            "Pilsner",
            "Red",
            "Double Stout",
            "Stoud",
            "Barril"
        ],
        "grado promedio":6.5
    }

];
console.log(entrada3);

