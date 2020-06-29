# SITE

## Passos para a execução da site em ambiente local

### 1. Instale as dependências

```js
npm install 
```

### 2. Configure o endereço da API 

- crie o arquivo .env na raiz do projeto com a seguinte configuração

```js
REACT_APP_BASE_URL_API=<endereço_da_api>
```
Exemplo:
```js
REACT_APP_BASE_URL_API=http://localhost:3333
```

### 3. Inicie o serviço

```js
npm start
```