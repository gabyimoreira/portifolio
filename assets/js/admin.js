document.addEventListener("DOMContentLoaded", function () {

  const PIN_CORRETO = "canes2026";

  const login = document.getElementById("login-admin");

  const painel = document.getElementById("painel-admin");

  const campoPin = document.getElementById("pin-admin");

  const erroPin = document.getElementById("erro-pin");

  const lista = document.getElementById("lista-mensagens");

  const modalElemento = document.getElementById("modalMensagem");

  const modal = new bootstrap.Modal(modalElemento);

  // ENTRAR NO PAINEL

  document.getElementById("btn-entrar").addEventListener("click", function () {

    if (campoPin.value === PIN_CORRETO) {

      login.style.display = "none";

      painel.style.display = "block";

      mostrarMensagens();

    } else {

      erroPin.textContent = "PIN incorreto. Tente novamente.";

    }

  });

  // MOSTRAR MENSAGENS

  function mostrarMensagens() {

    lista.innerHTML = "";

    const mensagens = lerMensagens();

    if (mensagens.length === 0) {

      lista.innerHTML = '<tr><td colspan="5">Nenhuma mensagem encontrada.</td></tr>';

      return;

    }

    mensagens.forEach(function (mensagem) {

      const linha = document.createElement("tr");

      [mensagem.nome, mensagem.email, mensagem.assunto, mensagem.mensagem]

        .forEach(function (valor) {

          const celula = document.createElement("td");

          celula.textContent = valor || "";

          linha.appendChild(celula);

        });

      const acoes = document.createElement("td");

      const editar = document.createElement("button");

      editar.className = "btn btn-warning btn-sm me-2";

      editar.textContent = "Editar";

      editar.addEventListener("click", function () {

        abrirEdicao(mensagem);

      });

      const excluir = document.createElement("button");

      excluir.className = "btn btn-danger btn-sm";

      excluir.textContent = "Excluir";

      excluir.addEventListener("click", function () {

        if (confirm("Deseja realmente excluir esta mensagem?")) {

          excluirMensagem(mensagem.id);

          mostrarMensagens();

        }

      });

      acoes.appendChild(editar);

      acoes.appendChild(excluir);

      linha.appendChild(acoes);

      lista.appendChild(linha);

    });

  }

  // ABRIR NOVA MENSAGEM

  document.getElementById("btn-nova").addEventListener("click", function () {

    document.getElementById("titulo-modal").textContent = "Nova mensagem";

    document.getElementById("mensagem-id").value = "";

    limparCampos();

    modal.show();

  });

  // ABRIR EDIÇÃO

  function abrirEdicao(mensagem) {

    document.getElementById("titulo-modal").textContent = "Editar mensagem";

    document.getElementById("mensagem-id").value = mensagem.id;

    document.getElementById("campo-nome").value = mensagem.nome || "";

    document.getElementById("campo-email").value = mensagem.email || "";

    document.getElementById("campo-assunto").value = mensagem.assunto || "";

    document.getElementById("campo-mensagem").value = mensagem.mensagem || "";

    modal.show();

  }

  // LIMPAR CAMPOS

  function limparCampos() {

    document.getElementById("campo-nome").value = "";

    document.getElementById("campo-email").value = "";

    document.getElementById("campo-assunto").value = "";

    document.getElementById("campo-mensagem").value = "";

  }

  // SALVAR OU ATUALIZAR

  document.getElementById("btn-salvar").addEventListener("click", function () {

    const id = document.getElementById("mensagem-id").value;

    const dados = {

      nome: document.getElementById("campo-nome").value.trim(),

      email: document.getElementById("campo-email").value.trim(),

      assunto: document.getElementById("campo-assunto").value.trim(),

      mensagem: document.getElementById("campo-mensagem").value.trim()

    };

    if (!dados.nome || !dados.email || !dados.assunto || !dados.mensagem) {

      alert("Preencha todos os campos.");

      return;

    }

    if (id) {

      atualizarMensagem(id, dados);

    } else {

      criarMensagem(dados);

    }

    modal.hide();

    mostrarMensagens();

  });

});
 