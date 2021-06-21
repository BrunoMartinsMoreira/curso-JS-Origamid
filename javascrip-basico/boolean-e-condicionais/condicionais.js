/*
*if...else = se senao
*/

let temperature = 37.5
if (temperature >= 37.5) {
    alert('Febre alta')
} else if (temperature < 37.5 && temperature >= 37 ){
alert('Febre mediana')
}  else {
    alert('Saudável')
}  

/*
*switch

switch(expressao){
    case 'a' :
        codigo para a
        break
    case 'b' :
        codigo para b
        break
    case 'c' :
        codigo para c
        break
    default (expressao usada caso nenhum dos cases seja atendido)  
        break  
}   
*/
function calculator (number1, operator, number2) {
    let result = 0

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            alert('EM FASE DE IMPLEMENTAÇÃO.')
            break;
    }
    return result
}


//* trow

function sayMyName(name = '') {
    if (name === '') {
        throw new Error ("Nome é obrigatório !")
    }
}

//* try catch

try {
    sayMyName()
} 
catch (Error) {
    alert (Error)
}
alert ('Codigo apos o tratamento do erro')