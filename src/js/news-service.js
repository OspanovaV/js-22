const API_KEY = '4330ebfabc654a6992c2aa792f3173a3';
const BASE_URL = 'https://newsapi.org/v2';
const options = {
  headers: {
    Authorization: API_KEY,
  },
};

export default class NewsApiService {
  constructor() { //.searchQuery меняется при сабмите формы
    this.searchQuery = '';//(свойство класса)когда делаем экземпляр тут будет пустая строка
    this.page = 1;//номер группы
  }

  fetchArticles() { //метод который забитает статьи
    const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

    return fetch(url, options)//возвращает результат fetch это промис
      .then(response => response.json())
      .then(({ articles }) => {
        this.incrementPage();//при успешном запросе для следующего запроса увеличиваем на 1 
        return articles;// значение промиса из посдеднего.then (это статьи) 
      });
  }

  incrementPage() { //увеличиваем группу ответов
    this.page += 1;
  }

  resetPage() { //сбрасываем группу в исходное состояние на 1 при новом запросе
    this.page = 1;
  }
//контролирует термин зпроса get и set для чтения и изменения из внешнего кода значение свойств
  get query() { //получить
    return this.searchQuery; 
  }

  set query(newQuery) { //записать
    this.searchQuery = newQuery;
  }
}
