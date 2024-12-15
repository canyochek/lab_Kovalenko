
const inputA = document.querySelector('#inputA');
const inputB = document.querySelector('#inputB');
const inputC = document.querySelector('#inputC');
const button = document.querySelector('#calculateSum');
const resultContainer = document.querySelector('#task3');


button.addEventListener('click', () => {

  const a = Number(inputA.value);
  const b = Number(inputB.value);
  const c = Number(inputC.value);


  const sum = a + b + c;


  resultContainer.innerHTML = `Sum: ${sum}`;
});





const addCircleButton = document.querySelector('#addCircleButton');
const task2Container = document.querySelector('#task2');


function addCircle() {
  
  const newCircle = document.createElement('div');

  
  newCircle.classList.add('circle');

  
  task2Container.appendChild(newCircle);
}


addCircleButton.addEventListener('click', addCircle);
