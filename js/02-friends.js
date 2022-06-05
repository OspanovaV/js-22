/*
 * Работа с коллекцией (массивом объектов)
 */
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

console.table(friends);

/*
 * Ищем друга по имени
 */

const findFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    // console.log(friend);
    // console.log(friend.name);

    if (friend.name === friendName) { /* свойство name в обьекте friend равно параметру friendName*/
      return 'НАШЛИ!!!';
    }
  }
  return 'НЕ НАШЛИ :(';
};

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/*
 * Получаем имена всех друзей
 */

const getAllNames = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    console.log(friend.name);

    names.push(friend.name);//пушим друзей 
  }

  return names;
};

// console.log(getAllNames(friends));

/*
 * Получаем имена только друзей которые онлайн
 */
const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];//пустой массив куда будем пушить

  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.online);

    if (friend.online) { //проверка(если друг онлайн тоже самое что friend.online === true(були так не расписываем))
      onlineFriends.push(friend);// добавляем весь обьект друга
    }
  }
  return onlineFriends; //возвращаем всех друзей, которые онлайн
};

// console.log(getOnlineFriends(friends));


/*
* Получаем имена только друзей которые офлайн
*/

const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {//получаем доступ к каждому другу
    console.log(friend.online);

    if (!friend.online) { //если друг не онлайн(false)
      offlineFriends.push(friend);
    }
  }
  return offlineFriends;
};

// console.log(getOfflineFriends(friends));

/* 
*создать 2 массива онлайн и офлайн (друзей по статусу)
*если тру - в первый, если нет - во второй
*/

const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = { //создаем переменную и в ней два пустых массива
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {//перебираем (получаем доступ к друзьям)
    if (friend.online) { //если друг онлайн
      friendsByStatus.online.push(friend); //пушим в пустой массив online: []
      continue; //иди на следующую итерацию
    }
    friendsByStatus.offline.push(friend); //если нет то пушим в offline: []

    // const key = friend.online ? 'online' : 'offline';
    // friendsByStatus[key].push(friend);
  }

  return friendsByStatus;
};

console.log(getFriendsByStatus(friends));
