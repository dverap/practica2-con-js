//! Creacion de la clase Persona
class Persona {
  //* el constructor es un método especial que crea e inicializa
  //* los atributos de la clase y se ejecuta al instanciar la clase
  constructor(nombre, cedula, fecNacimiento, sexo, activo = true) {
    this.nombre = nombre;
    this._ruc = cedula; //* atributo privado( _ )
    this.nacimiento = fecNacimiento;
    this.sexo = sexo;
    this.activo = activo;
  }
  //* metodo setter. Asigna un valor al atributo privado
  set ruc(value) {
    this._ruc = value;
  }
  //* metodo getter. Retorna el valor del atributo privado
  get ruc() {
    return this._ruc;
  }
  mostrar(msg = "Datos de la Persona") {
    console.log(msg);
    console.log(
      `${this.nombre} - ${this.ruc} - ${this.nacimiento} - 
       ${this.sexo} - ${this.activo}`
    );
  }
  mostrarReturn() {
    return `${this.nombre} - ${this.ruc} - ${this.nacimiento} - ${this.sexo} - ${this.activo} `;
  }
  mostrarArreglo() {
    return [this.nombre, this.ruc, this.nacimiento, this.sexo, this.activo];
  }
  mostrarObjeto() {
    let nom = this.nombre,
      ced = this.ruc,
      nac = this.nacimiento,
      sex = this.sexo,
      act = this.activo;
    return { nom, ced, nac, sex, act };
  }
}
//!instanciar clases
let fecha = new Date(1969,4,21) //* crea una fecha
const humano1 = new Persona("Daniel","0914192182",fecha,"M")
humano1.mostrar()
const humano2 = new Persona("Ana", "0914192184", new Date(1971, 5, 9), "F",false);
humano2.mostrar("Datos de la Persona 'Ana'")
let cadena = humano2.mostrarReturn()
console.log("Mostrar datos con return");
console.log(cadena);
console.log("Mostrar datos con Arreglo");
let arreglo = humano2.mostrarArreglo();
console.log(arreglo);
//* destructuring de un arrglo
let [nombres, ced, nac, sex, act] = arreglo;
let fecNac = nac.toLocaleDateString()
console.table({nombres,ced,fecNac,sex,act});
console.log("Mostrar Objeto");
const datos = humano2.mostrarObjeto();
console.log(datos);
names="nom"
console.log(datos.nom,datos["nom"],datos[names]);
// destructuring en objeto
let { nom, ced:cedu, nac:naci, sex:sexo, act:activo } = datos;
console.warn(nom, cedu, naci, sexo, activo);






