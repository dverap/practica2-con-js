
export const  formValida = () => {
  const d = document;
  const $form = d.querySelector(".form");
  const $input = d.querySelectorAll(".form [required]");
  // console.log("input");
  console.log($input);
  $input.forEach((elemento) => {
    console.log(elemento);
    let $span = d.createElement("span");
    $span.id = elemento.name;
    $span.textContent = elemento.title;
    $span.classList.add("form-error", "none");
    elemento.insertAdjacentElement("afterend", $span);
  });
  // El evento keydown se dispara cuando presionamos cualquier tecla del teclado, el evento keyup cuando soltamos una tecla. En cuanto el evento keypress en un principio procesa tanto cuando se la presionó y soltó,
  d.addEventListener("keyup",(e) => {
     // console.log(e.target);
    //delegacion de eventos
    if (e.target.matches(".form [required]")) {
      console.log(e.target, e.target.name, e.target.value,e.key);
      let $input = e.target
      let  pattern = $input.pattern || $input.dataset.pattern;
      console.log(pattern);
  };
})
}