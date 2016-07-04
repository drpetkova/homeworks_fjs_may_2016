/* Student: Albena Indzheva
 *
 * Да се изведат съобщения към потребителя и да се прочетат две числа от клавиатурата A и B (може да са с плаваща запетая). 
 * После да се прочете трето число C и да се провери дали то е между A и B. 
 * Да се изведе подходящо съобщение в конзолата за това дали C е между A и B. 
 * 
 * Пример: 
 * Въведете А: 
 * 13.2 
 * Въведете В: 
 * 29.5 
 * Въведете С: 
 * 22.1 
 * Числото 22.1 е между 13.2 и 29.5 
 */

var A = prompt("Въведете А:");
A = parseFloat(A);

var B = prompt("Въведете B:");
B = parseFloat(B);

var C = prompt("Въведете C:");
C = parseFloat(C);

if (((A > C) && (B < C)) || ((A < C) && (B > C))) {
	console.log("Числото " + C + " е между " + A + " и " + B);

} else {
	console.log("Числото " + C + " НЕ е между " + A + " и " + B);
}