<h2 align="center">
  <img src="https://img.shields.io/badge/Next%20Level%20Week-%233-00b8d3?style=for-the-badge" alt="Evento Next Level Week 3" />
  <img src="https://img.shields.io/badge/web%3F-ok-00b8d3?style=for-the-badge" alt="Sistema web Ok" />
  <img src="https://img.shields.io/badge/server%3F-no-00b8d3?style=for-the-badge" alt="Server No" />
  <img src="https://img.shields.io/badge/app mobile%3F-No-00b8d3?style=for-the-badge" alt="Aplicativo mobile No" />
  <img src="https://img.shields.io/github/license/matheusfelipeog/proffy?color=00b8d3&style=for-the-badge" alt="License" />
</h2>

<h1 align="center">
  <img src="https://user-images.githubusercontent.com/2512512/95811934-b5fbf100-0cea-11eb-9167-d3cc49d9ac0e.jpeg" alt="Happy" />
</h1>

## Sobre o projeto

Uma plataforma para facilitar o encontro de orfanatos por pessoas que querem visita-los.

O projeto está em desenvolvimento na [Next Level Week 3](https://nextlevelweek.com/episodios/omnistack/1/edicao/3)

---

## Executando o Happy

### Pré-requisitos
É necessário ter instalado na sua máquina para execução desse projeto:
- NodeJS
- Gerenciador de pacotes (Npm ou Yarn) 
> Em breve mais detalhes...

---

## Clonando o Repositório
```bash

$ git clone https://github.com/williammoreschi/happy.git

# entre na pasta do projeto

$ cd happy

```
### Rodando o Happy web

Entre na pasta

```bash

$ cd web

```
Instale as dependências

```bash

$ yarn

# ou, caso use npm

$ npm install

```
Rode a aplicação

```bash

$ yarn start

# ou, caso use npm

$ npm start

```
Caso você tenha uma conta no [mapbox](https://www.mapbox.com/), pode usar seu token <a href="#-mapbox">Veja Como</a>.
Se você não quiser ter este trabalho, sem problemas, por padrão já tem um mapa configurado para uso.

### Rodando o Happy Servidor.
> Em breve mais detalhes...

### Rodando o Happy Mobile.
> Em breve mais detalhes...

Se tudo deu certo, o app deve estar disponível agora!

---

## Mapbox

Siga as instruções para usar o mapbox no lugar do openstreetmap.

- Em "https://account.mapbox.com/", copie seu token.
- Na raiz do projeto web crie um arquivo chamado ".env"
- Dentro desse arquivo, digite "REACT_APP_MAPBOX_TOKEN =" e cole seu token logo depois.

Se você fez tudo corretamente, estará usando a API do mapbox com seu Token na página do mapa.

---

## Tecnologias
As ferramentas usadas no desenvolvimento do projeto.

#### Web:
- ReactJS
- React Router Dom
- React Icons
- Typescript
- Leaflet
- API do Mapbox

#### Backend:
> Em breve mais detalhes...

#### Mobile:
> Em breve mais detalhes...

## Contribuições

Siga os passos abaixo para contribuir:

1. Faça o *fork* do projeto (<https://github.com/williammoreschi/happy>)

2. Clone o seu *fork* para sua maquína (`git clone https://github.com/user_name/happy.git`)

3. Crie uma *branch* para realizar sua modificação (`git checkout -b feature/name_new_feature`)

4. Adicione suas modificações e faça o *commit* (`git commit -m "Descreva sua modificação"`)

5. *Push* (`git push origin feature/name_new_feature`)

6. Crie um novo *Pull Request*

7. Pronto, agora só aguardar a análise 🚀 

## License

O projeto está sobre a licença [MIT](./LICENSE)