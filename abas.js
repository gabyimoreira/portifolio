// Abre a aba certa olhando o final do endereço

// Exemplo: conhecimento.html#matematica → abre a aba Matemática

function abrirAbaPeloEndereco() {

    const id = location.hash;   // pega o "#matematica" do endereço
  
    if (!id) return;            // se não tiver #, fica na primeira aba
   
    const botao = document.querySelector('[data-bs-target="' + id + '"]');
  
    if (botao) {
  
      bootstrap.Tab.getOrCreateInstance(botao).show(); // manda o Bootstrap abrir a aba
  
      window.scrollTo(0, 0);                           // volta para o topo da página
  
    }
  
  }
   
  // 1) Quando a página abre
  
  abrirAbaPeloEndereco();
   
  // 2) Quando você já está na página e escolhe outra área no menu de cima
  
  window.addEventListener('hashchange', abrirAbaPeloEndereco);
   
  // 3) Quando você clica numa aba, o endereço muda junto
  
  //    (assim o menu de cima sempre funciona, e dá para mandar o link de uma aba)
  
  document.querySelectorAll('[data-bs-toggle="pill"]').forEach(function (botao) {
  
    botao.addEventListener('shown.bs.tab', function () {
  
      history.replaceState(null, '', botao.dataset.bsTarget);
  
    });
  
  });
   