// Level Up

// 1. Поиск элементов DOM (объектной структуры документа) с использованием нативных методов JS

let listFirstNames = ['Богдан', 'Даниил', 'Денис', 'Дмитрий', 'Иван', 'Макар', 'Матвей', 'Марк', 'Александр', 'Тимофей', 'Ярослав','Арина', 'Анна', 'Валерия', 'Дарья', 'Ева', 'Злата', 'Мария', 'Милана', 'Полина', 'София', 'Соломия'];

let listLastNames = ['Иванов', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Петров', 'Соколов', 'Михайлов', 'Новиков', 'Фёдоров', 'Морозов', 'Волков', 'Алексеев', 'Лебедев', 'Семёнов', 'Егоров', 'Павлов', 'Козлов', 'Степанов', 'Николаев', 'Орлов', 'Андреев', 'Макаров', 'Никитин', 'Захаров'];

let listMiddleNames = ['Александрович', 'Алексеевич', 'Анатольевич', 'Андреевич', 'Антонович', 'Аркадьевич', 'Арсеньевич', 'Артемович', 'Афанасьевич', 'Богданович', 'Борисович', 'Вадимович', 'Валентинович', 'Валериевич', 'Васильевич', 'Викторович', 'Витальевич', 'Владимирович', 'Всеволодович', 'Вячеславович', 'Гаврилович', 'Геннадиевич', 'Георгиевич', 'Глебович', 'Григорьевич'];

let listPhones = ['375256612939', '375292308770', '380504180697', '380632829292', '380672176010', '380672176020', '380672176030', '380673557777', '380931777772', '380937027555', '380937028555', '380963447777', '380968777777', '380984957269', '4433', '447624803018', '447624806152', '447624806153', '4947', '5555', '77017333190', '77019381234', '77027773690', '77057163877'];

let listCity = ['Винница', 'Киев', 'Ивано-Франковск', 'Черновцы', 'Львов', 'Харьков', 'Донецк', 'Севастополь', 'Хмельницкий', 'Одесса', 'Ялта', 'Сумы', 'Славутич', 'Симферополь', 'Ровно', 'Южное', 'Ужгород', 'Переяслав-Хмельницкий', 'Измаил', 'Борисполь', 'Николаев', 'Коломыя', 'Мукачево', 'Луцк'];


let usersArray = [];

for (let i = 0; i < 20; i++) {
	usersArray.push(listFirstNames[i] + ' ' + listMiddleNames[i] + ' ' + listLastNames[i])
}


let birthdayDates = [];

for (let i = 0; i < 20; i++) {
	let newDate = new Date();

	newDate.setFullYear(newDate.getFullYear() - i);
	birthdayDates.push(newDate.toLocaleDateString());
}


let tableRows = document.querySelectorAll('tr'); // Собрали все строки <tr>


for (let i = 0; i < tableRows.length; i++) {
	let tableCells = tableRows[i].querySelectorAll('td'); // Собрали все ячейки <td> из итерируемой строки
	tableCells[0].innerText = usersArray[i]; // Запонили первую ячейку ФИО
	tableCells[1].innerText = listCity[i]; // Заполнили вторую ячейку телефоном
	tableCells[2].innerText = listPhones[i]; // Заполнили третью ячейку городом
	tableCells[3].innerText = birthdayDates[i];
}


let tableHeader = ['ФИО', 'Город', 'Телефон', 'Дата рождения'];

let nodeFirstTr = document.createElement('tr'),
    theFirstChild = document.querySelector('#root > table').firstChild;

document.querySelector('#root > table').insertBefore(nodeFirstTr, theFirstChild);

for (i = 0; i < tableHeader.length; i++) {
    let nodeTh = document.createElement('th');

    nodeTh.innerHTML = tableHeader[i]

    document.querySelector('#root > table > tr').appendChild(nodeTh);
}

document.querySelector('#root > table').style.cssText = "margin: 0 auto; border-collapse: collapse";

for (let i = 0; i < tableRows.length; i++) {
	var tableCols = tableRows[i].querySelectorAll('td');

	for (let j = 0; j < tableCols.length; j++) {
		if (i > -1 && i < 6) {
			tableCols[j].style.cssText = "border: 1px solid black; hight: 10px; width: 10px; background-color: #106B63";
		} else if (i > 5 && i < 9) {
			tableCols[j].style.cssText = "border: 1px solid black; hight: 10px; width: 10px; background-color: #E7C610";
		} else if (i > 8 && i < 12) {
			tableCols[j].style.cssText = "border: 1px solid black; hight: 10px; width: 10px; background-color: #C64A08";
		} else if (i > 11 && i < 15) {
			tableCols[j].style.cssText = "border: 1px solid black; hight: 10px; width: 10px; background-color: #B43100";
		} else {
			tableCols[j].style.cssText = "border: 1px solid black; hight: 10px; width: 10px; background-color: #102173";
		}

		if(j > 3) {
			tableRows[i].removeChild(tableCols[j]);
		}
	}
}

document.querySelector('[border]').remove();

// 2. Создайте три ассоциативных массива (объекта), в каждом из которых есть поля firstname, lastname, city, phone и birthday

let user1 = {
	firstname: 'Денис',
	lastname: 'Соловьёв',
	city: 'Харьков',
	phone: '099 552 57 08',
	birthday: '29-05-1997'
};

let user2 = {
	firstname: 'Михаил',
	lastname: 'Иванов',
	city: 'Москва',
	phone: '066 123 45 67',
	birthday: '01-01-1970'
};

let user3 = {
	firstname: 'Джон',
	lastname: 'Доу',
	city: 'Ереван',
	phone: '066 123 45 67',
	birthday: '01-01-1970'
};


user1.middlename = 'Михайлович';
user2.middlename = 'Афанасьевич';


let users = [];

users.push(user1, user2, user3);

console.log(users);

for (let i = 0; i < users.length; i++) {
	if (i > -1 && i < 2) {
		users[0].fullName = users[0].firstname + ' ' + users[0].middlename + ' ' + users[0].lastname;
		users[1].fullName = users[1].firstname + ' ' + users[1].middlename + ' ' + users[1].lastname;
	} else {
		users[2].fullName = users[2].firstname + ' ' + users[2].lastname;
	}
}

console.log(users);


const usersTable = document.createElement('table');
document.body.appendChild(usersTable);
usersTable.setAttribute('class', 'task_2');

for (let i = 0; i < users.length; i++) {
	let nodeTr = document.createElement('tr');
	document.querySelector('.task_2').appendChild(nodeTr);

	for (let j = 0; j < 4; j++) {
		let nodeTd = document.createElement('td');
		document.querySelector('.task_2 > tr:last-child').appendChild(nodeTd);
	}
}

let tableRows2 = document.querySelectorAll('.task_2 > tr');

for (let i = 0; i < tableRows2.length; i++) {
	let tableCells = tableRows2[i].querySelectorAll('td');

	tableCells[0].innerText = users[i].fullName;
	tableCells[1].innerText = users[i].city;
	tableCells[2].innerText = users[i].phone;
	tableCells[3].innerText = users[i].birthday;
}

document.querySelector('.task_2').setAttribute('border', '1');
document.querySelector('.task_2').style.cssText = "margin: 0 auto; border-collapse: collapse; margin-top: 50px";

let matchObj = {
	firstname: 'Имя',
	lastname: 'Фамилия',
	city: 'Город',
	phone: 'Телефон',
	birthday: 'Дата рождения',
	middlename: 'Отчество',
	fullName: 'ФИО'
}

let nodeFirstTr2 = document.createElement('tr'),
    theFirstChild2 = document.querySelector('.task_2').firstChild;

document.querySelector('.task_2').insertBefore(nodeFirstTr2, theFirstChild2);

for (i = 0; i < 4; i++) {
    let nodeTh = document.createElement('th');

    if (i === 0) {
    	nodeTh.innerHTML = matchObj.fullName;
    } else if (i === 1) {
    	nodeTh.innerHTML = matchObj.city;
    } else if (i === 2) {
    	nodeTh.innerHTML = matchObj.phone;
    } else {
    	nodeTh.innerHTML = matchObj.birthday;
    }
    
    document.querySelector('.task_2 > tr').appendChild(nodeTh);
}