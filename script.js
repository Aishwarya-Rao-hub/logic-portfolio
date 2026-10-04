let inputA = 0;
let inputB = 0;

function toggleInput(param) {
  if (param === 'A') {
    inputA = inputA === 0 ? 1 : 0;
    document.getElementById('inputA').innerText = inputA;
  } else {
    inputB = inputB === 0 ? 1 : 0;
    document.getElementById('inputB').innerText = inputB;
  }
  calculateGate();
}

function calculateGate() {
  const gate = document.getElementById('gateSelect').value;
  let res = 0;
  let expr = '';

  switch (gate) {
    case 'AND': res = inputA & inputB; expr = 'Y = A · B'; break;
    case 'OR': res = inputA | inputB; expr = 'Y = A + B'; break;
    case 'NAND': res = !(inputA & inputB) ? 1 : 0; expr = 'Y = (A · B)\''; break;
    case 'NOR': res = !(inputA | inputB) ? 1 : 0; expr = 'Y = (A + B)\''; break;
    case 'XOR': res = inputA ^ inputB; expr = 'Y = A ⊕ B'; break;
    case 'XNOR': res = !(inputA ^ inputB) ? 1 : 0; expr = 'Y = (A ⊕ B)\''; break;
  }

  document.getElementById('outputY').innerText = res;
  document.getElementById('gateExpr').innerText = expr;
}

function convertNumber() {
  let val = parseInt(document.getElementById('decimalInput').value) || 0;
  let clamped = Math.max(-128, Math.min(127, val));
  
  let bin = (clamped & 0xFF).toString(2).padStart(8, '0');
  let hex = '0x' + (clamped & 0xFF).toString(16).toUpperCase().padStart(2, '0');
  
  let twosComp = ((~clamped + 1) & 0xFF).toString(2).padStart(8, '0');

  document.getElementById('binaryRes').innerText = bin;
  document.getElementById('hexRes').innerText = hex;
  document.getElementById('twosRes').innerText = twosComp;
}

calculateGate();
convertNumber();
