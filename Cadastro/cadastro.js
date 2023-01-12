let nomeUsuario = document.getElementById("cadastro-usuario");
let senhaUsuario = document.getElementById("cadastro-senha");
let repeteSenhaUsuario = document.getElementById("repete-senha");
function cadastrar() {
    let listaUsuarios = JSON.parse(
        localStorage.getItem("listaUsuarios") || "[]"
    );
    listaUsuarios.push({
        nome: nomeUsuario.value,
        senha: senhaUsuario.value,
    });
    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
}
