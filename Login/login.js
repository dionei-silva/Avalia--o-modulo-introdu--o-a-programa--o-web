let usuario = document.getElementById("email");
let senha = document.getElementById("senha");
function encontrarContato() {
    /*     let encontrarContato = encontraUsuario.some(
        (valor) => valor.nome === nomeUsuario
    ); */
    let encontraUsuario = [];
    encontraUsuario = JSON.parse(localStorage.getItem("listaUsuarios"));
    /* console.log(encontraUsuario[0].nome); */
    let encontrarNome = encontraUsuario.some(
        (valor) => valor.nome == usuario.value && valor.senha == senha.value
    );
    /* console.log(encontrarNome); */
    if (encontrarNome) window.location.href = "../Recados/recados.html";
    else alert("Email e senha Invalidos. Tente novamente!!");
}
