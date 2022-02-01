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
  usoFunciones(){
    // funcion sin retorno de valor
    console.log("Uso de Funciones");
    function msg(menj) {
      console.log("Funcion => " + menj);
    }
    // arrow funcion
    const msgA = (menj = "Sin Retorno valor") => {
      console.log("@funcion " + menj);
    };
    // funcion con retorno valor
    function msg2(menj) {
      return "Funcion => " + menj;
    }
    const msgA2 = (menj = "Sin Retorno valor") => "@funcion " + menj;
    msg("No retorno valor1");
    console.warn(msg2("No retorno valor2"));
    msgA();
    console.error(msgA2("Sin Retorno valor2"));

    console.log("funcion dividir");
    const dividir2 = (n1 = 0, n2 = 0) => {
      try {
        let resp = n1 / n2;
        if (isNaN(resp) || resp === Infinity)
          throw "Error al dividir para cero: " + resp;
        else return resp;
      } catch (error) {
        return error;
      }
    };
    // const dividir2 = (n1 = 0, n2 = 0) => {
    //   let resp;
    //   try {
    //     resp = n1 / n2;
    //     if (isNaN(resp) || resp === Infinity)
    //       throw "Error al dividir para cero: " + resp;

    //   } catch (error) {
    //     resp= error;
    //   }
    //   return resp
    // };
    let d1 = dividir2();
    console.log(`n1=0, n2=0,${d1}`);
    let d2 = dividir2(4);
    console.log(`n1=4, n2=0,${d2}`);
    let d3 = dividir2(4, 2);
    console.log(`n1=4, n2=2,${d3}`);
    // Función anónima(lambda). Es un tipo de funcion que se declara sin nombre y se asigna
    // en una variable y para utilizarla se hace referencia a dicha variable:
    console.log("Funcion lambda");
    let num1 = 4;
    let num2 = 5.5;
    const calculo = function (n1, n2) {
      return n1 * n2;
    };
    console.log(calculo(num1, num2), typeof num1, typeof num1, typeof calculo);
    if (typeof calculo == "function") console.log("calculo es una funcion");

    // funcion callback: recibe como parametro a otra funcion: ejecutada
    const ejecutada1 = function (dato) {
      if (dato === "/")
        console.log("llamada a la pagina principal1=> index.html");
      else console.log("llamada a las paginas secundarias1", dato);
    };
    const ejecutada2 = (dato) => {
      if (dato === "/")
        console.log("llamada a la pagina principal2=> index.html");
      else console.log("lamada a las paginas secundarias @funcion", dato);
    };
    const principal = function (dato, callback) {
      //dato = "//"
      callback(dato);
    };
    principal("/", ejecutada1);
    principal("/user", ejecutada1);
    principal("/user2", ejecutada2);
    principal("/user3", (opc) => {
      console.log("Llamada en linea: " + opc);
    });
    
    // Función autoejecutable sin y con parámetros
    (function () {
      console.log(`¡Funcion autoejecutable sin parmaetros`);
    })();
    (function (parametro) {
      console.log(`¡Funcion autoejecutable: ${parametro}!`);
    })("datos cargados");

    // funciones temporalizadoras
    // interval se ejecuta cada tiempo indicado()
    const fecha = setInterval(() => {
      const fech = new Date();
      console.log(fech.toLocaleTimeString());
    }, 1000);
    // settimeout se ejecuta 1 sola vez en el tiempo indicado
    setTimeout(() => {
      clearInterval(fecha);
    }, 5000);
    // fin de usoFunciones
  }
}
export default Funcion







