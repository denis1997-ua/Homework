/*1. Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями, у некоторых есть поле middlename. Используя встроенные функции массивов:	
Отфильтруйте пользователей младше 18 лет
Добавьте каждому объекту поле fullName, которое является конкатенацией firstname, middlename и lastname, если есть все три, и только firstname и lastname, если middlename нет
Сформируйте новый массив, который содержит только полное имя пользователей*/

/*let users = [
	{firstname: 'Денис', lastname: 'Соловьёв', age: 22, middlename: 'Михайлович'},
	{firstname: 'Юлия', lastname: 'Лахно', age: 19, middlename: 'Сергеевна'},
	{firstname: 'Дмитрий', lastname: 'Прискока', age: 18},
	{firstname: 'Иван', lastname: 'Бунин', age: 17},
	{firstname: 'Сергей', lastname: 'Борщов', age: 26},
	{firstname: 'Иван', lastname: 'Лотков', age: 26},
	{firstname: 'Людмила', lastname: 'Сидорова', age: 16},
	{firstname: 'Камилла', lastname: 'Абекян', age: 15},
	{firstname: 'Сергей', lastname: 'Назаров', age: 30},
	{firstname: 'Дмитрий', lastname: 'Иванов', age: 32}
];

let lessThen18 = users.filter(item => item.age < 18);

console.log(lessThen18);

users.forEach(item => {
	if (item.middlename !== undefined) {
		item.fullName = item.firstname + ' ' + item.middlename + ' ' + item.lastname;
	} else {
		item.fullName = item.firstname + ' ' + item.lastname;
	}
})

console.log(users);

let onlyFullName = users.map(item => item.fullName);

console.log(onlyFullName);

// 2. Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:

console.log( cube(2) ); // 8

// а:

function cube(number) {
	let x = 1;

	for (let i = 0; i < 3; i++) {
		x *= number;
	}

	return x;
}

// б:

function cube(number, n = 3) {
	return (n == 1) ? number : (number * cube(number, n - 1));	
}

// 3. Напишите функцию extraCube, которая принимает в качестве параметра или число, или массив числовых значений и возвращает либо куб числа, либо массив кубов, в зависимости от типа входящего параметра (typeof). Для расчета куба числа вместо встроенного метода Math.pow используйте собственную функцию.

console.log( extraCube(2) ); // 8
console.log( extraCube([0, 1, 2, 3]) ); // [0, 1, 8, 27]

function extraCube(argument, n = 3) {
	if (typeof argument === 'number') {
		return (n == 1) ? argument : (argument * extraCube(argument, n - 1));
	} else if (typeof argument === 'object') {
		let cubeArray = [];

		for (let i = 0, x = 1; i < argument.length; x = 1, i++) {
			for (let j = 0; j < 3; j++) {
				x *= argument[i];
			}

			cubeArray.push(x);
		}

		return cubeArray;
	}
}

// 4. Напишите функцию ask с тремя параметрами: question, defaultValue, callback. Функция ask запрашивает с помощью prompt вопрос question, ответ по умолчанию - defaultValue. Что делать с полученным значением - определяет callback

ask('How old are you?', '10', function(response) {
	console.log(response);
});

function ask(question, defaultValue, callback) {
	let ask = prompt(question, defaultValue);

	callback(ask);
}

// 5. Создайте объект, описывающий html-разметку. Напишите функцию, которая добавляет разметку в произвольный контейнер на странице.

const section = [
	{childNodes: [{
			content: 'Array.prototype.every()',
			tag: 'h1'
		},
		{
			content: 'Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.',
			tag: 'p'
		}],
	tag: 'article'
	},
	{childNodes: [{
			content: 'Array.prototype.some()',
			tag: 'h1'
		},
		{
			content: 'Метод some() проверяет, удовлетворяет ли хоть какой-нибудь элемент массива условию, заданному в передаваемой функции.',
			tag: 'p'
		}],
	tag: 'article'
	},
	{childNodes: [{
			content: 'Array.prototype.reduce()',
			tag: 'h1'
		},
		{
			content: 'Метод reduce() применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.',
			tag: 'p'
		}],
	tag: 'article'
	},
	{childNodes: [{
			content: 'Array.prototype.reduceRight()',
			tag: 'h1'
		},
		{
			content: 'Метод reduceRight() применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению.',
			tag: 'p'
		}],
	tag: 'article'
	}
];

console.log(section);

function addNodes() {
	let nodeSection = document.createElement('section');
	nodeSection.setAttribute('id', 'methods');
	document.body.appendChild(nodeSection);

	for (let i = 0; i < section.length; i++) {
		let sectionChildNode = document.createElement(section[i].tag);
		document.querySelector('section').appendChild(sectionChildNode);

		for (let j = 0; j < section[i].childNodes.length; j++) {
			let articleChildNodes = document.createElement(section[i].childNodes[j].tag);
			document.querySelector(`article:nth-child(${1 + i})`).appendChild(articleChildNodes);
			articleChildNodes.innerText = section[i].childNodes[j].content;
		}
	}
}

addNodes();

// 6. Напишите функцию checkNumber, которая получает на вход как параметр массив любых значений и возвращает true, если все элементы - числа, и false - если в массиве хотя бы  одно не число. Для проверки массива используйте метод every или some

console.log( checkNumber([1, 2, '3', 'a']) ); // false
console.log( checkNumber([1, 2, '3', '4']) ); // true

function checkNumber(someArray) {
	if (someArray.some(elem => isNaN(+elem))) {
		return false;
	} else {
		return true;
	}
}*/


// Замыкания

// 1. Используя замыкание, напишите функцию createTimer, которая использует метод performance.now() для получения текущей временной метки и служит для замера времени выполнения другого кода:

/*function createTimer() {
	let t0 = performance.now();

	return function() {
		let t1 = performance.now();

		return t1 - t0;
	}	
}

var timer = createTimer();
alert('!');  // код, время выполнения которого нужно измерить
alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()*/

// 2. Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный параметр и возвращает функцию, которая добавляет к первому параметру второй. Функция работает по следующему принципу:

function createAdder(param1) {
	return function(param2) {
		return param1 + param2
	}
}

var hello = createAdder('Hello, ');
alert( hello('John') ); // Hello, John
alert( hello('Harry') ); // Hello, Harry

var plus = createAdder(5);
alert( plus(1) ); // 6
alert( plus(5) ); // 10