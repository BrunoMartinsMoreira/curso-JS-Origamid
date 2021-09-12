/*
   Module
Os módulos servem para quebrarmos o código em diferente arquivos, 
para facilitar a organização e compartilhamento de código comum.

<!-- Só funciona em servidor, seja local ou online
Não irá funcionar se você abrir o html direto -->
<script type="module" src="./script.js"></script>
*/
// quadrado.js
export function areaQuadrado(l) {
  return l * l;
}

export function perimetroQuadrado(l) {
  return 4 * l;
}
// numeroAleatorio.js
export default function numeroAleatorio() {
  return Math.random();
}
// script.js
import { areaQuadrado, perimetroQuadrado } from "./quadrado.js";

areaQuadrado(4);
perimetroQuadrado(5);
numeroAleatorio();
