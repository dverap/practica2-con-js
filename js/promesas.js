
class Promesas {
  constructor(tit = "Sin titulo") {
    this.titulo = tit;
  }
  promesas() {
    let $code = document.getElementById("promesa");
    $code.innerHTML = `
    // promesas sin async await
    // fetch("https://jsonplaceholder.typicode.com/posts/1")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    //   .catch((error) => console.log(error))
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
  promesaNormal() {
    // peticion local
    fetch("./datos/estudiantes.txt")
      .then((response) => {
        return response.text(); // Devuelve una promesa
      })
      .then((datos) => {
        console.log(datos);
      })
      .catch((error) => {
        console.log(error);
      });
    // peticion en la nube
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.forEach((post) => {
          console.log(post.id, post.title);
        });
      })
      .catch((error) => console.log(error));
  }
  promesaAsyncAwait() {
    const findPostById = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const post = await res.json();
        console.log("async await");
        console.log(post);
        let html = "<ul>";
        post.forEach((post) => {
          html += `<li>
             ${post.id} - ${post.title}
             <img src="./img/logo_js.png" width="50px" alt="No Existe imagen">
           </li>`;
        });
        html += "</ul>";
        document.getElementById("promesa").innerHTML += html;
      } catch (error) {
        console.log(error);
      }
    };
    findPostById();
  }
  promesaAsyncAwait2() {
    const findPostById = async (id) => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const post = await res.json();
        console.log("async await2");
        console.log(post);
        
      } catch (error) {
        console.log(error);
      }
    };
    findPostById(1);
  }
}
export default Promesas;
