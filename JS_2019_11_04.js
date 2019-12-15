// Задание 1. Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.

let array1 = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];

let sumNumbers = array1[0] + array1[1] + array1[2] + +array1[6] + +array1[7] + +array1[8];

alert(sumNumbers);

// Задание 2. Сгенерируйте массив из N случайных чисел с двумя знаками после запятой. Затем переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень. Для возведения в степень используйте вложенный цикл (НЕ метод Math.pow(), НЕ оператор **).

var array2 = [1.05, 2.06, 3.21, 7.28];

for (var i = 0; i < array2.length; i++) {
	for (var j = 0, z = array2[i]; j < 5; z = result, j++) {
		var result = z * array2[i];
	}

	console.log(result);
}

// Задание 3. Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.

let array3 = [];

for (let i = 0; i < 5; i++) {
	let arrayValue = +prompt('Введите любой символ', '');

	array3.push(arrayValue);
}

console.log(array3);

let sumOfNumbers = 0;

for (let i = 0; i < 5; i++) {

	if (!isNaN(array3[i])) {
		sumOfNumbers += array3[i];
	}
}

alert(sumOfNumbers);

/*Задание 4. Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
Добавьте в начало массива значение ‘Backbone.js’
Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
Добавьте в массив значение ‘CommonJS’ вторым элементом
Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”*/

var frameworks = ['AngularJS', 'jQuery'];

frameworks.unshift('Backbone.js');

console.log(frameworks);

frameworks.push('ReactJS', 'Vue.js');

console.log(frameworks);

frameworks.splice(1, 0, 'CommonJS');

console.log(frameworks);

frameworks.splice(frameworks.indexOf('jQuery'), 1);

console.log(frameworks);

alert('jQuery? Это здесь лишнее');

// Задание 5. Создайте строку с текстом ‘Как однажды Жак звонарь сломал городской  фонарь’. Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice ...). Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.

var string = 'Как однажды Жак звонарь сломал городской фонарь';

var arrayForString = string.split(' ');

console.log(arrayForString);

arrayForString.splice(arrayForString.indexOf('городской'), 1);
arrayForString.splice(arrayForString.indexOf('сломал'), 0, 'городской');

console.log(arrayForString);

var string2 = arrayForString.join(' ');

alert(string);
alert(string2);

// Задание 6. Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения. После того, как таблица сгенерирована, распечатайте значение в консоли:

let multiplicationTable = [];
	

for (var i = 1; i < 10; i++) {
	let multiple = [];
	multiplicationTable.push(multiple);

	for (var j = 1; j < 11; j++) {
		multiple.push(`${i}x${j}=${i * j}`);
	}
}

console.log(multiplicationTable);



