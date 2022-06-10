/*
  * Замыкание
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */

const fnA = function (parameter) {
    const innerVariable = 'значение внутренней переменной функции fnA';

    const innerFunction = function () {
        console.log(parameter);
        console.log(innerVariable);
        console.log('Это вызов innerFunction');
    };

    return innerFunction;
};

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

/*
 * Поварёнок
 */
// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`);
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');

const makeSheff = function (name) {
    const innverVar = 555;
    const message = 'hello';

    const makeDish = function (dish) {
        console.log(message);
        console.log(innverVar);
        console.log(`${name} готовит ${dish}`);
    };

    return makeDish;
};

// const mango = makeSheff('Mango');

// console.dir(mango);

// mango('котлеты');
// mango('пирожок');

// const poly = makeSheff('Poly');

// console.dir(poly);

// poly('чай');
// poly('омлет');

// console.dir(mango);

/*
 * Округлятор 🤷‍♂️
 */

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// const rounder = function (number, places) {
//     return Number(number.toFixed(places)); //приводим к количеству знаков(places) после запятой
// };

// console.log(rounder(3.4567, 2)); //3.46
// console.log(rounder(3.4567, 3));//3.457
// console.log(rounder(5.1234, 2));//5.12
// console.log(rounder(3.4567, 3)); //3.457

//используем замыкание
const rounder = function (places) { //эта ф-ция дает количество знаков после запятой
    return function (number) {   //эта ф-ция получает само число
        return Number(number.toFixed(places)); //и возвращает число
    };
};

// const rounder2 = rounder(2); //эта ф-ция округляет до 2х знаков
// const rounder3 = rounder(3); //эта ф-ция округляет до 3х знаков

// console.dir(rounder2);
// console.dir(rounder3);

// console.log(rounder2(3.4567)); //вызываем ф-цию,передаем число и получаем нужное(3.46)
// console.log(rounder2(5.4512312312367));
// console.log(rounder3(3.4567));
// console.log(rounder2(5.1234));
// console.log(rounder3(3.4567));
// console.log(rounder3(10.67667));

/*
 * Приватные данные и функции - скрытие реализации, интерфейс
 */

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    let salary = baseSalary;//скрываем зарплату в этой функции, как отдельную переменную

    return { //возвращаем обьект функции, которая меняет
        raise(amount) {
            if (amount > 1000) { //если больше 1000
                return 'Ты офигел?';
            }

            salary += amount;
        },
        lower(amount) {
            salary -= amount;
        },
        current() {
            return `Текущая зарпалата ${employeeName} - ${salary}`;
        },
    };
};

const salaryManager = salaryManagerFactory('Mango', 5000);
//можем использовать методы(.current, .raise, которые внутри ф-ции) для доступа к данным в замыкании
console.log(salaryManager.current());

console.log(salaryManager.raise(10000000));

console.log(salaryManager.current());

// const myLibFactory = function () {
//     let value = 0;

//     const add = function (num) {
//         value += num;
//     };

//     return {
//         add: add,
//         getValue() {
//             return value;
//         },
//     };
// };

// const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());
