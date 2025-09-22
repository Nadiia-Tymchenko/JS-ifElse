// завдання 1

const firstInput1 = prompt('Введіть перше число');
const userNumber1 = Number(firstInput1);
const firstInput2 = prompt('Введіть друге число');
const userNumber2 = Number(firstInput2);
const sum = (userNumber1 + userNumber2);
if (sum / 5 === 0) {
    alert('Сума кратна 5');
} else {
    alert('Сума не кратна 5');
}

// завдання 2

const menu = "1 - Чай\n2 - Кава\n3 - Сік\n4 - Вода";
const userInput = prompt(menu);
const choiceNumber = Number(userInput);
if (choiceNumber === 1) {
  alert("Ви обрали чай");
} else if (choiceNumber === 2) {
  alert("Ви обрали каву");
} else if (choiceNumber === 3) {
  alert("Ви обрали сік");
} else if (choiceNumber === 4) {
  alert("Ви обрали воду");
} else {
  alert("Такого напою у нас немає");
}

// завдання 3

const purchaseAmountString = prompt("Будь ласка, введіть суму покупки у гривнях:");
const purchaseAmount = Number(purchaseAmountString);
let finalAmount;
if (purchaseAmount > 800){
    finalAmount = purchaseAmount * 0.95;
    alert('Сума покупки зі знижкою 5% : ' +  finalAmount  + ' грн');
} else if (purchaseAmount > 500){
    finalAmount = purchaseAmount * 0.97;
    alert('Сума покупки зі знижкою 3% : ' +  finalAmount  + ' грн');
} else {
    finalAmount = purchaseAmount;
    alert('Сума покупки ' +  purchaseAmount  + ' грн. Знижки немає. Остаточна сума : ' +  finalAmount  + ' грн');
}


// завдання 4

let num1 = 10;
let num2 = 2;
if (num2 === 0){
    console.log('Ділення на нуль не є можливим');
    console.log(false);
} else {
    const remainder = num1 % num2;
    if (remainder === 0){
        console.log(true);
    }
    else {
        console.log(false); 
    }
}