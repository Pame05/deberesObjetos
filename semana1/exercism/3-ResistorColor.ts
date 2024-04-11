export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const colorCode = (color:string) => {
  return COLORS.indexOf(color);
};
                       
// Primero se crea un array que contenga los colores del código de colores de las resistencias
// Luego, se realiza un funcion y se declara el tipo de dato de color con el fin de obtener
//   como retorno cada valor de los COLORES. Esto se lo realiza con el indexOf el cual muestra 
//   el indice de cada elemento del array , que concuerda con el valor de cada color.
