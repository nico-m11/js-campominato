function checkArray(numero,arraynumero) {
  for (var i = 0; i < arraynumero.length; i++) {
    if (numero === arraynumero[i]) {
      return true;
    }
  }
  return false;
}

// definisco delle variabili costanti
var randomNum = 16;
var minNum = 1;
var maxNum = 100;
var partite = 84;

// quanto fatto in precedenza, ho deciso di cambiare strada scegliendo la modalità osservata dall'Instructor Flavio

//function genRandom(min,max) {
//  return (Math.floor(Math.random() * max) + min);
//}

//function validNumber(array,element) {
//  var valid = false;
//  for (var i = 0; i < array.length; i++) {
//    if (array == element) {
//      valid = true;
//    }
//  }
//  return valid;
//}

// genero un random di numeri in un array quali saranno rappresentati dalle bombe

var bombe = [];

while (bombe.length < 16) {
  var numeroRandom = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

  if (!checkArray(numeroRandom,bombe)) {
     bombe.push(numeroRandom);
  }
}

console.log (bombe);
