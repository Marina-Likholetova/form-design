var numCount = document.getElementById('num_count');
var plusBtn = document.getElementById('button_plus');
var minusBtn = document.getElementById('button_minus');

plusBtn.onclick = function() {
  var qty = parseInt(numCount.value);
  qty = qty + 1;
  numCount.value = qty;
}

minusBtn.onclick = function() {
  var qty = parseInt(numCount.value);
  qty = qty - 1;
  if (qty >= 1)
    numCount.value = qty;
}