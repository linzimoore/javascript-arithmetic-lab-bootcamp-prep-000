function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}

function divide(a, b) {
  return parseInt(a) / parseInt(b);
}

function inc(n) {
  return parseInt(n+=1);
}

function dec(n) {
  return parseInt(n-=1);
}

function makeInt(n) {
  return parseInt(n,10);
}

function preserveDecimal(n) {
  if (isNaN(n)) {
    return true;
  }
  return parseFloat(n);
} 
