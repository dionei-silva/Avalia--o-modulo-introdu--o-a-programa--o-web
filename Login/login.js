let usuario = document.getElementById("email");
let senha = document.getElementById("senha");
function encontrarContato() {
    let encontraUsuario = [];

    encontraUsuario = JSON.parse(localStorage.getItem("listaUsuarios"));

    let encontrarNome = encontraUsuario.some(
        (valor) => valor.nome == usuario.value && valor.senha == senha.value
    );

    if (encontrarNome) window.location.href = "../Recados/recados.html";
    else alert("Email e senha Invalidos. Tente novamente!!");

    let usuarioLogado = {
        email: usuario.value,
        recados: [],
    };

    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
}
