/*
 * call - метод.call позволяет взять любую произвольную ф-цию и принудительно вызвать один раз в контексте любого выбранного обьекта 
и apply - позволяет делать тоже самое только синтаксис передачи аргументов метода записываем в []
 */
// const showThis = function (a, b, arr) {
//     console.log(a, b, arr);
//     console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//     a: 5,
//     b: 10,
// };
//метод.call позволяет взять любую ф-цию и принудительно вызвать один раз в контексте обьекта objA
// и можно еще задать множество различных аргументов
// showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

// const objB = {
//     x: 788,
//     y: 25,
// };

// showThis.call(objB, 1, 1, 2);
// showThis.apply(objB, [1, 1, 2]);

// showThis();

//есть одна функция и мы можем произвольное количество обьектов со свойством color изменить 
const changeColor = function (color) {
    console.log('changeColor -> this', this);
    this.color = color;//обьекту присваиваем  свойство color, которое сможем изменять 
};

const hat = {
    color: 'black',
};

// changeColor.call(hat, 'orange');//вызываем в контексте обьекта hat и присваиваем аргумент 'orange'
// console.log(hat);

const sweater = {
    color: 'green',
};

// changeColor.call(sweater, 'blue');
// console.log(sweater);

/*
 * bind -делает копию функции с привязанным контекстом
 */

const changeHatColor = changeColor.bind(hat); //делаем копию функции с привязанным обьектом hat
const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow');//вызываем функцию и присваиваем аргумент
// console.log(hat);

// changeSweaterColor('red');
// console.log(sweater);

/*
 * counter
 */

const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this);
        this.value += value;
    },
    decrement(value) {
        console.log('decrement -> this', this);
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
    operation(value);
};

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));

// console.log(counter);
