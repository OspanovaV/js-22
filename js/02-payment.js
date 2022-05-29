/*
 * Посчитать общую сумму покупок в корзине
 */
// используем for со счетчиком так как нужно перезаписать элемент в массиве
const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// 2 сделать переменную total до цикла
let total = 0;

// 1 перебрать массив
// for (let i = 0; i < cart.length; i += 1) {
//   // console.log(cart[i]);
//   // 3 каждый элемент приплюслвать к total
//   total += cart[i];
//   // total = total + cart[i];
// }

for (const value of cart) {
  total += value;
}

console.log('Total: ', total);

// Добавить к каждому элементу по 10% налога и округлим результат 
// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
// }
// сделаем тоже самое с помощью for...of(просто доступ к елементу)
// for (let value of cart) {
//   value = Math.round(value * 1.1);
// }

// console.log(cart);
