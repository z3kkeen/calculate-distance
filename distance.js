import readline from "read-console-input";
// friendly neighbourhood code that calculates 's' for you. c:

let askValues = ['Δv', "'a / r'", "'time'"];
let valuesValues = [];

function geaValues() {
    for(let i = 0; i < askValues.length; i++) {
        console.log('');
        let userInput = Number(readline("do you have a value for " + `${askValues[i]}` + " ? : "));

        if(userInput) {
            valuesValues.push(userInput);
            console.log(valuesValues);
            console.log(userInput);

        } else {
            valuesValues.push(null)
            console.log(valuesValues);
            console.log("no " + `${askValues[i]}` + " value logged");
        }
    }
    calc();
}

function calc() {
    let dvValue = valuesValues[0];
    let aValue = valuesValues[1];
    let tValue = valuesValues[2];

    if(dvValue && aValue) {
        console.log('dv and a');

        tValue = dvValue / aValue;
        console.log(tValue);

    } else if(dvValue && tValue) {
        console.log('dv and t');
        
        aValue = dvValue / tValue;
        console.log(aValue);
    }

    const s = 0.5 * aValue * (tValue * tValue)
    console.log('');
    console.log("0.5 x " + aValue + " x " + tValue + "²");
    console.log('---------------');
    console.log("value for 's' is " + s);
}

geaValues();