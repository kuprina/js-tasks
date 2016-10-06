var robotNumber = 1 + Math.floor( Math.random() * (50+1-1) );
console.log("Робот загадал: " + robotNumber);

var MAX_GUESSES = 10; // максимальное допустимое число попыток.
var userInput;       // число, которое ввел
var userNumber;      // число пользователя
var userAttemsAll = 0;  // количество всех попыток, которые уже сделал юзер
var userAttems = MAX_GUESSES; // для уведомления
var userWin = false; // если выиграл
var userLosing = false; // если проиграл
var userSurrends = false; // если сдался
var promptText = "Я загадала число. Угадывай. Введи число от 1 до 50:";

var currentDifference = 0;
var prevDifference = 0;


function declOfNum(number, titles)  
{  
    cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}
//userInput = prompt(promptText, 1);
//userNumber = parseInt(userInput, 10);

//if (isNaN(userNumber))
//	alert('Вводить надо было цифрами');
//else
//    console.log("все окей");

for (var counterStep = 1; counterStep <= MAX_GUESSES; counterStep += 1) {
    // первая попытка ввода
    userInput = prompt(promptText, '');
    userNumber = parseInt(userInput, 10);
    
    // если нажал Cancel
    if (userInput === null || userInput === false) {
        userSurrends = true;
        break;
    }
    if (isNaN(userNumber))
        alert('Вводить надо было цифрами');
    else
        console.log("все окей");
    currentDifference = Math.abs(robotNumber - userInput);
    
    // считаем попытки
    userAttemsAll = counterStep;
    // console.log(userAttems);
    
    // если разницы нету, то победа пользователя
    if (currentDifference === 0) {
        userWin = true;
        break;
    }
    
    // последующие попытки ввода
    if (currentDifference <= prevDifference) {
        alert("Теплее");
    }
    else if (currentDifference >= prevDifference) {
        alert("Холоднее");
    }
    
    
    prevDifference = currentDifference;
    userAttems -= 1;
    
    promptText = 'У тебя осталось ' + userAttems + ' ' + declOfNum(userAttems, ['попытка', 'попытки', 'попыток']) + ' .\nУгадывай. Введи число от 1 до 50:';
}

// если пользователь выиграл
if (userWin === true) {
	alert("Угадал, хитрец, за " + userAttems + " попыток");
}
else if (userSurrends === true) {
    alert("Сдался, слабак! :P");
}
// если пользователь проиграл
else
	alert("Проиграл!!! :P");