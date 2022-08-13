/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса-pokemon?limit=100&offset=200(начинаются с ?имя=значение&имя=значение)
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

import '../css/common.css';
import pokemonCardTpl from '../templates/pokemon-card.hbs';
import API from './api-service';//импорт функций из файла где находятся базовый URL нашего проекта 
import getRefs from './get-refs';//импорт функций из файла где находятся наши переменные

const refs = getRefs();//вызываем функцию получения переменных, которая находится в другом файле
//обработчик события отправки формы
refs.searchForm.addEventListener('submit', onSearch);

//функция при отправке формы делаем http запрос
function onSearch(e) {
  e.preventDefault();//запрет перезагрузки при отправке формы

  //получим значение инпута во время сабмита формы
  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;//получим ссылку на.value инпута-берём текст из инпута(свойство .query это name нашего инпута в HTML)

  API.fetchPokemon(searchQuery)//вызываем функцию при сабмите фориы
    .then(renderPokemonCard)//если успешно то передаём ссылку на функцию рендерим разметку и приходит pokemon
    .catch(onFetchError)//если ошибка то вызови функцию onFetchError
    .finally(() => form.reset());//в любом случае очисти форму
}
//рисование интерфейса(рендерим разметку) если успешно
function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);//создаём разметку
  refs.cardContainer.innerHTML = markup;//вешаем разметку в HTML
}
//выводим сообщение если ошибка
function onFetchError(error) {
  alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
}

// =========================================

const url = 'https://newsapi.org/v2/everything?q=cars'; //первый параметр для fetch это url (куда делать запрос)
const options = { //второй параметр 
  headers: {  //заголовок
    Authorization: '4330ebfabc654a6992c2aa792f3173a3', //обьект заголовка
  },
};

fetch(url, options)
  .then(r => r.json())
  .then(console.log);
