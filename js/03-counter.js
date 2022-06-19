//калькулятор
const counter = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;//увеличить на 1
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;//уменьшить на 1
    },
};

const decrementBtn = document.querySelector('.js-decrement');//ссылка на кнопку .js-decrement
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value');// ссылка на абзац js-value

decrementBtn.addEventListener('click', function () {//передаем событие click и ф-цию которая будет вызвана при наступлении этого события
    console.log('Кликнули на декремент');

    counter.decrement();//вызываем в контексте обьекта counter(this будет ссылаться на counter
    console.log(counter);
    valueEl.textContent = counter.value;//обращаемся к свойству и присваиваем значение value
});

incrementBtn.addEventListener('click', function () {
    console.log('Кликнули на инкремент');

    counter.increment();
    console.log(counter);
    valueEl.textContent = counter.value;
});

console.log(window);
