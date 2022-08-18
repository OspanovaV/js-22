/*
 * - Пагинация
 *   - страница и кол-во на странице
 * - Загружаем статьи при сабмите формы
 * - Загружаем статьи при нажатии на кнопку «Загрузить еще»
 * - Обновляем страницу в параметрах запроса
 * - Рисуем статьи
 * - Сброс значения при поиске по новому критерию
 *
 * https://newsapi.org/
 * 4330ebfabc654a6992c2aa792f3173a3
 * http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 */

import articlesTpl from './templates/articles.hbs';
import './css/common.css';
import NewsApiService from './js/news-service';
import LoadMoreBtn from './js/components/load-more-btn';//подключаем спинер загрузки

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
};
//спинер загрузки
const loadMoreBtn = new LoadMoreBtn({ //когда делаем экземпляр то вызываем constructor в файле load-more-btn.js передали hidden: true
  selector: '[data-action="load-more"]',
  hidden: true,
});
const newsApiService = new NewsApiService();//новый запрос

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);//

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;//записываем новый запрос поиска

  if (newsApiService.query === '') {//если в поиске пусто
    return alert('Введи что-то нормальное');//выведи сообщение
  }

  loadMoreBtn.show(); //показать кнопку
  newsApiService.resetPage();//при новом запросе(сабмите) сбрасываем на page1
  clearArticlesContainer();//очищаем контейнер, когда делаем новый запрос(при сабмите)
  fetchArticles();//отправляем новый запрос
}

function fetchArticles() { //при клике на loadMoreBtn
  loadMoreBtn.disable();//скрываем кнопку
  newsApiService.fetchArticles().then(articles => {//когда запрос успешный
    appendArticlesMarkup(articles);//рендерим статьи
    loadMoreBtn.enable();//делаем кнопку "загрузить больше" активной
  });
}
//рендерим разметку
function appendArticlesMarkup(articles) {//получает articles
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));//в контейнер вставляет результат вызова разметка шаблона
}
//функция очистки контейнера
function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}
