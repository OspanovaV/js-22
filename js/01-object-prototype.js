/*
 * Прототип объекта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов (пишем с конца цепочки)
 * - Переопределять прототипы нельзя
 */

// const objC = {
//   z: 5,
// };

// const objB = Object.create(objC);//это делает пустой обьект у которого прототипом будет objC и запишет в переменную objB
// objB.y = 2;//теперь можем записать в него собственное свойство

// const objA = Object.create(objB);//сделай новый обьект и пусть его прототипом будет objB
// objA.x = 1;

// console.log(objA.z);
// objA.x = 1000;//тут перезаписывается собственное свойство

// console.log('objA', objA);

// console.log(objA.hasOwnProperty('x'));

// const dummyObj = Object.create({ message: 'Это свойство объекта протортипа' });
// dummyObj.message = 'Это собственное свойство объекта';
// console.log('dummyObj', dummyObj);

// console.log(dummyObj.message);

//  'Это собственное свойство объекта'
//  'Это свойство на объекте-прототипе'

/*
 * Алгоритм поиска свойства в цепочке прототипов:
 * 1. Поиск ключа    начинается в собственных свойствах
 * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
 * 3. Поиск ключа прекращается при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства
 */

// const objA = Object.create({ z: 5 });
// objA.y = 100;
// console.log('objA', objA);

// console.log(objA.x);
