/*
UM OBJETO PODE SER DEFINIDO COMO UM CONJUNTO DE VARIÁVEIS E FUNÇÕES

QUANDO É UMA FUNÇÃO É UM METODO 

QUANDO É UMA VARIÁVEL É GERALMENTE CHAMADA DE PROPRIEDADE
*/

const eu = {
  nome: 'Bruno',    //metodos
  idade: 27,
  profissao: 'Desenvolvedor',

  dados(){
    return `${this.nome} tem ${this.idade} e sonha em ser ${this.profissao}`
  },
}
console.log(eu.dados())

// acessando informaçoes do objeto
eu.nome;
eu.idade;
eu.profissao;

/********/
let quadrado = {
  lado:4, // propriedade
 /* area: function(lado){ // metodo
    return lado * lado
  },
    funcao refatorada                  */
  area(lado){ // metodo
    return lado * lado
  },

 /* perimetro: function(lado){ // metodo
    return this.lados * lado
  }
          funcao refatorada              */
  // o this é o mesmo que escrever quadrado.lados 
  perimetro(lado){ 
    return this.lados * lado
  }
}

/* EM JAVASCRIPT TUDO É OBJETO */