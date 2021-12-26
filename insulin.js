//define all variables with default values

let factor = 5;
let meal = 0;
let current = 0;
let target = 10;
let total = 0;
let numerator = 0;
let correction = 0;

//check the form for meal and current BG level and give meal a number depending on base units needed.

function checkForm() {
  meal = document.getElementById('meal').value;
  current = document.getElementById('BG').value;
  target = document.getElementById('target').value;
  if (meal === 'breakfast') {
  meal = 2;
  } else {
  meal = 3;
  };
  current = parseInt(current);
  target = parseInt(target);
  console.log(current);
  console.log(meal);
  return current;
  return meal;
  return target; 
};

//print result to page in a box and display an error message if no numbers have been entered.

let box = document.getElementById('box')
let resultA = document.getElementById('resultA');
let resultB = document.getElementById('resultB');
let resultC = document.getElementById('resultC');

async function print() {

  await formula();
  box.id = ('result');
  if (current === 0 || target === 0) {
  resultA.innerText = ('Please enter a value');
  resultB.innerText = ('for current and target');
  resultC.innerText = ('blood glucose.');
 } else {
  resultA.innerText = ('You should take');
  resultB.innerText = (`${Math.round(total)} units`);
  resultC.innerText = ('of insulin.');
};
};

//(current - target)/correction factor + meal

async function formula() {
  await checkForm();
  numerator = current - target;
  correction = numerator/factor;
  total = correction + meal;
  console.log(total);
  return total;
};

//execute the above when the button is clicked.

function run() {
  checkForm();
  formula();
  print();
};

let btn = document.getElementById('submit');
btn.addEventListener('click', run);








