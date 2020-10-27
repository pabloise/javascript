/* Al array anterior convertir la primera letra de cada palabra en mayúscula y
mostrar una alerta por cada palabra modificada.*/

var jugadores

jugadores = ['ayala', 'torrent', 'laso', 'novaretti', 'blanco'];

for (i=0; i < jugadores.length; i++) {
    var jugadoresCapital = jugadores[i];
    var primeraLetra = jugadoresCapital.substring(0, 1).toUpperCase();
    var otrasLetras = jugadoresCapital.substring(1).toLowerCase();
    var jugadoresMay = primeraLetra + otrasLetras;
    alert(jugadoresMay);
}
