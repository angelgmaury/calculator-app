const keys = document.querySelectorAll('.key');
const keyPad = document.getElementById('keypad');

//Operadores

const opSuma = document.getElementById('opSuma');
const opResta = document.getElementById('opResta');
const opDiv = document.getElementById('opDiv');
const opMulti = document.getElementById('opMulti');
let num1 = document.querySelector('.num1');
let valor1 = num1.textContent;
let valor2 = '';
let operador = document.querySelector('.operador');

keys.forEach((e) => {
  e.addEventListener('click', (v) => {
    if (keyPad.textContent === '') keyPad.textContent = v.target.textContent;
    else {
      if (
        v.target.textContent === opSuma.textContent ||
        v.target.textContent === opResta.textContent ||
        v.target.textContent === opDiv.textContent ||
        v.target.textContent === opMulti.textContent
      ) {
        valor1 = parseFloat(keyPad.textContent);
        num1.textContent = valor1;
        operador.textContent = v.target.textContent;
        keyPad.textContent = '';
        console.log(valor1);
      } else {
        keyPad.textContent += '' + v.target.textContent;
        if (
          valor1 !== '' &&
          v.target.textContent !== opSuma.textContent &&
          v.target.textContent !== opResta.textContent &&
          v.target.textContent !== opDiv.textContent &&
          v.target.textContent !== opMulti.textContent
        ) {
          valor2 = parseFloat(keyPad.textContent);
          console.log(valor2);
        }
      }
    }
  });
});

const calcularRes = document.querySelector('.igual');

calcularRes.addEventListener('click', () => {
  switch (operador.textContent) {
    case '+':
      let resultadoSuma = valor1 + valor2;
      keyPad.textContent = resultadoSuma;
      num1.textContent = '';
      break;
    case '-':
      let resultadoResta = valor1 - valor2;
      keyPad.textContent = resultadoResta;
      num1.textContent = '';
      break;
    case 'x':
      let resultadoMulti = valor1 * valor2;
      keyPad.textContent = resultadoMulti;
      num1.textContent = '';
      break;
    case '/':
      if (valor2 === 0) {
        keyPad.textContent = 'Error: división por cero';
      } else {
        let resultadoDiv = valor1 / valor2;
        keyPad.textContent = resultadoDiv;
        num1.textContent = '';
      }
      break;
    default:
      keyPad.textContent = '0';
      break;
  }
});

// DELETED
const deleted = document.querySelector('.DEL');
deleted.addEventListener('click', () => {
  keyPad.textContent = '';
});

// RESET
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
  num1.textContent = '';
  valor1 = null;
  valor2 = '';
  keyPad.textContent = '';
  operador.textContent = '';
});

// 2do Design
const bg1 = document.querySelector('.bg-1');
const bgRes = document.querySelector('.grupo-resultado');
const bgKeys = document.querySelector('.grupo-keys');
const btnChangeTheme = document.getElementById('switch');
btnChangeTheme.addEventListener('click', () => {
  bg1.classList.toggle('bg-2');
  bgRes.classList.toggle('gr-2');
  bgKeys.classList.toggle('gk-2');
});
