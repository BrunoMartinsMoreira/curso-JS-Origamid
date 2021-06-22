/* ARRAYS 
  declarado entre []
  começa no indice 0 ate N
  é um dado do tipo lista
  poder ser uma lista de varios tipos de dados como strings, numbers e objetos
*/

const videoGames = ['XboxOne', 'ps4', 'switch', '3DS', 'Atari', 'Xbox 360','PS3']

/* LOOPS 
Estruturas de repetiçao que executam uma instruçao enquanto uma condição for
verdadeira
*/

for(numer = 1; number <= 15; number++){
  console.log(number)
}

/* while
  verifica uma condição, e enquanto(while) ela for verdadeira
  executa uma instrução
*/
let index = 0
while(index <= 50){
  console.log(index)
  index = index + 5;
}

/* do while 
  executa pelo menos uma vez a instrução e verifica a condição
  faça(do) enquanto(while)
*/

let n = 0
do {
  n += 1
  console.log(n)
} while(n <=20)


/* loops de arrays
  Quando nao se sabe o numero de itens do array usa-se o .length para percorrer
  todo o array
*/
let videoGames = ['XboxOne', 'ps4', 'switch', '3DS', 'Atari', 'Xbox 360','PS3']
for (let item = 0; item<= videoGames.length; item++){
  console.log(videoGames[item])
}

/*
o comando break interrompe o loop caso uma condição seja verdadeira
*/

let videoGames = ['XboxOne', 'ps4', 'switch', '3DS', 'Atari', 'Xbox 360','PS3'];
for (let item = 0; item<= videoGames.length; item++){
  console.log(videoGames[item])
  if(videoGames(item) === '3DS'){
    break;
  }
}

/*
    foreach
    é um metodo de arrays que executa uma funcao para cada item do
    array
*/
  
let videoGames = ['XboxOne', 'ps4', 'switch', '3DS', 'Atari', 'Xbox 360','PS3'];
videoGames.forEach((item) => {
  console.log(item)
}) 


let frutas = ['Banana', 'maçã', 'pêra', 'uva', 'morango']

frutas.forEach(function(fruta, index, array){ 
  // pode receber 3 argumentos dentro da funcao do foreach   
  // o primeiro é o item do array em si -> fruta
  // o segundo é o indice do array -> index
  // o terceiro é o proprio array -> array
  // sempre será nessa ordem indepedente do nome usado  
  console.log(fruta, index, array)
})    



let anos = [1959, 1962, 1970, 1994, 2002];
	ano.forEach( index => {
  	console.log(`o brasil ganhou a copa nos anos ${anos[index]}`)
  })