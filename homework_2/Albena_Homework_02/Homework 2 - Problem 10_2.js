/* Student: Albena Indzheva
 *
 * Да се прочетат 2 числа от клавиатурата А и В. Да се изведат всички числа от А до В на степен 2(разделени с запетая). Ако някое число е кратно на 3, да се изведе съобщение че числото се пропуска „skip 3“. Ако сумата от всички изведени числа (без пропуснатите) стане по-голяма от 200, да се прекрати извеждането. 
 * Въдете А: 
 * 1 
 * Въведете B 
 * 107 
 * 1, 4, skip 3, 16, 25, skip 6, 49, 64, skip 9, 100 
 * 
 */

var A = prompt("Въдете А:");
A = parseInt(A);
var B = prompt("Въведете B, което е > А:");
B = parseInt(B);
var arr = [];
var currentSqr;


for (var i = A; ((i>=A) && (i<=B)); i++) {
	currentSqr = i*i;
	if (currentSqr <= B) {
		if (i % 3 == 0) {
		   currentSqr = "skip " + i;
		}
		arr.push(currentSqr);
	}
}


if (arr.length != 0) {
console.log(arr.join(", "));	
} else {
	
	console.log('няма число между въведените, което да е степен на 2');

}


