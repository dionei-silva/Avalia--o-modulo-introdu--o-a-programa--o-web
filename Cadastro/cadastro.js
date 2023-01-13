let nomeUsuario = document.getElementById("cadastro-usuario");
let senhaUsuario = document.getElementById("cadastro-senha");
let repeteSenhaUsuario = document.getElementById("repete-senha");
function cadastrar() {
    if (senhaUsuario.value !== repeteSenhaUsuario.value) {
        alert("Senhas nao conferem, Tente Novamente");
        return;
    }

    let listaUsuarios = JSON.parse(
        localStorage.getItem("listaUsuarios") || "[]"
    );

    listaUsuarios.push({
        nome: nomeUsuario.value,
        senha: senhaUsuario.value,
        recados: [],
    });

    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));

    /*     buscaEmail = JSON.parse(localStorage.getItem("listaUsuarios"));
    let encontraEmail = buscaEmail.some(
        (valor) => valor.nome == nomeUsuario.value
    );
    console.log("encontraEmail");
    if (encontraEmail)
        alert(
            "Ja existe um usuario cadastrado com esse email. Tente novamente!!"
        );
    window.location.href = "./Login/login.html"; */
}
