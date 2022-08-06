import '../css/common.css';
//пишем иподром
const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

let raceCounter = 0; //переменная для номера заезда
const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),//по класу и в нём к тегу tbody
};

refs.startBtn.addEventListener('click', onStart);//запускаем по клику всех лошадей
//стартует гонка
function onStart() {
  raceCounter += 1;//при клике увеличивам заезд на 1
  const promises = horses.map(run);//массив промисов(проходимся по массиву с лошадями и для каждой запускаем функцию run)

  updateWinnerField('');//очищаем сообщение о предыдущем победителе
  updateProgressField('🤖 Заезд начался, ставки не принимаются!');//сообщение о начале заезда
  determineWinner(promises);//находим победителя
  waitForAll(promises);//ожидаем пока все лошади прибегут(окончание заезда)
}
//функция находит победителя
function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {//ожидает выполнения из всех первого промиса и отдаёт результат
    updateWinnerField(`🎉 Победил ${horse}, финишировав за ${time}
    времени`);//вызываем функцию с обьявлением покажи победителя
    updateResultsTable({ horse, time, raceCounter });//вызываем функцию, которая запишет результат в таблицу
  });
}
//функция ожидает пока прибегут все лошади(закончится забег)
function waitForAll(horsesP) {
  Promise.all(horsesP).then(() => {//ожидает выполнения всех промисов(все лошади прибежали)
    updateProgressField('📝 Заезд окончен, принимаются ставки.');//обьявляем новый заезд
  });
}
//выводит сообщение о победителе
function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}
//выводит сообщение на экран что заезд начался
function updateProgressField(message) {
  refs.progressField.textContent = message;
}
//выводим данные о поебедителе в таблицу
function updateResultsTable({ horse, time, raceCounter }) {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr); //добавить в HTML в конец.tableBody
}

//функция один конь побежал
function run(horse) { //передаем имя лошади
  return new Promise(resolve => { //вернём промис
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });//результат финиша будет имя лошади и время
    }, time);
  });
}
//функция получает время за которое лошадь будет бегать
function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/*
 * -статические методы конструктора Promise
 * Promise.race([]) для ожидания первого выполнившегося промиса

 * Promise.all([]) для ожидания всех промисов
 */