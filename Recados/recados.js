let descricao = document.querySelector("#descricaoUsuario");
let detalhamento = document.querySelector("#detalhamentoUsuario");
let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

function listarRecados() {
    if (descricao.value == "" && detalhamento.value == "")
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
            <h2>${i + 1} | ${usuario.descricao} ${usuario.detalhamento}</h2>
            </div>
            <div>
                <button onclick="editarRecado(${i})" class="button-verde">Editar</button>
                <button onclick="apagarRecado(${i})" class="button-vermelho">Apagar</button>
            </div>
            </div>
        `;

        // const divDescricao = document.createElement("div");
        // divDescricao.innerHTML = `${usuario.descricao.value}`;
        // recado.appendChild(divDescricao);

        // const divDetalhamento = document.createElement("div");
        // divDescricao.innerHTML = `${usuario.detalhamento.value}`;
        // recado.appendChild(divDetalhamento);

        olHTML.appendChild(recado);
        salvarRecadosJSON();
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

    descricao.value = editarRecado.descricao;
    detalhamento.value = editarRecado.detalhamento;

    if (
        descricao.value !== editarRecado.descricao ||
        detalhamento.value !== editarRecado.detalhamento
    ) {
        usuarioLogado.recados[i].push({
            descricao: descricao.value,
            detalhamento: detalhamento.value,
        });
    }

    console.log(usuarioLogado.recados[i]);
}

//fewferfrrfe

// function editar(i) {
//   btnInserir.setAttribute("style", "display:none");
//   btnSalvarEditado.setAttribute("style", "display:block");
//   tarefa.value = userLogado.post[i].tarefa;
//   descricao.value = userLogado.post[i].descricao;

//   tarefa.focus();
//   index = i;
// }

// btnSalvarEditado.addEventListener("click", () => {
//   if (tarefa.value !== "" && descricao.value !== "") {
//     userLogado.post[index] = {
//       tarefa: tarefa.value,
//       descricao: descricao.value,
//     };
//     updateDB();
//     tarefa.value = "";
//     descricao.value = "";
//     btnInserir.setAttribute("style", "display:block");
//     btnSalvarEditado.setAttribute("style", "display:none");
//   }
// });
