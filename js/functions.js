 export function criarComentarios(elementoPai, txtTitulo){
        const comentarios = document.createElement('div');
            comentarios.classList.add("comentarios");

            const titulo = document.createElement("h1");
            titulo.textContent = txtTitulo;

            const form = document.createElement("form");
            form.id = "enviar_comentario";

            const imgForm = document.createElement("img");
            imgForm.src = "img/users/default/pfp.jpg";

            const divForm = document.createElement("div");
            divForm.classList.add("comentario_input");

            const textarea = document.createElement("textarea");
            textarea.name = "comentario";
            const btnEnviar = document.createElement("button");
            btnEnviar.type = "submit";
            btnEnviar.textContent = "Enviar";

            form.appendChild(imgForm);
            divForm.appendChild(textarea);
            divForm.appendChild(btnEnviar);
            form.appendChild(divForm);

            const barra = document.createElement("div"); // SERÁ NECESSÁRIO CRIAR UMA BARRA PRA CADA DIVISÓRIA
            barra.classList.add("barra");

            let comentario = document.createElement("div");
            comentario.classList.add("comentario");

            let imgComentario = document.createElement("img");
            imgComentario.src = "img/users/default/pfp.jpg";

            let divComentario = document.createElement("div");
            
            let nomeUsuario = document.createElement("h3");
            nomeUsuario.textContent = "Lorem";

            let textComentario = document.createElement("p");
            textComentario.textContent = "Série foda";

            const buttons = document.createElement("div");
            buttons.classList.add("buttons");

            const buttonLike = document.createElement("button");
            buttonLike.classList.add("button_comment");
            buttonLike.classList.add("like");

            const likeImg = document.createElement("img");
            likeImg.src = "img/estrutura/like.png";

            const buttonReply = document.createElement("button");
            buttonReply.classList.add("button_comment");


            const replyImg = document.createElement("img");
            replyImg.src = "img/estrutura/reply.png";

            buttonLike.appendChild(likeImg);
            buttonLike.innerHTML += "52";

            buttonLike.addEventListener("click", (e)=>{
               e.currentTarget.querySelector(".like > img").src = "img/estrutura/liked.png";
            })

            buttons.appendChild(buttonLike);

            buttonReply.appendChild(replyImg);
            buttonReply.innerHTML += "34";

            buttons.appendChild(buttonReply);

            const verMais = document.createElement("button");
            verMais.classList.add("verMais");
            verMais.textContent = "Ver Mais";

            divComentario.appendChild(nomeUsuario);
            divComentario.appendChild(textComentario);
            divComentario.appendChild(buttons);

            comentario.appendChild(imgComentario);
            comentario.appendChild(divComentario);

            comentarios.appendChild(form);
            comentarios.appendChild(barra);
            comentarios.appendChild(comentario);

            elementoPai.appendChild(titulo);
            elementoPai.appendChild(comentarios);
            elementoPai.appendChild(verMais);
}

export function criarSeries(elementoPai){
    elementoPai.innerHTML = `
            <h1>Nosso Catalogo</h1>
            <div id="series_container">
                <div class="serie">
                    <a href="serie.html">
                        <img src="img/series/1/banner.webp" alt="">
                    </a>
                    <p>Mafia, Drama</p>
                </div>
                <div class="serie">
                    <a href="serie.html">
                        <img src="img/series/1/banner.webp" alt="">
                    </a>
                    <p>Mafia, Drama</p>
                </div>
                <div class="serie">
                    <a href="serie.html">
                        <img src="img/series/1/banner.webp" alt="">
                    </a>
                    <p>Mafia, Drama</p>
                </div>
                <div class="serie">
                    <a href="serie.html">
                        <img src="img/series/1/banner.webp" alt="">
                    </a>
                    <p>Mafia, Drama</p>
                </div>
                <div class="serie">
                    <a href="serie.html">
                        <img src="img/series/1/banner.webp" alt="">
                    </a>
                    <p>Mafia, Drama</p>
                </div>
                <div class="serie">
                    <a href="serie.html">
                        <img src="img/series/1/banner.webp" alt="">
                    </a>
                    <p>Mafia, Drama</p>
                </div>
            </div>
            <button class="verMais">Ver mais</button>
    `
}