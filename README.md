# 🔐 Login Page
Nesse repositório, você encontrará um **projeto pessoal** que realizei em apenas **3 dias**. Esse projeto é basicamente um site que contém apenas uma **página de login, outra de cadastro e outra caso a pessoa consiga se logar**. O site possuí um banco de dados e o backend foi programado em *Javascript* com *NodeJs.

Tive essa idéia depois de terminar a **[NLW](https://github.com/pedrohenriquebraga/NLW)**, já que nunca havia feito backend de nenhuma aplicação minha, então resolvi me desafiar um pouco fazendo algo que envolvesse interação do usuário com um formulário, onde o backend precisasse fazer validações.

## 🌐 Quais tecnologias foram usadas?
Nesse projeto, usei **Javascript(HTML/CSS)**, **NodeJs(NunJucks/SQLite3/Express)** e também foi usado o **Nodemon** para fazer o *autorefresh* da página, porém é só uma dependência de desenvolvimento. Eu pensei em usar outros módulos, porém, vi que o protejo já estava ficando bem grande, então decidi parar, já que eu tinha criado tudo que era planejado no começo do projeto.

## ❓ O que o site pode fazer?
O site foi protejo para ter 3 telas, a primeira é para **fazer o login do usuário**, a segunda é para **cadastrar uma nova conta** e a terceira é para **página para sucesso no login**. 

Na página de cadastro, foi adicionado algumas verificação especial, para maior segurança do sistema, ao se cadastrar não é possível criar **duas contas** com o mesmo email, isso impede que exista contas duplicadas no banco de dados, tornando a verificação no backend **insegura**. 

Também foi adicionado ao formulário um campo onde o usuário deve confirmar a senha desejada, caso a senha não conhecida com a confirmação é impossível prosseguir. Isso impede que usuários digitem senhas erradas nos formulários **acidentalmente**.

![Página de Login](https://i.ibb.co/xgtLzmP/login-page.png)

![Página de Cadastro](https://i.ibb.co/JcM05yF/create-account.png)

## 💻 Como testar o site?
No momento, não fiz o *deploy* do site, mas você pode testar o site seguindo alguns passos simples:

1. Clone este repositório.
2. Baixe o **[NodeJs](https://nodejs.org)** em sua máquina.
3. Após instalar o NodeJs, abra seu terminal e abra o projeto na pasta raiz do projeto. Em seguida, dê um ```npm install``` para instalar todas as dependências do projeto.
4. Depois vá no arquivo ***db.js*** e execute ele com o *NodeJs* para criar o banco de dados.
5. Por fim, abra o terminal na pasta raiz e digite ```npm start``` e abra o navegador em *localhost:3000*.
