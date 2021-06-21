/*
* toda linha de codigo js que resolve um problema é uma expressao
? operadores binarios = tem dois operandos ex 2 + 2, o + e binario
? pois precisa de dois operandos para funcionar
* operadores unarios = somente um operando, ex ++(incremento) e
* --(decremento)
! operador ternario tem tres operandos, mas nao entendi como funciona
! por agora, vou esperar avancar nos estudos
*/

/* 
! expressao new
!cria um novo objeto
! left-hand-side expression => esta sempre a esquerda do objeto criado, ex:
*/
let name = new String('jao') 
let Date = new Date(2021-05-03)

/*
!Operadores unarios
?typeof => verifica o tipo de uma objeto
?delete => deleta uma propriedade de um objeto
*/

const person {
    name:'bruno',
    age:27,
    job:'public agent',
    skills:'basic html and css, studing javascript'
}
delete person.skills // ?deleta a propriedade skills do objeto person 



/*
! OPERADORES ARITMETICOS
*/
//? MULTIPLICAÇÃO *
    2 * 5

//? DIVISAO /
    10 / 2

//? SOMA +
    5 + 5

//? SUBTRAÇÃO -
    10 - 8

//? RESTO DA DIVISÃO %
    21 % 2 
//? INCREMENTO ++
    contador++
    //ou
    ++contador
    
//? DECREMENTO --
contador--
    //ou
    --contador

//?EXPONENCIAÇÃO **
    3 ** 3


    

/*
!GROUPING OPERATOR ()
? MUDA A ORDEM DE PRECEDENCIA DE OPERADORES
*/
2 + 3 * 5 // RETORNA 17
(2 + 3) * 5 // RETORNA 25


/*
!OPERADORES DE COMPARAÇÃO
?COMPARAM DOIS DOIS VALORES E RETORNAM TRUE OU FALSE
*/

let one = 1
let two = 2

//! operador == igual a
one == 2 //false
two == 1 // false
one == 1 // true
two == 2 //true

//! operador != diferente de
one != two // true
one != 1 // false
two != 2 // false
one != 2 // true


/*
!OPERADORES EXTRITAMENTE IGUAL E EXTRITAMENTE DIFERENTE
*/

/*
!EXTRITAMENTE IGUAL
? VERIFICA SE UM DADO É EXATAMENTE DO MESMO TIPO E VALOR DE OUTRO
*/
let one = 1
one === "1" // false, one foi atribuido tipo number e "1" é uma string
            //"1" + 1 = 11 pois como "1" é uma string é feita concatenaçao e nao soma
let one === 1 // true, pois 1 tem valor 1 e tipo number            



/*
!EXTRITAMENTE DIFERENTE
*VERIFICA SE DOIS VALORES SAO DIFERENTES EM VALOR E TIPO
*/

let two = 2
two !== '2'// true, pois embora tenha valor 2, os tipos sao diferentes, two e number, '2 string
two !== 2 // false, ambos tem valor e tipos iguais


/*
! OPERADOR MAIOR QUE
*/
let random = 5
random > 6 // FALSE
random > 4 // TRUE


/*
!OPERADOR MENOR QUE
*/
let mynumber = 12
mynumber < 10 // false
mynumber < 13 // true

/*
!OPERADOR MAIOR OU IGUAL
*/
let newNumber = 15
newNumber >= 17 // false
newNumber >= 14 // true


/*
!OPERADOR MENOR OU IGUAL
*/
let count = 21
count <= 25 // true
count <= 18 // false


/*
!OPERADORES DE ATRIBUIÇÃO OU ASSIGNMENT
*/
//? ASSIGNMENT
X = 3

//?ADITION ASIGNMENT
X = X + 2  // OU FORMA SIMPLIFICADA
X += 2

//? SUBTRACION ASSIGNMENT
X = X - 2 // OU
X -= 2

//? MULTILICATION ASSIGNMENT
X = X * 2 // OU
X *= 2

//? DIVISION ASSIGNMENT
X = X / 2 //OU
X /= 2

//? REMAINDER ASSIGNMENT
X = X % 2 // OU
X %= 2

//?EXPONENTIATION ASSIGNMENT
X = X ** 3
X **= 3


/*
? OPERADORES LOGICOS - RETORNAM VERDADEIRO OU FALSO
*/
//! AND => && RETORNA TRUE SOMENTE SE TODAS AS CONDIÇOES FOREM VERDADEIRAS

//! OR => || RETORNA TRUE SE PELO MENOS UMA CONDIÇÃO FOR VERDADEIRA

//! NOT => ! NEGAÇÃO, INVERTE UM VALOR BOOLEANO, SE FOR TRUE VIRA FALSE POR EX.


/*
* OPERADOR TERNÁRIO
? É LIDO COMO ENTAO
: É LIDO COMO SENAO
* SE CONDICAO ENTAO VALOR1 SENAO VALOR 2
! SE  CONDICAO ? VALOR 1 : VALOR 2
*/
let idade = 16
/* se idade for >= 18 entao maiorDeIdade = true
    senao maioDeIdade = false
*/
maiorDeIdade = idade >= 18 ? maiorDeIdade = true : maiorDeIdade = false


/*
!OPERADORES DE STRING
== COMPARACAO
+ CONCATENAÇÃO
*/


/*
?FALSY 
*UM VALOR É CONSIDERADO FALSY EM CONTEXTOS ONDE UM
*BOOLEANO É OBROGATÓRIO (CONDICIONAIS E LOOPS)
false
0
-0
"" string vazia
null
undefined
NaN

? TRUTHY
*UM VALOR É CONSIDERADO FALSY EM CONTEXTOS ONDE UM
*BOOLEANO É OBROGATÓRIO (CONDICIONAIS E LOOPS)
true
{}
[]
1
"string com algum conteudo"
*/


/*
!PRECEDENCIA DOS OPEDADORES
*GROUPING                       ()
*NEGAÇÃO E INCREMENTO           ! -- ++
*MULTIPLICAÇAO E DIVISAO        * /
*ADIÇAO E SUBTRÇAO              + -
*RELACIONAL                     < <= > >=
*IGUALDADE                      == != === !==
*AND                            &&
*OR                             ||
*TERNARIO                       ? :
*ASSIGNMENT(ATRIBUICAO )        = += -= *= /= **=
*/