"use strict"

/* Вера Манова Задача 7: 
Въведете три стойности от клавиатурата – час(целочислен тип), сума пари(число с плаваща запетая), дали съм здрав(булев тип).
 Съставете програма, която взема решения на базата на тези данни по следния начин: 
- ако съм болен няма да излизам 
- ако имам пари ще си купя лекарства 
- ако нямам – ще стоя вкъщи и ще пия чай 
- ако съм здрав 
- ако имам по-малко от 10 лв ще отида на кафе и т.н. 
Полученото решение покажете като съобщение в конзолата.
*/

 var firstValue = parseInt(prompt("Enter an hour:"));
 var secondValue = parseFloat(prompt("Enter amount of money:"));
 var thirdValue = prompt("Are you healthy?");

if(thirdValue === "No"){
	console.log("Няма да излизам, болен съм.")
}else{
	console.log("Здрав съм.");
}
if(secondValue>0 && secondValue>10){
	console.log("Имам пари ще си купя лекарства.");
}else
if(secondValue<10 && secondValue>0){
	console.log("Ще отида на кафе.");
}
else{
	console.log("Нямам пари за лекарства.Ще си стоя вкъщи и ще пия чай.");
}


