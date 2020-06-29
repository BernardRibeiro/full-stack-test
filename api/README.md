# API

## Passos para a execução da API em ambiente local 

### 1. Instale as dependências

```js
npm install 
```

### 2. Configure o endereço da API 

- crie o arquivo .env na raiz do projeto com a seguinte configuração

```env
DEV_DATABASE_URL=postgres://<db_user>:<db_password>@127.0.0.1:5432/<db_name>
PORT=<porta_servidor>
SECRET_KEY=<chave_autenticacao>;
API_KEY=<endereço_punk_api>
NODE_ENV=<ambiente>
```
Exemplo
```js
NODE_ENV=development
DEV_DATABASE_URL=postgres://postgres:admin@127.0.0.1:5432/mytapp
PORT=3333
SECRET_KEY=34f3c11d1aa0b76640a8570b80dd0134;
API_KEY=https://api.punkapi.com/v2
```

### 3. Crie o banco de dados 
```js
npx sequelize-cli db:create
```

### 4. Crie as tabelas do banco de dados 
```js
npx sequelize-cli db:migrate
```

### 5. Inicie o serviço
```js
npm start
```
___

# Métodos para utilização

## Métodos públicos 

### Criação de usuário
```js
POST /user/create

{
	"name": "nome",
	"email": "email@mail.com",
	"password": "senha"
}
```

### Alteração de usuário
```js
PUT /user/:id/update

{
	"id":id,
	"name": "nome alterado",
	"email": "email@mail.com",
	"password": "senha"
}
```

### Autenticação 
```js
POST /authenticate

{
	"email": "email@mail.com",
	"password": "senha"
}
```

Terá como resultado uma propriedade 'token' que deverá ser utilizada em determindados métodos da API que obrigam autenticação


## Métodos privados

### Incluir tipo de autenticação

```js
Authorization: Bearer <token>
``` 
Exemplo

```js 
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNTkzMzY1NDUxLCJleHAiOjE1OTM0NTE4NTF9.IR7GrFa_4Z12_uukIeCTENluTEFY8B_QUke0jGdK4j8
```

### Busca usuário pelo ID 
```js
GET /user/:id
```

### Busca todos usuários  
```js
GET /user
```

### Excluir usuário
```js 
DELETE /user/:id
```

### Busca lista de cervejas 
```js
GET /punk/:page/:perPage
```