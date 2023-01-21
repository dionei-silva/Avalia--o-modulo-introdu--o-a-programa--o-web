let descricao = document.querySelector("#descricaoUsuario");
let detalhamento = document.querySelector("#detalhamentoUsuario");
let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
let salvar = document.querySelector("#salvar");
if (usuarioLogado === null) {
    alert("Acesso a pagina, somente com login!!");
    window.location.href = "../Login/login.html";
}

function sair() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "../Login/login.html";
}

function listarRecados() {
    if (descricao.value === "" || detalhamento.value === "")
        return alert("Obrigatorio o preenchimento de todos os campos!!");

    usuarioLogado.recados.push({
        descricao: descricao.value,
        detalhamento: detalhamento.value,
    });
    mostrarRecados();

    salvarRecadosJSON();
}

function mostrarRecados() {
    let olHTML = document.querySelector("#listarRecados");
    olHTML.innerHTML = "";
    usuarioLogado.recados.forEach((usuario, i) => {
        let recado = document.createElement("li");

        recado.innerHTML = `
            <div class="div-principal">
            <div>
            <h2>${i + 1}  | Descrição: ${usuario.descricao} </h2>
            <h4>Detalhamento: ${usuario.detalhamento}</h4>
            </div>
            <div class="div-btn">
                <button id = 'btnInserir' onclick="editarRecado(${i})" class="button-verde">Editar</button>
                <button onclick="apagarRecado(${i})" class="button-vermelho">Apagar</button>
            </div>
            </div>
        `;

        olHTML.appendChild(recado);
        salvarRecadosJSON();

        descricao.value = "";
        detalhamento.value = "";
    });
}

function salvarRecadosJSON() {
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
}

setTimeout(() => {
    mostrarRecados();
});

function id() {
    usuarioLogado.recados.forEach((usuario, i) => {
        console.log(usuario.id);
        if (usuario.id !== i + 1) {
            console.log(usuario.id);
        }
    });
}

function apagarRecado(i) {
    usuarioLogado.recados.splice(i, 1);
    mostrarRecados();
}

function editarRecado(i) {
    let editarRecado = usuarioLogado.recados[i];

    salvar.setAttribute("onclick", `salvarEdicao(${i})`);
    salvar.innerHTML = "Editar";

    descricao.value = editarRecado.descricao;
    detalhamento.value = editarRecado.detalhamento;

    console.log(usuarioLogado.recados[i]);
}

function salvarEdicao(i) {
    if (descricao.value !== "" || detalhamento.value !== "") {
        usuarioLogado.recados[i].descricao = descricao.value;
        usuarioLogado.recados[i].detalhamento = detalhamento.value;
    } else {
        return alert("Preencha os campos necessarios!!");
    }
    salvar.setAttribute("onclick", `listarRecados()`);
    salvar.innerHTML = "Salvar";

    descricao.value = "";
    detalhamento.value = "";
    mostrarRecados();
}
