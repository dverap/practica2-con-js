import Bucle from './bucles.js'
import {Persona, Estudiante,getEstudiante,valCedula} from './clases.js'
import Coleccion from './colecciones.js'
import Condicion from './condiciones.js'
import Funcion from './funciones.js'
import Promesas from './promesas.js'
import { formValida } from './validaForm.js'

document.addEventListener('DOMContentLoaded',(e) => {
  //alert("Pagina cargada")
  // const $code = document.getElementById("clase")
  // console.log($code);
  // const $pre = document.querySelector(".js")
  // console.log($pre);
  // console.log(e.target.all);
  getEstudiante()
  const condicion1 = new Condicion()
  condicion1.condicion()
  const bucle1 = new Bucle()
  bucle1.bucle()
  const funcion1 = new Funcion()
  funcion1.funcion()
  const coleccion1 = new Coleccion()
  coleccion1.coleccion()
  const promesa1 = new Promesas()
  promesa1.promesas()
  formValida()


})