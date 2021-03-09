<div align="center">
  <br />
  <a href="https://nps-bmv1.onrender.com/"><img src=".github/nps-banner.svg" width="546" alt="Net Promoter Score" /></a>
  <br />
  <p>
    <img src="https://img.shields.io/badge/made%20by-Thales%20Macena-2D325E?labelColor=F0DB4F&style=for-the-badge&logo=visual-studio-code&logoColor=2D325E" alt="Made by Thales Macena">
    <img alt="Top Language" src="https://img.shields.io/github/languages/top/thalesmacena/nps?color=2D325E&labelColor=F0DB4F&style=for-the-badge&logo=typescript&logoColor=2D325E">
    <a href="https://github.com/thalesmacena/nps/commits/main">
      <img alt="Last Commits" src="https://img.shields.io/github/last-commit/thalesmacena/nps?color=2D325E&labelColor=F0DB4F&style=for-the-badge&logo=github&logoColor=2D325E">
    </a>
  </p>
</div>

## 🗂 Tabela de Conteúdo
- [🗂 Tabela de Conteúdo](#-tabela-de-conteúdo)
- [📑 About](#-about)
- [💻 Technologies](#-technologies)
- [✨ Installation](#-installation)
- [⚙️ Config](#️-config)
- [🔥 Running](#-running)
- [🤔 Test](#-test)
- [💡 API Specification](#-api-specification)
  
  
## 📑 About
Nps is a [Net Promoter Score](https://en.wikipedia.org/wiki/Net_Promoter) api. That measures the willingness of customers to recommend a company's products or services to others. It is used as a proxy for gauging the customer's overall satisfaction with a company's product or service and the customer's loyalty to the brand. **This application was made during the Next Level Week 4 presented by [Rocketseat](https://github.com/Rocketseat)**

You can check the api specification by [clicking her](https://nps-bmv1.onrender.com/)

The administrator can use requests for the api to create users and surveys. In addition they can create a pivo table to relate a user and a survey and thus send an email with the survey for this user to respond to. It is possible to retrieve the net promoter scores for each of the surveys.

This is the template of the email sent to the user:

<div align="center">
<img src=".github/email-template.png" alt="email template" width="80%">
</div>

## 💻 Technologies

<a href="https://yarnpkg.com/"><img src="https://img.shields.io/badge/-Yarn-2D325E?labelColor=F0DB4F&style=for-the-badge&logo=yarn&logoColor=2D325E" alt="Yarn"></a>

<a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/-Node.JS-2D325E?labelColor=F0DB4F&style=for-the-badge&logo=node.js&logoColor=2D325E" alt="Node.js"></a>

<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/-typescript-2D325E?labelColor=F0DB4F&style=for-the-badge&logo=typescript&logoColor=2D325E" alt="Typescript"></a>

<a href="https://eslint.org/"><img src="https://img.shields.io/badge/-ESLint-2D325E?labelColor=F0DB4F&style=for-the-badge&logo=eslint&logoColor=2D325E" alt="ESLint"></a>

<a href="https://expressjs.com/"><img src="https://img.shields.io/badge/-Express-2D325E?labelColor=F0DB4F&style=for-the-badge&logo=express&logoColor=2D325E" alt="Express"></a>

<a href="https://typeorm.io/"><img src="https://img.shields.io/badge/-TypeORM-2D325E?labelColor=F0DB4F&style=for-the-badge&logo=typescript&logoColor=2D325E" alt="TypeORM"></a>

<a href="https://jestjs.io/"><img src="https://img.shields.io/badge/-Jest-2D325E?labelColor=F0DB4F&style=for-the-badge&logo=jest&logoColor=2D325E" alt="Jest"></a>

<a href="https://www.sqlite.org/index.html"><img src="https://img.shields.io/badge/-SQLite-2D325E?labelColor=F0DB4F&style=for-the-badge&logo=sqlite&logoColor=2D325E" alt="SQLite"></a>

<a href="https://nodemailer.com/about/"><img src="https://img.shields.io/badge/-Nodemailer-2D325E?labelColor=F0DB4F&style=for-the-badge&logo=javascript&logoColor=2D325E" alt="Nodemailer"></a>

<a href="https://handlebarsjs.com/"><img src="https://img.shields.io/badge/-Handlebars-2D325E?labelColor=F0DB4F&style=for-the-badge&logo=typescript&logoColor=2D325E" alt="Handlebars"></a>


## ✨ Installation
Open a terminal and run the following commands:

```PowerShell
# To copy this repository
git clone https://github.com/thalesmacena/nps.git

# To move to project directory
cd nps

# To install the dependencies
yarn
```

## ⚙️ Config
You need to configure some environment variables, so rename the `.env.example` file to `.env`. Then you need to change the values for your database variables, I recommend using a docker container with postgres and the following environment variables:

```.env
# Database

DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USER=
DB_PASS=
DB_NAME=
```

renaming DB_USER, DB_PASS and DB_NAME respectively with the postgres username and password and the name of the database created. 

## 🔥 Running
First you need to create the tables in the database, by running the following command:
```Powershell
yarn typeorm migration:run
```

You can run the application in development mode with the command:
```Powershell
# To run
yarn dev
```

The application will run on [localhost:3000](http://localhost:3333/)

## 🤔 Test
You can also tests the aplication by run:
```PowerShell
yarn test
```

## 💡 API Specification
You can acess the api specification (OAS / Swagger) by [clicking her](https://nps-bmv1.onrender.com/) or render the OAS locally using the command:

```Powershell
yarn api
```

The api will render on [localhost:8080](http://localhost:8080/)