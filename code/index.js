const display = document.getElementById('display');
  const buttons = document.querySelectorAll('button');

  let memory = 0;
  let currentInput = '';

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;

      if (!isNaN(value) || value === '.') {
        currentInput += value;
        display.value = currentInput;
      } else if (value === 'C') {
        currentInput = '';
        display.value = '';
      } else if (value === '=') {
        try {
          currentInput = eval(currentInput).toString();
          display.value = currentInput;
        } catch {
          display.value = 'Error';
          currentInput = '';
        }
      } else if (value === 'mrc') {
        currentInput = memory.toString();
        display.value = currentInput;
      } else if (value === 'm-') {
        memory -= Number(currentInput) || 0;
        currentInput = '';
        display.value = '';
      } else if (value === 'm+') {
        memory += Number(currentInput) || 0;
        currentInput = '';
        display.value = '';
      } else { // оператори + - * /
        if (currentInput !== '') {
          currentInput += value;
          display.value = currentInput;
        }
      }
    });
  });