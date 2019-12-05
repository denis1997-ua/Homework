// Задание 1. Создайте объект person, описывающий персону, с произвольным количеством произвольных полей. С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.

var person = {
	firstname: 'John',
	'last name': 'Doe',
	age: '30'
};

var feature = prompt('Введите свойство объекта', 'firstname');

if (feature in person) {
	alert(person[feature]);
} else {
	person[feature] = prompt('Введите значение указанного свойства', 'красный');
}

console.log(person);

// Задание 2. Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.

var phoneModel = {};

phoneModel.brand = prompt('Введите бренд телефона', 'Apple');
phoneModel.model = prompt('Введите модель телефона', 'iPhone 11');
phoneModel.color = prompt('Введите цвет телефона', 'черный');

console.log(phoneModel);

person.telephoneModel = phoneModel;

console.log(person);

// Задание 3. Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется либо delete, либо update. В зависимости от указанного действия, удаляйте или добавляйте (редактируйте) свойство в объекте персоны (которая уже имеет телефон). Какое именно свойство удалять или добавлять - также читается из prompt. Какое значение будет у добавленного свойства - тоже берется из prompt. При нажатии на Отмена при появлении prompt редактирование person заканчивается. И обновленные данные распечатываются в консоли.

for (; ; ) {
	var objectAction = prompt('Введите "delete" или "update"', 'delete');

	if (objectAction === null) break;

	if (objectAction === 'delete') {
		var featureDelete = prompt('Какое свойство удалить?', 'firstname');

		if (featureDelete !== null) {
			delete person[featureDelete];
		} else {
			console.log(person); break;
		}
	} else {
		var featureAdd = prompt('Какое свойство добавить?', '');

		if (featureAdd !== null) {
			person[featureAdd] = prompt('Введите значение свойства', '');
		} else {
			console.log(person); break;
		}
	}
}

// Задание 4. Динамически (скриптом) создайте HTML элемент <dl>. Переберите в цикле (for..in) сгенерированный ранее объект person, добавляя dt - для имени свойства и dd - для значения свойства.

let dlElement = document.createElement('dl');
document.body.appendChild(dlElement);

for (let key in person) {
	if (typeof person[key] !== 'string') {
		person[key] = 'Описание телефона';
	}

	let dtElement = document.createElement('dt');
	dlElement.appendChild(dtElement);
	let ddElement = document.createElement('dd');
	dlElement.appendChild(ddElement);

	dtElement.innerText = key;
	ddElement.innerText = person[key];
}

// Задание 5. Создайте объект dates для хранения дат. Первая дата – позавчера. Вторая дата – текущая дата (new Date) минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат объекта dates.

let date1 = new Date(),
	date2 = new Date();

let dates = {
	firstDate: date1.toDateString(date1.setDate(date1.getDate() - 2)),
	secondDate: date2.toDateString(date2.setDate(date2.getDate() - 365))
}

console.log(dates);

let date = prompt('Введите дату в формате yyyy-MM-dd', '');

if (new Date(date) >= Date.parse(dates.secondDate) && new Date(date) <= Date.parse(dates.firstDate)) {
	alert('Дата попадает в диапазон');
} else {
	alert('Дата не попадает в диапазон')
}

// Задание 6. Создайте структуру данных, полностью описывающую html-разметку картинки. С помощью методов браузера добавьте ее на страницу со всеми атрибутами, читая значения свойств из созданного объекта.

let img = {
	src: 'https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif',
	alt: '',
	style: 'border: 1px solid #ccc',
	width: '200'
}

let image = document.createElement('img');
document.body.appendChild(image);

for (let key in img) {
	image.setAttribute(key, img[key]);
}