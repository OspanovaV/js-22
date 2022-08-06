/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком (результат промиса можно получить только внутри .then и .catch)
 * - Функция которая возвращает промис
 */

// const makeOrder = dish => {
//   const DELAY = 1000;//через какое время промис выполнится успешно либо с ошибкой(resolve либо reject)

//   return new Promise((resolve, reject) => { //возвращаем результ вызова конструктора Promise
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve(`✅ Вот ваш заказ: ${dish}`);
//       }

//       reject('❌ Упс, у нас закончились продукты');
//     }, DELAY);
//   });
// };

// makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError); //вызывается функция  makeOrder на место вызова 
//возвращается промис и нему цепляем .then и .catch результат этого промиса есть в вызове либо onMakeOrderSuccess либо onMakeOrderError  

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

/*
 * Промисификация «синхронных» функций (выполняется мгновенно)
 * - Promise.resolve() //статический метод создаёт промис, который резолвится мгновенно с указанным результатом
 * - Promise.reject()
 */

// const makeOrder = dish => {
//   return Promise.resolve(`✅ Вот ваш заказ: ${dish}`);//резолвится мгновенно с указанным результатом
// };

// makeOrder('пирожок').then(onMakeOrderSuccess);//возвращает промис

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

/*
 * Покемоны с https://pokeapi.co/
// метод fetch -запрос на сервер (функция встроенная в браузер бежит на сервер и возвращает промис)
function fetch (url) { //fetch принимает url
    return new Promise(...) //и возвращает промис
}
} 
 */

// const fetchPokemonById = id => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());//метод fetch возвращает промис
// };

// fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);//вызываем функцию, указываем Id, цепляем .then- всё хорошо или .catch- всё плохо

// fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);

// fetchPokemonById(3).then(onFetchSuccess).catch(onFetchError);

// function onFetchSuccess(pokemon) {
//   console.log('onFetchSuccess -> onFetchSuccess');
//   console.log(pokemon);
// }

// function onFetchError(error) {
//   console.log('onFetchError -> onFetchError');
//   console.log('Это в блоке catch');
//   console.log(error);
// }
/*
*
*/
// makePromise
// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve('✅ Куку это resolve');
//       }

//       reject('❌ все пропало это reject');
//     }, 2000);
//   });
// };

// makePromise() //сделай промис
//   .then(result => console.log(result)) //если он будет успешный =>вызывай эту функцию
//   .catch(error => console.log(error));// а если с ошибкой то эту
