// Задание 1

/*'use strict';

var x = prompt('Введите Х', '1');
var y = prompt('Введите Y', '1');

alert( `Сумма: ${+x + +y}` );*/

// Задание 2

/*let x1 = 10,
	y1 = x1 * 3,
	z1 = x1 + y1;

alert(x1);
alert(y1);
alert(z1);*/

// Задание 3

/*let firstName = prompt('Введите имя', 'John'),
	lastName = prompt('Введите фамилию', 'Doe');

alert( `What\'s up ${firstName.toUpperCase() + ' ' + lastName.toUpperCase()}` );*/

// Задание 4

/*let x2 = Number(prompt('Введите X', '1')),
	y2 = Number(prompt('Введите Y', '1'));

alert(`${x2 * y2}, ${x2 / y2}, ${x2 - y2}, ${x2 + y2}`);*/

// Задание 5

/*let z2 = prompt('Введите число', '1');

alert(Boolean(z2 % 2));*/

// Задание 6

/*const multiplier = 1024;

let gigabytes = Number(prompt('Введите количество гигабайт', '1'));

alert(`В ${gigabytes} Гбайт ${gigabytes * multiplier} Мбайт = ${gigabytes * Math.pow(multiplier, 2)} Кбайт = ${gigabytes * Math.pow(multiplier, 3)} Байт`);

let megabytes = Number(prompt('Введите количество мегабайт', '1'));

alert(`В ${megabytes} Мбайт ${megabytes * multiplier} Кбайт = ${megabytes * Math.pow(multiplier, 2)} Байт`);

let kilobytes = Number(prompt('Введите количество килобайт', '1'));

alert(`В ${kilobytes} Кбайт ${kilobytes * multiplier} Байт`);*/

// Задание 7

/*let allApples = Number(prompt('Сколько яблок было у Чжуан-Цзы?', '1')),
	eatenApples = Number(prompt('Сколько яблок съел Цзэн-Цзы?', '1'));

alert('Чжуан-Цзы обвиняет Цзэн-Цзы в том, что он съел все яблоки, но Цзэн-Цзы возражает.');
alert('Правду ли говорит Цзэн-Цзы?');
alert(`Ответ: ${Boolean((allApples - eatenApples) % 2)}`);*/

// Задание 8

/*let colomnHeight1 = parseFloat(prompt('Введите высоту первой колонки в формате "50px"')),
	colomnHeight2 = parseFloat(prompt('Введите высоту второй колонки в формате "50px"')),
	colomnHeight3 = parseFloat(prompt('Введите высоту третьей колонки в формате "50px"'));
	

alert(Math.max(colomnHeight1, colomnHeight2, colomnHeight3));*/

// Задание 9

/*let distance = 384400,
	speed = prompt('Введите скорость полёта корабля в км/ч');

alert(`Время, за которое корабль долетит до Луны: ${distance / speed} ч`);*/

// Задание 10

let x3 = Math.round(Math.random() * 100),
	y3 = prompt('Введите целое число', '1');

alert(`x3 < y3 = ${Boolean(x3 < y3)}, x = ${x3}, y = ${y3}`);
