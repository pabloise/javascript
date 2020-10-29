/* Crear una función validate integer que reciba un número como parámetro y devuelva
verdadero si es un número entero*/

var numero1 = 17;

function validateInteger(numero1){
    if(Number.isInteger(numero1)){
        return console.log(true);
    }
    else {
        return console.log(false);
    }
}

validateInteger(numero1);
