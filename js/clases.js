//! Creacion de la clase Persona y Estudiante
export class Persona {
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
// Herencia
export class Estudiante extends Persona {
  static matricula = 50;
  constructor(
    nombre,
    cedula,
    fecNacimiento,
    sexo,
    email,
    carrera,
    semestre,
    activo = true
  ) {
    //* ejecuta el constructor de la clase base
    super(nombre, cedula, fecNacimiento, sexo, activo);
    //* crea los nuevos atributos de la subclase(Estudiante)
    this.email = email;
    this.carrera = carrera;
    this.semestre = semestre;
  }
  //* metodo estatico
  static rebajaMatricula() {
    return Estudiante.matricula / 2;
  }

  edad() {
    let fechaHoy = new Date();
    //*                      2021                        12               28
    let hoy = new Date(
      fechaHoy.getFullYear(),
      fechaHoy.getMonth(),
      fechaHoy.getDate()
    );
    let anio = hoy.getFullYear() - this.nacimiento.getFullYear();
    let mas =
      (hoy.getMonth(), hoy.getDate()) <
      (this.nacimiento.getMonth(), this.nacimiento.getDate());
    return anio + mas;
  }
  //* Aplica polimorfismo al metodo de la clase base:mostrarReturn()
  mostrarReturn() {
    return (
      // Super. llama al metodo de la clase base ya que tiene el mismo nombre
      super.mostrarReturn() +
      " - " +
      this.email +
      " - " +
      this.carrera +
      " - " +
      this.semestre
    );
  }
}
//* Creacion de funciones
function getEstudiante() {
  //!instanciar clases
  let fecha = new Date(1969, 4, 21); //* crea una fecha
  //* Instancia y crea el objeto humano1 y ejecuta el constructor de la clase
  const humano1 = new Persona("Daniel", "0914192182", fecha, "M");
  humano1.mostrar();
  //* Instancia y crea el objeto humano2 a partir de la clase
  const humano2 = new Persona(
    "Ana",
    "0914192184",
    new Date(1971, 5, 9),
    "F",
    false
  );
  humano2.mostrar("Datos de la Persona 'Ana'");
  let cadena = humano2.mostrarReturn();
  console.log("Mostrar datos con return");
  console.log(cadena);
  console.log("Mostrar datos con Arreglo");
  let arreglo = humano2.mostrarArreglo();
  console.log(arreglo);
  //* destructuring de un arrglo
  let [nombres, ced, nac, sex, act] = arreglo;
  let fecNac = nac.toLocaleDateString();
  console.table({ nombres, ced, fecNac, sex, act });
  console.log("Mostrar Objeto");
  const datos = humano2.mostrarObjeto();
  console.log(datos);
  let names = "nom";
  console.log(datos.nom, datos["nom"], datos[names]);
  // destructuring en objeto
  let { nom, ced: cedu, nac: naci, sex: sexo, act: activo } = datos;
  console.warn(nom, cedu, naci, sexo, activo);
  console.log("mostrar setter y getter de _ruc");
  console.log(`Ruc1: ${humano2.ruc}`);
  humano2.ruc = "99999999";
  console.log(`Ruc2: ${humano2.ruc}`);
  let c = humano2.ruc;
  console.log(`Ruc2: ${c}`);
  // instanciar clase Estudiante
  const est1 = new Estudiante(
    "Daniel",
    "0914192182",
    fecha,
    "M",
    "dverap@unemi.edu",
    "Sistemas",
    8
  );
  est1.mostrar();
  let estu = est1.mostrarReturn();
  console.log(estu);
  console.log(`Edad: ${est1.edad()}`);
  console.log(`matricula: ${Estudiante.matricula}`);
  console.log(`matricula rebajada: ${Estudiante.rebajaMatricula()}`);
  console.log(Math.pow(2, 4));
  let $code = document.getElementById("clase")
  $code.innerHTML = `
    <span>class Persona {</span>
    #ruc = ""; // atributo privado
    //* el constructor es un método especial que se ejecuta en el momento
    //* de instanciar la clase
    constructor(nombre, cedula, fecNacimiento, sexo, activo = true) {
      this.nombre = nombre;
      this.nacimiento = fecNacimiento;
      this.sexo = sexo;
      this.activo = activo;
      this.#ruc=cedula
    }
    //* metodo setter
    set ruc(dcto) {
      this.#ruc = dcto;
    }
    //* metodo getter
    get ruc() {
      return this.#ruc;
    }
    mostrar() {
      console.log(this.nombre,this.ruc,this.nacimiento,this.sexo,this.activo);
    }
  <span>}</span> 
  `;
}
const valCedula = (cedula) => {
  return true
}

export {getEstudiante,valCedula}
