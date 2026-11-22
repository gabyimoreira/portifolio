// Nome da "gaveta"
const CHAVE = 'canes_mensagens';

// LER: pega o texto da gaveta e transforma em lista
function lerMensagens() {
  return JSON.parse(localStorage.getItem(CHAVE)) || [];
}

// SALVAR: transforma a lista em texto JSON e guarda na gaveta
function salvarMensagens(lista) {
  localStorage.setItem(CHAVE, JSON.stringify(lista));
}

// Cria um código único para cada mensagem (tipo um RG)
function gerarId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

// Se a gaveta estiver vazia, coloca 20 mensagens de teste
function semearDadosIniciais() {
  const atual = localStorage.getItem(CHAVE);
  if (atual !== null && JSON.parse(atual).length > 0) return; // já tem coisa, então não faz nada

  const nomes = ['Ana Souza','Bruno Lima','Carla Dias','Diego Rocha','Eduarda Melo',
    'Felipe Alves','Gabriela Reis','Henrique Costa','Isabela Nunes','João Pedro',
    'Karina Lopes','Lucas Martins','Mariana Silva','Nicolas Prado','Olivia Castro',
    'Paulo Ribeiro','Queila Fernandes','Rafael Gomes','Sabrina Teixeira','Tiago Barros'];
  const assuntos = ['Proposta de projeto','Dúvida técnica','Parceria','Feedback','Vaga de emprego'];

  const lista = nomes.map((nome, i) => ({
    id: 'seed-' + (i + 1),
    nome: nome,
    email: nome.toLowerCase().split(' ')[0] + '@teste.com',
    assunto: assuntos[i % assuntos.length],
    mensagem: 'Mensagem de teste nº ' + (i + 1) + ' para validação do CRUD.',
    data: new Date(Date.now() - i * 86400000).toISOString()
  }));

  salvarMensagens(lista);
}

// C = CRIAR uma mensagem nova
function criarMensagem(dados) {
  const lista = lerMensagens();
  const nova = { id: gerarId(), ...dados, data: new Date().toISOString() };
  lista.unshift(nova); // coloca no começo da lista
  salvarMensagens(lista);
  return nova;
}

// U = ATUALIZAR (editar) uma mensagem
function atualizarMensagem(id, novosDados) {
  const lista = lerMensagens().map(m => m.id === id ? { ...m, ...novosDados } : m);
  salvarMensagens(lista);
}

// D = DELETAR uma mensagem
function excluirMensagem(id) {
  salvarMensagens(lerMensagens().filter(m => m.id !== id));
}

// Roda toda vez que qualquer página abre
semearDadosIniciais();

// PORTA SECRETA: 3 cliques no © do rodapé abrem o painel admin
let cliques = 0;
const portaSecreta = document.getElementById('acesso-admin');
if (portaSecreta) {
  portaSecreta.addEventListener('click', () => {
    cliques++;
    if (cliques === 3) location.href = 'admin.html';
    setTimeout(() => cliques = 0, 1500); // zera se demorar mais de 1,5 s
  });
}