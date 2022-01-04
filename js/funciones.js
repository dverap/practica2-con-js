class Funcion {
  constructor(tit = "Sin titulo") {
    this.titulo = tit;
  }
  funcion() {
    let $code = document.getElementById("funcion");
    $code.innerHTML = `
    // Declaración de la función "saludar"
    function saludar() {
      // Contenido de la función
      console.log("Hola, soy una función");
    }
    // Ejecución de la función
    saludar();
    // funcion con return (retorna un valor)
    function sumar(a, b) {
      return a + b; // Devolvemos la suma de a y b al exterior de la función
      console.log("Ya he realizado la suma."); // Este código nunca se ejecutará
    }
    // Ejecución
    let resultado = sumar(5, 5); // Se guarda 10 en la variable resultado
    //Antes
    var sumar = function (a, b) {
      return a + b;
    };
    console.log( sumar(10, 9) ); //Imprime 19

    //Ahora
    let sumar = (a, b) => a + b;
    console.log( sumar(10, 9) ); //Imprime 19
    `;
  }
}
export default Funcion
