/******************************************
*************   VARIAVEIS      ************
-Nomes simbólicos para receber algum valor
-Atalhos de código
-Identificadores
##Podem ser definidas com três palavras
#var - nao é mais usado no es6
#let - substitui var no es6
#const - constantes, o valor atribuido não 
pode ser alterado
*********************************************
*********************************************/

/*******************************************
*************  TIPOS DINÂMICOS  ************
    #JS é uma linguagem fracamente tipada e
    dinâmica;

    #As variáveis não precisam ter seu tipo
    definido previamente;
    
    #Podemos mudar o conteudo da variável.
*********************************************
*********************************************/

/******************************************************
*************  VAR E SCOPE  ***************************
    #O QUE É SCOPE(ESCOPO)
        *DE BLOCO
    block statement(declaraçao de bloco)
        { inicia o o bloco
            tudo entre as chaves faz parte do 
            escopo do bloco
            tudo que tem escopo de bloco
            so pode ser acessado dentro do  
            bloco, se for chamado fora do bloco
            seu valor será undefined
        } fecha o bloco
        *GLOBAL
          tudo que está dentro do corpo do
          programa faz parte do escopo global
          pode ser acessado tanto no bloco
          quanto no global


      VAR tem scope global e também local(de bloco)
    porém ao acessar uma var de escopo local no escopo
    (hoisting)
    global ele acessa apenas a variavel e não seu valor,
    assim no escopo global, uma VAR local fica com
    valor undefined atribuido, a não ser que seja atribuido
    um valor para ela no escopo global.
**************************************************************
**************************************************************/


/******************************************************************
*************  LET E CONST SCOPE  *********************************
    LET E CONST tem escopo local, ou seja, só podem
    ser acessadas no escopo que foram criadas

    ex

    console.log(x)
    {
       let x=1
    }
    ira retornar um erro pois a variével x só pode ser acessada no
    escopo que foi criada



    {
        console.log(x)
        let x=1
    }
    irá retornar erro pois embora o console.log esteja dentro do 
    escopo, está chamando x antes de ser declarado


    let x =1
    {
        x=2
        console.log(x)
    }
    irá retornar valor 2, x foi declarado fora do escopo local com
    valor 1, como nao há a palavra reservada let dentro do escopo
    o JS apenas irá atualizar o valor de X, ou seja, dentro do escopo
    local x=2, caso houvesse console.log no escopo global e 
    no escopo local houvesse a palavra reservada let, haveria dois retornos,
    pois embora tenham nomes iguais, cada x seria uma variável diferente,
    no global uma variavel x=1, e no local outra variavel x=2

    const x=1 
    {
        x=2
        console.log(x)
    }
    irá retornar erro, pois x é uma constante e seu valor nao
    pode ser alterado.
********************************************************************
********************************************************************/

// passando variaveis como argumentos
let nome = 'Bruno'
let age = 27


// concatenando mais de uma variavel como argumento

console.log('O' + nome +' tem ' + age +' de idade')

// interpolando valores
console.log(` o ${nome} tem ${age} de idade`)

// Objetos
//objeto vazio nao tem propriedade nem valor
const person={} 

/* objeto com uma propriedade (name) e um
valor (jhon)*/
const person ={
    name: 'jhon'
}


/*objeto com multiplas propriedades e
valores (nunca esquecer de por um virgula ao quebrar linha)*/
const person ={
    name: 'JHON',
    age: 28,
    weight: 88.9,
    job: 'developer'
}

//acessando propriedades de um objeto
console.log(`O senhor ${person.name} tem ${person.age},
 pesa ${person.weight} e trabalha como ${person.job}.`)
 /*para acessar as propriedades e valor de um objeto a sintaxe
 é objeto.propriedade, e sera acessado o valor da propriedade*/

 //arrays

 const animals= [
     'cat',
     'lion',
     'dog'
 ]
 /* o array começa na posiçao zero
    logo se quiser acessar a primeira posiçao do
    array a sintaxe e a seguinte :*/

    console.log (animals[0])

    /*um array pode receber um objeto */
    const funcionarios= [
        'Joao',
        'maria',
        {
            name:'Bruno',
            age: 27,
            height: 1.75
        }
    ]

    /* para acessar um objeto dentro de um array*/
    console.log(funcionarios[2].name)//irá imprimir o nome Bruno
