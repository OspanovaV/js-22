const API_KEY = '4330ebfabc654a6992c2aa792f3173a3';
const BASE_URL = 'https://newsapi.org/v2';
const options = {
  headers: {
    Authorization: API_KEY,
  },
};

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';//(свойство класса)когда делаем экземпляр тут будет постая строка
    this.page = 1;
  }

  fetchArticles() {
    const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

    return fetch(url, options)
      .then(response => response.json())
      .then(({ articles }) => {
        this.incrementPage();//при успешном запросе для следующего запроса увеличиваем на 1 
        return articles;
      });
  }

  incrementPage() { //увеличиваем страницу
    this.page += 1;
  }

  resetPage() { //сбрасываем страницу на 1 при новом запросе
    this.page = 1;
  }
//get и set для чтения и изменения из внешнего кода значение свойств
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
