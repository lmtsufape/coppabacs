<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
</head>
<body>

<h1>Projeto do Sistema de Gestão de Bancos de Sementes da  Coppabacs - Sigebacs 🌿</h1>

<h2>Visão Geral</h2>

<p>O objetivo principal do projeto é o de enriquecer o conhecimento dos discentes envolvidos no projeto, 
  além de contribuir com o processo de gestão da Cooperativa de Pequenos Produtores Agrícolas dos Bancos Comunitários de Sementes (COPPABACS).</p>

<p>O projeto visa facilitar a gestão da cooperativa em questão dentro do cenário da agricultura familiar, enriquecendo a cultura das sementes crioulas.</p>

<h2>Arquitetura de Software</h2>

<h3>Cliente (Client)</h3>

<ul>
    <li>Tecnologias utilizadas: HTML, SCSS, JavaScript e React.</li>
</ul>

<h3>Servidor (Server)</h3>

<ul>
    <li>Tecnologia utilizada: SpringBoot, JAVA.</li>
</ul>

<h3>Camada de Dados (Data Layer)</h3>

<ul>
    <li>Banco de Dados: PostgreSQL.</li>
</ul>

<h3>Camada de Infraestrutura (Infrastructure Layer)</h3>

<ul>
    <li>Servidor de hospedagem: Servidor da UFAPE.</li>
</ul>

<h2>Rodando o Projeto</h2>

### Acesse o Front-End 💻
```bash
# Clone o repositório
$ git clone <https://github.com/lmtsufape/coppabacs.git>

# Vá para o diretório front-end do projeto
$ cd frontend

# Instale as dependências
$ npm install

# Inicie o projeto
$ npm run dev

$ http://localhost:3000 🎉
```

### Acesse o Back-End 🛠
```bash
# Clone o repositório (ignore caso tenha clonado na etapa acima)
$ git clone <https://github.com/lmtsufape/coppabacs.git>

# Utilizando o PostgreSQL ou similar, crie um banco com o nome
$ coppabacs

# Vá para o diretório do back-end do projeto
$ cd backend/src/main/resources

# Dentro do arquivo application.properties, insira o nome de usuário e a senha do PostgreSQL
$ spring.datasource.username=***nome de usuário***
$ spring.datasource.password=***senha do usuário***

# Inicie o projeto
$ run java 🎉
```

<h2>Documentação do Projeto</h2>
<ul>
  <li>A documentação necessária encontra-se dentro da pasta <strong>Documentos</strong> na raiz do projeto.</li>
  <li>A documentação completa pode ser solicitada neste <a href="https://drive.google.com/drive/u/0/folders/1O1hZ_vMKLN4vw_b9eUzvYjqYcMXWDA1V">link</a>, porém depende de autorização do LMTS. </li>
</ul>

<h2>Organização Responsável</h2>

<p>Este projeto é conduzido pelo <strong>Laboratório Multidisciplinar de Tecnologias Sociais (LMTS)</strong> da Universidade Federal do 
  Agreste de Pernambuco (UFAPE). O LMTS é uma organização dedicada à pesquisa e desenvolvimento de soluções tecnológicas que contribuam para o 
  bem-estar da sociedade e para o avanço da educação.</p>

<hr>

<p>Este repositório contém o código-fonte e a documentação relacionada ao projeto do Sistema de Gestão de Bancos de Sementes da  Coppabacs - Sigebacs. 
  Para contribuir, siga as diretrizes do projeto e as boas práticas de desenvolvimento estabelecidas pela equipe.</p>
<p>Desejamos um bom desenvolvimento!</p>
<p>Atenciosamente, equipe do SIGEBACS. 🎓 </p>

</body>
</html>
