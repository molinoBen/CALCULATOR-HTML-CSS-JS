const result = document.getElementById('result');
const buttons = document.querySelectorAll('.number, .operator');
const equalsBtn = document.getElementById('equalsBtn');
const clearBtn = document.getElementById('clearBtn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    result.value += button.textContent;
  });
});

equalsBtn.addEventListener('click', () => {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
});

clearBtn.addEventListener('click', () => {
    result.value = '';
})
