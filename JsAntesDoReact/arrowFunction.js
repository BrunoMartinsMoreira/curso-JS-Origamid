/*
      Arrow Function
   A principal diferença é o contexto do this. A arrow function não cria o próprio this.
*/
const upperName = function (name) {
  return name.toUpperCase();
};
upperName("André"); // ANDRÉ

const lowerName = (name) => {
  return name.toLowerCase();
};
lowerName("Rafael"); // rafael

const countLetters = (word) => word.length;
countLetters("Rafael"); // 6
