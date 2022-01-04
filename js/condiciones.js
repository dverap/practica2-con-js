class Condicion {
  constructor(tit = "Sin titulo") {
    this.titulo = tit;
  }
  condicion() {
    let $code = document.getElementById("condicion");
    $code.innerHTML = `
        <span>// condiciones multiples</span>
        let nota = 7;
        console.log("He realizado mi examen.");
        // Condición
        if (nota < 5) {
        calificacion = "Insuficiente";
        } else if (nota < 6) {
        calificación = "Suficiente";
        } else if (nota < 8) {
        calificacion = "Bien";
        } else if (nota <= 9) {
        calificacion = "Notable";
        } else {
        calificacion = "Sobresaliente";
        }
        console.log("He obtenido un", calificacion);
        <span>// operador ternario</span>
        let nota = 7;
        console.log("He realizado mi examen. Mi resultado es el siguiente:");
        // Operador ternario: (condición ? verdadero : falso)
        let calificacion = nota < 5 ? "suspendido" : "aprobado";
        console.log("Estoy", calificacion);
        `;
  }
}
export default Condicion
