/********************************************************************
 ****************** OUTERHTML, INNERHTML E INNERTEXT ***************
 * Propriedades que retornam uma string contendo o html ou texto. *
 *  É possível atribuir um novo valor   para  as mesmas          *
 * element.innerText = 'Novo Texto'.                            *
 ***************************************************************/
 const menu = document.querySelector('.menu');

 menu.outerHTML; // todo o html do elemento
 menu.innerHTML; // html interno
 menu.innerText; // texto, sem tags
 
 menu.innerText = '<p>Texto</p>'; // a tag vai como texto
 menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada

 /********************************************************************
  *************************** TRASVERSING **************************
  * Como navegar pelo DOM, utilizando suas propriedades e métodos.*
  ****************************************************************/
  const lista = document.querySelector('.animais-lista');

  lista.parentElement; // pai
  lista.parentElement.parentElement; // pai do pai
  lista.previousElementSibling; // elemento acima
  lista.nextElementSibling; // elemento abaixo
  
  lista.children; // HTMLCollection com os filhos
  lista.children[0]; // primeiro filho
  lista.children[--lista.children.length]; // último filho
  
  lista.querySelectorAll('li'); // todas as LI's
  lista.querySelector('li:last-child'); // último filho

/****************************************************************
 ******************** ELEMENT VS NODE **************************
 *  Element's represetam um elemento html, ou seja, uma tag.  *
 *  Node representa um nó, e pode ser um elemento (Element), *
 *  texto, comentário, quebra de linha e mais.              *
 ***********************************************************/  
 const lista = document.querySelector('.animais-lista');

 lista.previousElementSibling; // elemento acima
 lista.previousSibling; // node acima
 
 lista.firstChild; // primeiro node child
 lista.childNodes; // todos os node child
 