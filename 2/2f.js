/* Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +) */

var palabras, palabrasEspacio, palabra1May, palabra1Min, palabra2May, palabra2Min, palabrasCompletas;

palabras = 'servicio meteorológico';
palabrasEspacio = palabras.indexOf(' ');

palabra1May = (palabras.substring(0,1));
palabra1Min = (palabras.substring(1,8));

palabra2May = (palabras.substring (9,10));
palabra2Min = (palabras.substring (10));

palabrasCompletas = palabra1May.toUpperCase() + palabra1Min.toLowerCase() + ' ' + palabra2May.toUpperCase() + palabra2Min.toLowerCase();





