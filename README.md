<H1>🏅 Sistema de Avaliação de Atletas</H1>








📌 Sobre o Projeto

Este projeto foi desenvolvido como parte do Projeto de Certificação 2 – DEVstart.

A aplicação simula o sistema de cadastro e avaliação de atletas em uma competição, utilizando Programação Orientada a Objetos (POO) em JavaScript.

A partir dos dados fornecidos, o sistema:

📂 Armazena as informações do atleta

🏷 Determina sua categoria com base na idade

⚖ Calcula o IMC (Índice de Massa Corporal)

📊 Calcula a média válida descartando a maior e menor nota

🖥 Exibe todas as informações formatadas no console

🎯 Objetivo

Aplicar conceitos fundamentais de desenvolvimento em JavaScript, com foco em:

Organização de código

Estruturação com classes

Métodos e encapsulamento

Manipulação de arrays

Lógica condicional

Cálculos matemáticos

Este projeto reforça a base necessária para construção de sistemas mais complexos.

🧠 Conceitos Aplicados

✔ Classes (ES6)

✔ Construtor

✔ Métodos de instância

✔ Encapsulamento

✔ Estruturas condicionais (if / else)

✔ Laços de repetição (for)

✔ Manipulação de arrays

✔ Regras de negócio

🏗 Estrutura da Classe
class Atleta

🔹 Atributos
Atributo	Tipo	Descrição

nome	   string	Nome do atleta

idade	   number	Idade do atleta

peso	   number	Peso em kg

altura	   number	Altura em metros

notas	   array	Lista de notas recebidas


⚙️ Funcionalidades
🏷 1️⃣ Cálculo da Categoria
A categoria é definida com base na idade:

Faixa Etária	Categoria

9 a 11 anos	    Infantil

12 a 13 anos	Juvenil

14 a 15 anos	Intermediário

16 a 30 anos	Adulto

Fora dessas faixas	Sem categoria

⚖ 2️⃣ Cálculo do IMC
Fórmula aplicada:

IMC = peso / (altura × altura)

📊 3️⃣ Cálculo da Média Válida
Regras:

Soma todas as notas

Identifica a maior nota

Identifica a menor nota

Remove ambas do cálculo

Divide pelo total restante

Isso simula o modelo de avaliação utilizado em competições esportivas.

🚀 Exemplo de Execução
const atleta = new Atleta(
    "Cesar Abascal",
    30,
    80,
    1.70,
    [10, 9.34, 8.42, 10, 7.88]
);

🖥 Saída Esperada
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 9.253333333333332

▶ Como Executar o Projeto
1️⃣ Clone o repositório
git clone https://github.com/seuusuario/sistema-atletas.git

2️⃣ Acesse a pasta
cd sistema-atletas

📁 Estrutura do Projeto
📦 sistema-atletas
 ┣ 📜 dados-atletas.js
 ┗ 📜 README.md

🧪 Possíveis Melhorias Futuras

Adicionar interface web
Criar validação de dados
Transformar em API
Implementar testes automatizados
Modularizar o código

👨‍💻 Autor
Arthur Hofelder
Estudante de Análise e Desenvolvimento de Sistemas

📌 Conclusão
Este projeto tem como objetivo demonstrar meu domínio dos fundamentos de JavaScript e de Programação Orientada a Objetos, além da minha capacidade de interpretar requisitos e transformá-los em código funcional, organizado e alinhado às boas práticas de desenvolvimento.
