/* Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es
mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta
con el mensaje “Lower than 0,5”*/

var number;

number = Math.random();

if (number >= 0,5){
    alert('Greater than 0,5');
}
else{
    alert('Lower than 0,5');
}