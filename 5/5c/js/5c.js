/*Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir
guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.*/

var sentence = '';

var jugadores;

jugadores = ['Ayala', 'Torrent', 'Laso', 'Novaretti', 'Blanco'];

for (i=0; i < jugadores.length; i++) {
    var sentence = jugadores[i];
    sentence = jugadores.join();
}
alert(sentence);
