/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pre = ["tu", "el", "vuestro"];
let mid = ["profesor", "farmeador", "programador"];
let end = ["aterrador", "vigilante", "despistado"];
let dominio = ["es", "do", "or"];

//Añado onload con las llamadas
window.onload = function() {
  let inputNick = document.getElementById("nick");
  let dominioGenerado = document.getElementById("dominioGenerado");

  //Funcion para detectar cuando pulsan la teclca
  inputNick.addEventListener("keydown", function(darIntro) {
    //Especifico que tecla es
    if (darIntro.key === "Enter") {
      // hago que nick sea el valor que meten en el imput del form
      let nick = inputNick.value;
      //Si esta vacio y no agregan nada
      if (nick === "") {
        dominioGenerado.innerHTML = `<h2>Mete el nick anda, que han sido dos horas hacer que funcione :)</h2><img
          class="container-fluid text-center img-fluid mt-4"
          src="https://media.tenor.com/r2LZapJhs4IAAAAi/pull-gun-ready-to-fight.gif"
          width="50%"
          alt=""
        />`;
        // cuando agreguen algo
      } else {
        let generandoDominio = " ";
        // inicio el bucle
        for (let i = 0; i < pre.length; i++) {
          for (let j = 0; j < mid.length; j++) {
            for (let k = 0; k < end.length; k++) {
              for (let l = 0; l < dominio.length; l++) {
                let supr = "";
                // Si coinciden las dos ultimas letras con dominio
                if (end[k].slice(-2) === dominio[l]) {
                  supr = end[k].slice(0, -2);
                  generandoDominio +=
                    nick + pre[i] + mid[j] + supr + "." + dominio[l] + " <br> ";
                  //
                } else {
                  generandoDominio +=
                    nick +
                    pre[i] +
                    mid[j] +
                    end[k] +
                    "." +
                    dominio[l] +
                    " <br> ";
                }
              }
            }
          }
        }

        dominioGenerado.innerHTML = generandoDominio;
      }
    }
  });
};
// if (end[k].slice(-2) === dominio[l].slice(0, 2)) {          //-Error arreglado
//   supr = end[k].slice(0, -2) + dominio[l];                  //-Estaba quitando las dos ultimas letras y volviendolas a añadir
//   generandoDominio +=                                       // en supr
//     nick + pre[i] + mid[j] + "." + supr + " <br> ";         //-Aqui pongo punto antes
