var numUtente = [];
var bigBang = [];


function genRandom(1,100) {
  return (Math.floor(Math.random() * max) + min);
}

function validNumber(array,element) {
  var valid = false;
  for (var i = 0; i < array.length; i++) {
    if (array == element) {
      valid = true;
    }
  }
  return valid;
}

console.log(valid, array, genRandom);
