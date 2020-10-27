/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en
una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +) */

var gentilicio, gentilicioMay, gentilicioMin, gentilicioCompleto

gentilicio = 'venezolano';

gentilicioMay = (gentilicio.substring(0,1)),

gentilicioMin = (gentilicio.substring(1));

gentilicioCompleto = (gentilicioMay.toUpperCase() + gentilicioMin.toLowerCase());

