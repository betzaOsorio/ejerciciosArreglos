let d = [2,4,6,8,10];

function rDerecha(ar) {
  let end = ar.pop();
  ar.unshift(end);
  return ar;
}

let resultado = rDerecha(d);
console.log(resultado);