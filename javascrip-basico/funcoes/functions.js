/* function declaration, function statement ou
delclaracao de funcao*/
/* uma funcao serve para agrupamento e reaproveitamento de
codigo, deve ter um nome autoexplicativo para dar significado
a um bloco de codigo
uma funcao é um tipo de dado estrutural */
function createPhrases(){
  console.log('bom dia')
  console.log('toma um cafe')
  console.log('e bora vencer!')
}
/*para chamar(call), executar(execute), rodar(run),
ou invocar(invoke) uma funcao :*/
createPhrases()
/* uma funcao pode ser invocada quantas vezes forem necessarias*/

/* FUNÇÕES PODEM SER DECLARADAS DENTRO DE VARIÁVEIS
uma função declarada sem nome é chamada função anônima
*/

const sum = function(){

}


/*********************************************
**********ARGUMENTOS E PARAMETROS*************
**********************************************/

/* parâmetros(parameters) da função
no exemplo abaixo number1 e number2 são os
parametros da função
*/

const sum = function(number1,number2){
  console.log(number1 + number2)
}
sum(2, 3) 
/* 2 e 3 são os argumentos da função, ao invoca-la
number1=2 e number2=3
*/
/* toda funcao deve ter um retorno
deve-se ter cuidado com escopos das
variaveis, variaveis podem ser criadas sem
palavras reservadas let, const ou var, nunca
declarar variaveis sem let ou const, evitar uso
de var.
*/
const sum = function(number1,number2){// entre() parametros da funçao
  let total = (number1 + number2)
  return total
}   

const calculo = sum(34+25) // argumentos da funcao




/*
um pouco mais sobre escopo de funcao
NO CODIGO ABAIXO PRIMEIRO FOI CRIADA UMA VARIAVEL SUBJECT SEM VALOR DECLARADO
LOGO DEPOIS E DECLARADA UMA FUNCAO CreatThink  QUE RECEBE SUBJECT COMO PARAMETRO
DENTRO DO ESCOPO DA FUNCAO SUBJECT RECEBE LETS CODE COMO VALOR, LOGO O VALOR ARMAZENADO
EM SUBJECT PASSA A SER LETS CODE, AO CHAMAR A FUNCAO COM SUBJECT COMO ARGUMENTO ELE PASSA
A TER VALOR LETS CODE
*/

let subject
function CreatThink(subject) {
  subject = 'lets code'
  return subject
}
console.log(CreatThink(subject))


/* 
NO CODIGO ABAIXO DENTRO DO ESCOPO DA FUNCAO SUBJECT TEM VALOR 'LETS CODE'
JA NO ESCOPO GLOBAL TEM VALOR 'STUDY', SAO DUAS VARIAVEIS DIFERENTES EM ESCOPOS
DIFERENTES
*/

let subject = 'study'
function CreatThink(subject) {
  subject = 'lets code'
  return subject
}
console.log(subject)
console.log(CreatThink(subject))


/*
NO CASO ABAIXO O VALOR 'STUDY' SERA SUBSTITUIDO POR 'LETS CODE'
POIS A FUNCAO CreatThink NAO RECEBE PARAMETROS
*/
let subject = 'study'
function CreatThink() {
  subject = 'lets code'
  return subject
}
console.log(subject)
console.log(CreatThink(subject))

/*
function hoisting
  quando uma funcao e chamada antes de ser criada ele e elevada(hoisting)
  o JS percorre o codigo ate encontrar a funcao, a executa, e volta ao ponto
  onde ela e chamada e mostra seu retorno
*/
sayMyName ()
function sayMyName () {
  console.log('Bruno')
}
/*
expressoes de funcao, ou funcoes declaradas usando
palavras reservadas nao sofrem o hoisting
*/

sayMyName()
const sayMyName = function() {
  console.log('Bruno')
}
/*
independente de qual for a palavra reservada
*/ 
sayMyName()
var sayMyName = function() {
  console.log('Bruno')
}
/*
todos esses codigos irao retornar um erro
*/
sayMyName()
let sayMyName = function() {
  console.log('Bruno')
}
/*
MESMO DECLARANDO O NOME DA FUNCAO
*/ 
sayMyName()
const sayMyName = function sayMyName() {
  console.log('Bruno')
}


/*
*********************************************
*************ARROW FUNCTIONS*****************
*FORMA MAIS MODERNA DE ESCREVER FUNÇOES
*GERALMENTE COMECA COM CONST
*TORNA O CODIGO MENOR
**********************************************
**********************************************
*/
// troca-se essa forma
const sayMyName = function (name) {
  console.log(name)
}
sayMyName('Bruno')

// por essa
const sayMyName =(name) => {
  console.log(name)
}
sayMyName('Bruno')

/**************************************************************************
**************************************************************************
***********************CALLBACK FUNCTIONS*********************************
  QUALQUER TIPO DE DADO PODE SER PASSADO COMO PARAMETRO PARA UMA FUNCAO,
  INCLUSIVE OUTRA FUNÇAO
  QUANDO UMA FUNCAO É PASSADA COMO PARAMETRO PARA OUTRA FUNÇAO ELA É 
  CHAMADA DE CALLBACK FUNCTION
***************************************************************************
***************************************************************************
***************************************************************************
*/

const sayMyName = function (name) {
  console.log('ANTES DA CALLBACK')//TRECHO DE CODIGO ANTES DA CHAMADA DA FUNÇAO NAME
  name()//A FUNCAO NAME E CHAMDA DENTRO DA FUNCAO SAYMYNAME
  console.log('depois da callback')
}
sayMyName(
  /* 
      function name () {
          console.log('ESTOU EM UMA CALL BACK')
      }

      PODE SER COMO ARROW FUNCTION
  */
  () => {
      console.log('ESTOU EM UMA CALL BACK')
  }
)

/********************************************************************
********************************************************************
***********CONSTRUCTOR FUNCTIONS OU FUNÇÕES CONSTRUTORAS************
  *CRIA UM NOVO OBJETO
  *EXPRESSAO NEW
  *THIS KEYWORD
*********************************************************************
*********************************************************************   
*/

/*
  ao declarar uma function Person e logo abaixo a expressao 'new' seguida 
  da funcao 'Person' a expressao retorna para a funcao um novo objeto 'bruno'
*/

function Person (){}
const bruno = new Person ()


/*
  Continuando...
  dentro da funcao o 'this' sempre fará referência ao objeto criado 'bruno',
  e o objeto sempre será referenciado pelo 'this'
*/
function Person (){
  this
}
const bruno = new Person ()



/*
  a funcao 'Person' recebe como parâmetro 'name' e o
  objeto criado 'bruno' tem uma propriedade 'name' e
  a propriedade 'name' recebe como valor "Bruno"
*/
function Person (name){
  this.name = name
}
const bruno = new Person ("Bruno")





/*
  Com isso é possivel criar quantos objetos forem necessarios que 
  recebem as mesmas propriedades, no exemplo abaixo todos os objetos
  recebem a propriedade 'name', que recebe os valores especificos de 
  cada objeto
*/
function Person(name) {
 this.name = name
}
const bruno = new Person("Bruno")
const dita = new Person("Dita")
const nicole = new Person ("Nicole")



/*
  Inclusive os objetos podem receber funcoes 
*/
const Person (name) {
  this.name = name
  this.speak = function() {
      return "falando"
  } 
}
const bruno = new Person("Bruno")
const dita = new Person("Dita")
const nicole = new Person ("Nicole")
console.log(bruno.speak())
console.log(dita.speak())
console.log(nicole.speak())