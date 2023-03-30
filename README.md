# react-native-brazil-bank-icons

Este é um pacote React-Native para exibir a maioria dos ícones dos bancos brasileiros!

[![NPM](https://img.shields.io/npm/v/react-native-brazil-bank-icons.svg)](https://www.npmjs.com/package/react-native-brazil-bank-icons)

## Instalação

```bash
npm install --save react-native-brazil-bank-icons
ou
yarn add react-native-brazil-bank-icons
```

## Uso

Este é um exemplo de como usar o componente `BankIcon`.

```jsx
import BankIcon from "react-native-brazil-bank-icons";

<BankIcon COMPE="341" size={25} quality={"low"} />
```
Você deve usar o código do [Sistema de Compensação de Cheques e Outros Papéis](https://globalfinanceiro.com.br/codigos-ispb-e-compe-dos-bancos/) para a propriedade COMPE.

## Props

| Prop    |    Type    |                                                  Desciption                                                   |
|---------|:----------:|:-------------------------------------------------------------------------------------------------------------:|
| COMPE |   String   | Define o ícone do banco baseado no [COMPE](https://globalfinanceiro.com.br/codigos-ispb-e-compe-dos-bancos/). |
| size    |  Integer   |                                          Define o tamanho do ícone.                                           |
| style   | Stylesheet |                                Personaliza o estilo do componente `BankIcon`.                                 |                              
| quality |   string   |                                Define a qualidade do ícone.                                

## License

MIT © [Eduardo Lourenco da Silva](https://github.com/DuduLourenco)
