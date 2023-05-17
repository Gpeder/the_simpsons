const botaoTrailer = document.querySelector(".botao-trailer")
const modal = document.querySelector(".modal")
const x = document.querySelector(".fechar-modal")
const video = document.getElementById("video")
const link = video.src;


botaoTrailer.addEventListener ('click', () => {
    modal.classList.add('aberto');
    video.setAttribute("src", link);
    
});


x.addEventListener ('click', () => {
    modal.classList.remove('aberto')
    video.setAttribute("src", "");
});
