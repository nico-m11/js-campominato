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
var partite = 5;

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


//creamo la vittoria o la perdita dell'utente
var win = false;
var presobomba = false;
var userscelte = [];




while (!win && !presobomba) {
  var attualuserscelta = parseInt(prompt('inserisci un numero da 1 a 100'));
  if (checkArray(attualuserscelta, userscelte)) {
    alert('hai già inserito questo numero');
  } else {
    if (checkArray(attualuserscelta, bombe)) {
      presobomba = true;
    }else{
      userscelte.push(attualuserscelta);
      if(userscelte.length == partite){
        win = true;
      }

    }
  }
}

console.log(win);
console.log(presobomba);
console.log(userscelte);

// punteggio



// definisco le due variabili, cioè il messaggio della vittorio/sconfitta ed i tentativi il quale l'utente inserisce
var messaggioEl = document.getElementById('messaggio');
var tentativiEl = document.getElementById('tentativi');

if (win) {

    console.log("vinto");
  messaggioEl.innerHTML = 'HAI VINTO';
} else if(presobomba){
  console.log("bomba");
  messaggioEl.innerHTML = 'HAI PERSO :(';
}
