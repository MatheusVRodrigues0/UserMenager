# Gerenciador de Usuários

Projeto de estudo para aprimorar habilidades em **TypeScript**, **Arquitetura Hexagonal**, **DDD (Domain-Driven Design)** e **Package by Feature**.  
Trata-se de um sistema de gerenciamento de usuários com **CRUD** e **autenticação via token**, construído de forma modular e escalável.

---

## Objetivo

O principal objetivo deste projeto é:

- **Praticar a Arquitetura Hexagonal** aplicando separação de camadas e dependências invertidas.  
- **Aprofundar o conhecimento em DDD**, criando entidades, casos de uso e repositórios seguindo princípios de domínio.  
- **Organizar o código por feature**, usando **Package by Feature** para melhor modularidade.  
- **Aprimorar o desenvolvimento em TypeScript**, Fastify e Mongoose.  
- **Implementar segurança de senhas** com hash via Bcrypt e autenticação JWT.

> Este projeto é voltado para estudo e aprendizado de boas práticas de arquitetura e desenvolvimento em TypeScript, e não necessariamente pronto para produção.

---

## Funcionalidades

- CRUD de usuários (criar, ler, atualizar e excluir)  
- Login com token JWT  
- Hash de senhas usando Bcrypt  
- Arquitetura modular baseada em Hexagonal + DDD + Package by Feature

---

## Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/)  
- [Fastify](https://www.fastify.io/)  
- [Mongoose](https://mongoosejs.com/)  
- [Bcrypt](https://www.npmjs.com/package/bcrypt)  
- JWT para autenticação

---

## Estrutura do Projeto

usermenager
└───src
    ├───error
    ├───modules
    │   └───user
    │       ├───application
    │       │   ├───dto
    │       │   ├───mappers
    │       │   ├───ports
    │       │   └───useCases
    │       ├───domain
    │       │   └───entity
    │       └───infrastructure
    │           └───adapter
    │               ├───in
    │               │   ├───dto
    │               │   └───handler
    │               │       ├───auth-user
    │               │       ├───create-user
    │               │       ├───delete-user
    │               │       ├───get-all-users
    │               │       ├───get-user-by-id
    │               │       └───update-user
    │               └───out
    │                   ├───dto
    │                   ├───mappers
    │                   └───schema
    └───plugins

---

## Instalação

1. Clone o repositório:

git clone https://github.com/seu-usuario/gerenciador-usuarios.git
cd gerenciador-usuarios

2. Clone o repositório:

npm install

3. Configure suas variáveis de ambiente (.env):

MONGO_URI=seu_mongodb_uri
JWT_SECRET=sua_chave_secreta
PORT=3000

4. Inicie a aplicação:

npx tsc
yarn run start

---

## Rotas

### Usuários

- **POST /users** → Criar usuário
- **GET /users** → Listar usuários
- **GET /users/:id** → Buscar usuário por ID
- **PUT /users/:id** → Atualizar usuário
- **DELETE /users/:id** → Excluir usuário

### Autenticação

- **POST /auth/login** → Login e recebimento de token JWT

> 💡 As rotas protegidas exigem o token JWT no cabeçalho:  
> `Authorization: Bearer <token>`
