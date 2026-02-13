class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calcularMedia() {
        let soma = 0;
        let maior = this.notas[0];
        let menor = this.notas[0];

        for (let i = 0; i < this.notas.length; i++) {
            if (this.notas[i] > maior) {
                maior = this.notas[i];
            }
            if (this.notas[i] < menor) {
                menor = this.notas[i];
            }
            soma += this.notas[i];
        }

        let media = (soma - maior - menor) / (this.notas.length - 2);
        return media;
    }

    calcularCat(){
        if(this.idade >= 9 && this.idade <=11){
            return "Infantil";
        }else if(this.idade >= 12 && this.idade <= 13){
            return "Juvenil";
        }else if(this.idade >=14 && this.idade <= 15){
            return "Intermediário";
        }else if(this.idade >= 16 && this.idade <=30){
            return "Adulto";
        } else {
            return "Sem Categoria";
        }
    }

    calcularImc() {
        let imc = this.peso / (this.altura * this.altura);
        return imc;
    }
}


const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome:", atleta.nome);
console.log("Idade:", atleta.idade);
console.log("Peso:", atleta.peso);
console.log("Altura:", atleta.altura);
console.log("Notas Obtidas:", atleta.notas.join(", "));
console.log("Categoria:", atleta.calcularCat())
console.log("IMC:", atleta.calcularImc());
console.log("Média Válida:", atleta.calcularMedia());