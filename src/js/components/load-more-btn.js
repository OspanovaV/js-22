export default class LoadMoreBtn {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector);

    hidden && this.hide();//если hidden true то вызывает метод .hide (&& такая запись то же самое что и if) 
  }

  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    refs.label = refs.button.querySelector('.label');
    refs.spinner = refs.button.querySelector('.spinner');

    return refs;
  }
//показать кнопку
  enable() {
    this.refs.button.disabled = false;//делает кнопку активной
    this.refs.label.textContent = 'Показать ещё';//добавляет текст
    this.refs.spinner.classList.add('is-hidden');//прячет спиннер (вешаем класс is-hidden) 
  }
//кнопка не активна
  disable() {
    this.refs.button.disabled = true;//делает кнопку не активной
    this.refs.label.textContent = 'Загружаем...';//добавляет текст
    this.refs.spinner.classList.remove('is-hidden');//показать спиннер (с кнопки снимаем класс is-hidden)
  }
//показать кнопку
  show() {
    this.refs.button.classList.remove('is-hidden');//с кнопки снимаем класс is-hidden
  }
//спрятать кнопку
  hide() {
    this.refs.button.classList.add('is-hidden');//на кнопку вешаем класс is-hidden
  }
}
