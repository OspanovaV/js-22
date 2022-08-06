/*
 *Промис-обещание может быть выполнено с каким-то результатом либо отклонено с ошибкой
 промис асинхронный
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

//  //new Promise создаёт обещание всегда есть два параметра: resolve(успешно выполнено), reject(выполнено с ошибкой) 
// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5; //генетим случайное число и сравниваем  > 0.5

//   setTimeout(() => {
//     if (canFulfill) { //если true то промис выполнен успешно
//       resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
//     }

//     reject('Промис выполнился с ошибкой (отклонён, rejected)'); //иначе выполнен с ошибкой
//   }, 1000);
// });

// у промиса на прототипе есть метод then (если этот промис выполнится успешно тогда сделай
//вот эту функцию: promise.then(    это планировка отложенной функции она выполнится асинхронно
//                   result => {
//                    console.log(`✅ ${result}`); успешно выполнен
//                   },
//                   error => {
//                    console.log(`❌ ${error}`);  выполнен с ошибкой
//                   }
//                 );

//сделаем тоже самое, но вынесем параметры функции в отдельные функции
promise.then(onFulfilled, onRejected); //функция с двумя аргументами

function onFulfilled(result) {
  console.log('onFulfilled -> onFulfilled');
  console.log(`✅ ${result}`);
}

function onRejected(error) {
  console.log('onRejected -> onRejected');
  console.log(`❌ ${error}`);
}

/*
 * Цепочки промисов (chaining)
.then на своё место врзвращает промис этот промис выполняется успешно с тем значением, которое мы ретёрним
 * Promise.prototype.catch(error) //применяем .catch будем отлавливать ощибки
 * Promise.prototype.finally() //в самом конце функция без аргументов выполняется в любом  
 */

//new Promise создаёт обещание всегда есть два параметра: resolve(успешно выполнено), reject(выполнено с ошибкой) 
const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5; //генетим случайное число и сравниваем  > 0.5

  setTimeout(() => {
    if (canFulfill) { //если true то промис выполнен успешно
      resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
    }

    reject('Промис выполнился с ошибкой (отклонён, rejected)'); //иначе выполнен с ошибкой
  }, 1000);
});

//применяем .catch будем отлавливать ощибки
promise
  .then(onFulfilled)//передаём обработку только успешного выполнения промиса
  .then(x => {
    console.log(x);

    return 10;
  })
  .then(y => {
    console.log(y);
  })
  .catch(error => console.log(error))//ловим ошибку один раз в конце цепочки
  .finally(() => console.log('Я буду выполнен в любом случае'));//в самом конце функция без аргументов выполняется в любом случае

  //финальная логика (базовый синтаксис):
  // 1. конструктор промис (new Promise) создаёт новый промис
  // 2. функция setTimeout() контролирует будет ли он выполняться успешно или с ошибкой
  // 3. то что мы передаём в resolve или в reject мы получим внутри .then, .catch и .finally (используем promise 
  //    добавляем .then(onFulfilled)- если успешно) и .catch - если с ошибкой и добавить .finally - выполнить в любом случае