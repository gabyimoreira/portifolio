document.addEventListener("DOMContentLoaded", function () {

  emailjs.init({

    publicKey: "XuSRvB9DR0i5QIDkr"

  });

  const formulario = document.getElementById("form-contato");

  formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!formulario.checkValidity()) {

      formulario.reportValidity();

      return;

    }

    const dados = {

      nome: document.getElementById("nome").value,

      email: document.getElementById("email").value,

      assunto: document.getElementById("assunto").value,

      mensagem: document.getElementById("mensagem").value

    };

    emailjs.send("service_apok6vn", "template_fs3tsxc", {

      name: dados.nome,

      email: dados.email,

      subject: dados.assunto,

      message: dados.mensagem

    })

    .then(function () {

      criarMensagem(dados);

      let aviso = document.getElementById("aviso-contato");

      if (!aviso) {

        aviso = document.createElement("div");
aviso.id = "aviso-contato";

        formulario.appendChild(aviso);

      }

      aviso.className = "alert alert-success mt-3";

      aviso.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";

      formulario.reset();

    })

    .catch(function (erro) {

      console.error("Erro ao enviar:", erro);

      let aviso = document.getElementById("aviso-contato");

      if (!aviso) {

        aviso = document.createElement("div");
aviso.id = "aviso-contato";

        formulario.appendChild(aviso);

      }

      aviso.className = "alert alert-warning mt-3";

      aviso.textContent = "Não foi possível enviar a mensagem. Tente novamente.";

    });

  });

});
 