# Portfólio Web Dinâmico – Isabelly Bezerra
Atividade final do 4º bimestre – Processo seletivo Canes Solution (Desenvolvedor Frontend)

## Links
- Site no ar: https://isabellybzs.github.io/portfolio
- Repositório: https://github.com/isabellybzs/portfolio

## Tecnologias usadas
HTML5, CSS3, JavaScript puro, Bootstrap 5.3, LocalStorage e EmailJS.
Nenhum construtor de sites foi usado. Todo o código foi escrito do zero.

## Estrutura de pastas
(cole aqui a árvore de pastas da Missão 2)

## Por que escolhi o EmailJS (Etapa 2.2)
Escolhi o EmailJS porque ele envia e-mails direto pelo JavaScript do navegador,
sem precisar de servidor ou banco de dados, o que respeita a regra da atividade.
Ele é gratuito para poucos envios, tem modelos de e-mail fáceis de montar
e só exige uma chave pública no código (a chave privada não fica exposta).
Outras opções que considerei: Formspree e webhooks do Make/Zapier.
(ESCREVA COM SUAS PALAVRAS)

## Como acessar a área administrativa oculta (CRUD)
1. Em qualquer página, clique 3 vezes rapidamente no símbolo © do rodapé
   (ou acesse diretamente /admin.html).
2. Digite o PIN: canes2026
3. No painel você pode:
   - Criar: botão "+ Nova mensagem"
   - Ler: a tabela mostra todas as mensagens
   - Atualizar: botão "Editar"
   - Deletar: botão "Excluir"

Obs.: o PIN é só uma barreira de demonstração. Como fica no JavaScript,
não é uma segurança de verdade.

## Armazenamento
As mensagens ficam salvas em JSON no LocalStorage, na chave `canes_mensagens`.
No primeiro acesso, se a chave estiver vazia, 20 mensagens de teste são criadas automaticamente.
Para recriar os dados de teste: F12 → Application → Local Storage →
apagar `canes_mensagens` → recarregar a página.

## Como rodar no computador
1. Copiar a pasta para C:\xampp\htdocs\portfolio
2. Abrir o XAMPP Control Panel e dar Start no Apache
3. Acessar http://localhost/portfolio