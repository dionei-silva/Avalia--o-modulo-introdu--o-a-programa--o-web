let inputRecado = document.querySelector("#input-recados");
let inputCadastrar = document.querySelector("#input-cadastrar");
// fazer um para cada
inputRecado.onclick = (e) => {
    e.preventDefault();
    window.location.href = "../Recados/recados.html";
};
/* function encontrarContato() {
    let encontrarContato = listaUsuarios.findIndex(
        (valor) => valor.nome === nomeUsuario
    );
} */
