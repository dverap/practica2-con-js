class Coleccion {
  constructor(tit = "Sin titulo") {
    this.titulo = tit;
  }
  coleccion() {
    let $code = document.getElementById("coleccion");
    $code.innerHTML = `
    // arreglos
    const frutas = ["🍌", "🍏", "🍓"];
    // por referencia (revisar videos anteriores)
    const arrayReferencia = frutas; 
    frutas.push("🍉");
    console.log(arrayReferencia);

    // construye un nuevo array con los resultados
    // esto lo hace sin mutar el arreglo original
    const nuevoArray = frutas.map((item) => item);
    frutas.push("🍉");
    console.log(nuevoArray);
    // objetos
    const gato = {
    nombre: 'Valiente',
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    otros: {
        amigos: ["Cobarde", "Tímido", "Pegajoso"],
        favoritos: {
            comida: {
                fria: "salmón",
                caliente: "pollo"
            }
        }
    }
   }
   console.log(gato.otros.amigos[0])// presenta cobarde
   console.log(gato.otros.favoritos.comida.fria) // salmón
    `;
  }
}
export default Coleccion;
