/* Дан объект с городами и странами.

Написать функцию getCity. Эта функция (getCity) должна вернуть новый массив, элементы которого будут преобразованы в данный формат: <Столица> - это <Страна>.

Доступ к объекту может быть любым (через контекст, напрямую и т.д.)

Можно использовать Object.entries метод )

const result = getCity(); // ['Киев - это Украина', 'Нью-Йорк - это США', ... и т.д.] */

const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

function getCity() {
	return Object.keys(this).map((item,i) => `${item} - это ${Object.values(this)[i]}`);
}

const result = getCity.call(citiesAndCountries);
console.log(result);



/* Cоздать объект с названиями дней недели. 
Где ключами будут ru и en, a значением свойства ru будет массив с названиями дней недели на русском, а en - на английском.
После написать функцию которая будет выводить в консоль название дня недели пользуясь выше созданным объектом (доступ к объекту можно получить напрямую).

Все дни недели начинаются с 1 и заканичаются цифрой 7 (1- понедельник, 7 - воскресенье).

Функция принимает в аргументы 2 параметра:

lang - название языка дня недели
day - число дня недели
Можно вспомнить про метод indexOf(). А может можно и без него :)

------------------------------------------------

// Пример 1

function getNameOfDay(lang, datNumber){
    ... Your code
}

getNameOfDay('en', 7) // 'Sunday'

------------------------------------------------

// Пример 2

function getNameOfDay(lang, datNumber){
    
    ... Your code
}

getNameOfDay('ru', 3) // 'Среда' */

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница' , 'Суббота', 'Воскресенье'],
	ua: ['Понелеедельник', 'Втоенлелрник', 'Среенленда', 'Чеенлтверг', 'Пятненлица' , 'Суббенлота', 'Воселенкресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' , 'Saturday', 'Sunday'],
	}


function getNameOfDay(lang, datNumber){
		if (lang && datNumber > 0 && datNumber < 8) {
			return namesOfDays[lang][--datNumber];
		} else  console.log('Incodecrt data');
}

console.log(getNameOfDay('ua', 7)); 
console.log(getNameOfDay('ru', 3)) // 'Среда'

/* Написать универсальную функцию setProto, которая принимает в себя 2 аргумента (currentObj, protoObj). 
Функция должна устанавливать прототип (protoObj) для currentObj. 
То есть после вызова функции мы должны получить результат:
setProto(person1, person);
// Теперь прототипом для объекта person1 выступает объект person */

function setProto (currentObj, protoObj) {
	Object.setPrototypeOf(currentObj, protoObj);
}
const person11 = {
    name: 'Vlad'
};

const person111 = {
    age: 1
};

setProto(person111, person11);

console.log(person111.__proto__);//depricated
console.log(Object.getPrototypeOf(person111));


/* Создать базовый объек person. 
Этот объект должен выступать в роли прототипа для объекта person1.
В объекте person должны быть такие методы:

метод для установки имени и возвраста (setName, setAge)
метод для получения имени и возвраста (getName, getAge)
метод для валидации возраста (ageValidation)
person1.setName(...); // установили новое имя
person1.getName(); // имя

person1.setAge(...); // установили возраст
person1.getAge(); // получили возраст

Метод ageValidation вызывается при вывозе метода setAge (то есть внутри метода setAge). 
Метод ageValidation должен как-то проверить возраст, который мы вводим в setAge. 
Если возраст, который мы ввели, меньше 18, то записываем в age слово 'Validation Error',
 а есть введенный возраст больше 18, то вписываем в age это значение.

ageValidation только проверяет данные, он ничего не записывает (в ageValidation не должно быть this.age = age)

person1.setAge(1); // передать возраст можно как угодно
person1.getAge(); // 'Validation Error'

person1.setAge(20); // передать возраст можно как угодно
person1.getAge(); // Новое значение - 20 */


function Person(name, age) {

	this.age = 0;
	this.name = name;

    this.setName = function (name) {
        this.name = name;
    };

	this.setAge = function (age) {
		if (ageValidation(age)){
		return this.age = age;
		} else {
			console.log('Validation Error');
		}	
    };

	this.getAge = function () {
			return this.age;
        
    };

	this.getName = function () {
       return this.name;
    };

	ageValidation = function (age) {
		return (age > 18) ;	
	};
	
} 

let person1 = new Person();

person1.setName('serg'); // установили новое имя
console.log(person1.getName()); // имя

person1.setAge(36); // установили возраст
console.log(person1.getAge()); // получили возраст

person1.setAge(42); // передать возраст можно как угодно
console.log(person1.getAge());


person1.setAge(1); // передать возраст можно как угодно
person1.getAge(); // 'Validation Error'

