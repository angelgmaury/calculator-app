const keys = document.querySelectorAll('.key');
const keyPad = document.getElementById('keypad');
//Operadores

const opSuma = document.getElementById('opSuma');
const opResta = document.getElementById('opResta');
const opDiv = document.getElementById('opDiv');
const opMulti = document.getElementById('opMulti');

let valor1 = '';
let valor2 = '';
let operador = '';

keys.forEach((e) => {
  e.addEventListener('click', (v) => {
    if (keyPad.textContent === '0') {
      keyPad.textContent = v.target.textContent;
    } else {
      if (
        v.target.textContent === opSuma.textContent ||
        v.target.textContent === opResta.textContent ||
        v.target.textContent === opDiv.textContent ||
        v.target.textContent === opMulti.textContent
      ) {
        valor1 = parseFloat(keyPad.textContent);
        operador = v.target.textContent;
        keyPad.textContent = '';
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
  switch (operador) {
    case '+':
      let resultadoSuma = valor1 + valor2;
      keyPad.textContent = resultadoSuma;
      break;
    case '-':
      let resultadoResta = valor1 - valor2;
      keyPad.textContent = resultadoResta;
      break;
    case 'x':
      let resultadoMulti = valor1 * valor2;
      keyPad.textContent = resultadoMulti;
      break;
    case '/':
      if (valor2 === 0) {
        keyPad.textContent = 'Error: división por cero';
      } else {
        let resultadoDiv = valor1 / valor2;
        keyPad.textContent = resultadoDiv;
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
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
  valor1 = '';
  valor2 = '';
  keyPad.textContent = '';
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
