class Bucle {
  constructor(tit = "Sin titulo") {
    this.titulo = tit;
  }
  bucle() {
    let $code = document.getElementById("bucle");
    $code.innerHTML = `
    let i = 0; // Inicialización de la variable contador
    <span>// While:Condición: Mientras la variable contador sea menor de 5
    while (i < 5 && i!=4) {</span>
      console.log("Valor de i:", i);
      i = i + 1; // Incrementamos el valor de i
    <span>}</span>
    <span>// for (inicialización; condición; incremento)
    for (i = 0; i < 5; i++) {</span>
      console.log("Valor de i:", i);
    }
    <span>// for in </span>
    let diasMes = {
    enero: 31,
    febrero: 28,
    marzo: 31,
    abril: 30,
    mayo: 31
    }
    for (let mes in diasMes){
       console.log(mes);
    <span>// using for...of</span>
    const students = ['John', 'Sara', 'Jack'];
    for (let element of students ) {
        console.log(element);
    } 
       
  }`;
  }
  bucleEjemplo() {
      const students = ["John", "Sara", "Jack",24];
      let j=0
      while (j < students.length && students[j] != "Jack") {
        console.log("while ", students[j]);
        j = j + 1;
      }
      let i=20
      for (let i = 0; i < students.length; i++) {
      console.log("for i:", i,students[i]);
    }
    console.log("valor final i:=",i);
     for (let indice in students){
       console.log("for in=>",indice,students[indice]);
     }  
     for (let student of students){
       console.log("for of=>",student);
     }  
    const recorrido = (student) => {
      console.log("forEach=> ", student);
    }; 
    students.forEach(recorrido) 
    students.forEach((student) => {
      console.log("forEach=> ", student);
    }); 
  }
}
export default Bucle
