# dados-atletas

🏅 Projeto de Certificação 2 – Dados dos Atletas
📌 Descrição do Projeto

Este projeto foi desenvolvido como parte do Projeto de Certificação 2 do programa DEVstart.

A proposta consiste em criar uma aplicação utilizando JavaScript orientado a objetos, capaz de:

Receber os dados de um atleta

Calcular sua categoria com base na idade

Calcular seu IMC (Índice de Massa Corporal)

Calcular sua média válida com base nas notas recebidas

Exibir todas as informações no console

O objetivo principal foi aplicar conceitos fundamentais de Programação Orientada a Objetos (POO) em JavaScript, organizando atributos e métodos dentro de uma classe.

🎯 Objetivo da Aplicação

A aplicação simula o sistema de cadastro e avaliação de atletas de uma competição.

A partir dos dados fornecidos, o sistema é capaz de determinar:

A categoria do atleta

Seu índice de massa corporal (IMC)

Sua média válida (descartando a maior e menor nota)

Tudo isso utilizando boas práticas de organização de código.

🧠 Conceitos Aplicados

Durante o desenvolvimento foram utilizados os seguintes conceitos:

Classes em JavaScript

Construtores

Métodos

Encapsulamento

Estruturas condicionais (if / else)

Laços de repetição (for)

Manipulação de arrays

Cálculos matemáticos

🏗 Estrutura da Classe

A classe criada foi chamada:

class Atleta

🔹 Atributos:

nome

idade

peso

altura

notas

Esses atributos são definidos no momento da criação do objeto.

⚙️ Métodos Implementados
📌 Métodos de Cálculo

calculaCategoria()
Determina a categoria do atleta com base na idade.

calculaIMC()
Calcula o IMC utilizando a fórmula:

IMC = peso / (altura × altura)


calculaMediaValida()
Calcula a média válida do atleta descartando:

A maior nota

A menor nota

📌 Métodos de Obtenção (Getters)

obtemNomeAtleta()

obtemIdadeAtleta()

obtemPesoAtleta()

obtemNotasAtleta()

obtemCategoria()

obtemIMC()

obtemMediaValida()

Esses métodos retornam as informações calculadas ou armazenadas no objeto.

📊 Regras Utilizadas
🏅 Categoria por Idade
Idade	Categoria
9 a 11 anos	Infantil
12 e 13 anos	Juvenil
14 e 15 anos	Intermediário
16 a 30 anos	Adulto
Demais idades	Sem categoria
⚖️ Cálculo do IMC
IMC = peso / (altura x altura)

📝 Cálculo da Média Válida

Soma todas as notas.

Identifica a maior nota.

Identifica a menor nota.

Remove ambas do cálculo.

Divide pelo total restante.

🚀 Exemplo de Execução
const atleta = new Atleta(
    "Cesar Abascal",
    30,
    80,
    1.70,
    [10, 9.34, 8.42, 10, 7.88]
);

🖥 Saída no Console
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 9.253333333333332

▶️ Como Executar o Projeto

Clone o repositório:

git clone https://github.com/seuusuario/dados-atletas.git


Acesse a pasta do projeto:

cd dados-atletas


Execute com Node.js:

node dados-atletas.js

👨‍💻 Autor

Arthur Hofelder
Estudante de Análise e Desenvolvimento de Sistemas

📌 Considerações Finais

Este projeto demonstra a aplicação prática de Programação Orientada a Objetos em JavaScript, organização de código e implementação de regras de negócio baseadas em requisitos definidos.

Além de atender às especificações propostas, o projeto reforça a importância da estruturação correta de classes e métodos, preparando a base para sistemas mais complexos no futuro.
