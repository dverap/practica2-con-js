class Promesas {
  constructor(tit = "Sin titulo") {
    this.titulo = tit;
  }
  promesas() {
    let $code = document.getElementById("promesa");
    $code.innerHTML = `
    // promesas sin async await
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => console.log(data));
      .catch((error) => console.log(error))
      // async await
      const findPostById = async (id) => {
      try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const post = await res.json();
            console.log(post);
        } catch (error) {
            console.log(error);
        }
      };

      findPostById(1);
    `;
    
  }
}
export default Promesas;
