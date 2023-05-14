const BtnM1 = document.getElementById('btnMinusShoes');
const BtnM2 = document.getElementById('btnMinusShirt');
const BtnM3 = document.getElementById('btnMinusSocks');
const BtnM4 = document.getElementById('btnMinusGlass');

const BtnP1 = document.getElementById('btnPlusShoes');
const BtnP2 = document.getElementById('btnPlusShirt');
const BtnP3 = document.getElementById('btnPlusSocks');
const BtnP4 = document.getElementById('btnPLusGlass');

let IntVal1 = document.getElementById('intShoes').value;
let IntVal2 = document.getElementById('intShirt').value;
let IntVal3 = document.getElementById('intSocks').value;
let IntVal4 = document.getElementById('intGlass').value;

BtnP1.onclick = function () {
  IntVal1 = Number(IntVal1) + 1;
  document.getElementById('intShoes').value = IntVal1;
}
BtnM1.onclick = function () {
  IntVal1 = Number(IntVal1) - 1;
  if (IntVal1 < 0) IntVal1 = 0;
  document.getElementById('intShoes').value = IntVal1;
}

BtnP2.onclick = function () {
  IntVal2 = Number(IntVal2) + 1;
  document.getElementById('intShirt').value = IntVal2;
}
BtnM2.onclick = function () {
  IntVal2 = Number(IntVal2) - 1;
  if (IntVal2 < 0) IntVal2 = 0;
  document.getElementById('intShirt').value = IntVal2;
}

BtnP3.onclick = function () {
  IntVal3 = Number(IntVal3) + 1;
  document.getElementById('intSocks').value = IntVal3;
}
BtnM3.onclick = function () {
  IntVal3 = Number(IntVal3) - 1;
  if (IntVal3 < 0) IntVal3 = 0;
  document.getElementById('intSocks').value = IntVal3;
}

BtnP4.onclick = function () {
  IntVal4 = Number(IntVal4) + 1;
  document.getElementById('intGlass').value = IntVal4;
}
BtnM4.onclick = function () {
  IntVal4 = Number(IntVal4) - 1;
  if (IntVal4 < 0) IntVal4 = 0;
  document.getElementById('intGlass').value = IntVal4;
}
const buttonTotal = document.querySelector('.button_novinki').addEventListener('click', Total);
function Total() {
  var total = Number(IntVal1) * 200 + Number(IntVal2) * 40 + Number(IntVal3) * 10 + Number(IntVal4) * 25;
  document.getElementById('Price').innerHTML = total + " BYN";
}
