import { criarComentarios, criarSeries } from "./functions.js";
const buttons = Array.from(document.querySelectorAll(".botao_index"));
const content = document.querySelector(".main");

console.log(buttons);

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        content.innerHTML = "";
        criarConteudo(button.value);
    })
});

function criarConteudo(value){
    switch(value){
        case 1:
            criarSeries(content);
            break;
        case 2:
            criarComentarios(content, 'Explorar');
        break;
        case 3:
            criarComentarios(content, 'Seguindo');
            break;
    }
}