/*A la función suma anterior, agregarle una validación para controlar si alguno de los
parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene
error y retornar el valor NaN como resultado.*/
var numero1 = 10;
var numero2 = 20;

function suma (numero1,numero2){
    return numero1 + numero2;
}

suma()
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number'){
        alert ('Uno de los parámetros no es un número');
        console.log('NaN');
        }
    else {
        console.log(numero1 + numero2);
    }