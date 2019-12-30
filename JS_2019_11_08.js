// 1. Создайте функцию p и a, которые будут служить короткими именами для prompt и alert соответственно, то есть запрашивать окно с полем ввода и выводить любое пользовательское сообщение в стандартном модальном окне. Напишите функцию d, которая будет служить коротким именем для debugger, то есть запускать процесс отладки. Используя эти псевдонимы получите значение из prompt и отобразите в alert. А процесс работы скрипта проконтролируйте с помощью функции, которая служит для дебага.

d();
let name = p( 'Enter your name', '');
a(name);

a( 'Hello World' );

function d() {
	debugger;
}

function p(title, def) {
	return prompt(title, def);
}

function a(message) {
	alert(message);
}

// 2. Используя стрелочный синтаксис ES6, напишите функцию max (аналог Math.max), которая сравнивает два числа и возвращает большее:

let max = (x, y) => {
	return Math.max(x, y);
}

console.log( max(0, -1) );

// 3. Используя синтаксис ES5, напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:

console.log( min(0, -1, 100, 500, 100500) );

function min() {
	let arg = arguments[0]

	for (let i = 1; i < arguments.length; i++) {
		if (arguments[i] < arg) {
			arg = arguments[i];
		}
	}

	return arg;
}

// 4. Не используя методы массива, напишите функцию аналог метода shift. Функция удаляет из переданного в параметре массива первый элемент и возвращает новый массив.

let array1 = [0, 1, 2, 3, 4, 5];

function removeArrFirstElement() {
	let array2 = [];

	for (let i = 1; i < array1.length; i++) {
		array2[i - 1] = array1[i]
	}

	return array2;
}

console.log(removeArrFirstElement());

// 5. Не используя методы массива, напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов.

let array3 = [0, 1, 2, 3, 4, 5];

function addArrElement() {
	array3.length = array3.length + 2;

	for (let i = 0; i < array3.length; i++) {
		if (i === array3.length - 2) {
			array3[i] = 6;
		} else if (i === array3.length - 1) {
			array3[i] = 7;
		}
	}

	return array3;
}

console.log(addArrElement());

// 6. Напишите функцию аналог метода ES6 Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены или расширены. Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.

function extend(target, source1, source2) {
	let newObj = target;

	for (let key in source1) {
		newObj[key] = source1[key];
	}

	for (let key in source2) {
		newObj[key] = source2[key];
	}

	return newObj;
}

var source = {firstname: 'Tom', age: 10}
var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}

// 7. Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения - обязательные параметры, если какой-то из них или оба отсутствуют, то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том, что данные переданы некорректно. Параметр author - опциональный, но должна происходить проверка: если параметр не передан, то вместо него подставляется значение ‘Anonymous’. Функция распечатывает в HTML текст в виде: <имя_автора>, <дата> <текст_сообщения>

function setComment(date, message, author) {
	if (date === undefined || message === undefined) {
		return alert('Данные переданы некорректно');
	} else if (author === undefined) {
		author  = 'Anonymous'
	}

	let nodeStrong = document.createElement('strong');
	document.body.appendChild(nodeStrong);
	nodeStrong.innerText = `${author}, ${date}`;

	let nodeP = document.createElement('p');
	document.body.appendChild(nodeP);
	nodeP.innerText = message;
}

setComment('2016-11-02', 'Everything is ok', 'John');
setComment('2016-11-02', 'You could do it better!');

// 8. Напишите функцию, которая в строке, состоящей из чисел, разделенных пробелом, находит максимальное и минимальное, и возвращает их

function highAndLow(numbersString) {
	let [...rest] = numbersString.split(' ');

	for (let i = 0; i < rest.length; i++) {
		rest[i] = +rest[i];
	}


	let low = rest[0]

	for (let i = 1; i < rest.length; i++) {
		if (rest[i] < low) {
			low = rest[i];
		}
	}


	let high = rest[0]

	for (let i = 1; i < rest.length; i++) {
		if (rest[i] > high) {
			high = rest[i];
		}
	}

	return `${high} ${low}`;
}

var result = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
console.log( result ); // "542 -214"

// 9. Найдите и исправьте ошибки в коде:

function foo() {
	function bar(a) {
		let i = 1;
		return i + a;
	}
	
	for (var i = 1; i < 11; i++) {
		console.log( bar(i * 2) );
	}
}

foo(); // 3 5 7 9 11 13 15 17 19 21