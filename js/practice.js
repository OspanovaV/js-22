// # Модуль 5. Занятие 10. Прототипы и классы
//класс или функция-конструктор - это базовый шаблон в котором мы описываем как должен выглядеть обьект и какой функционал он будет выполнять
//        это обычные функции в js, которые описывают шаблон обьекта, как он будет выглядеть и какие методы будет иметь
//*ключевое слово new дает возможность создать обьект по шаблону
//*когда мы запускаем ф-цию с ключевым словом new, создеется this = {} (с пустым обьектом)
//* возьми обьект (this), создай в нем ключ (.name) и запиши туда имя (= name)
//* автоматически ретёрнит this
//*все индивидуальные свойства храним в конструкторе(шаблоне)
//* а общие методы в прототипе

//*такая запись была до 2015года
//создаём функцию - конструктор для создания пользователей с одинаковыми данными(по шаблону сделай
//мне обьект с ключами два из них изменяются динамечески, а один - фиксированный)

// function User(name, age) { //создаем пользователей с двумя параметрами
//   // this = {} //у обычной функции this создается под капотом с пустым обьектом
//   this.name = name; //наполняем обьект ключами
//   this.age = age; // два динамических ключа(приходят из вне в виде аргументов)
//   this.status = "active"; // один фиксированный ключ(по дефолту при регистрации)


//   //   this.status = status; //передаём если будет разный статус
//   // return this; // this = {name, age, status} //ретёрнит this это обьект с ключами
// }

//добавим метод. это общий метод поэтому выносим его в прототип
// User.prototype.sayHello = function () { //этот метод в виде функции
//   console.log(`Hello, I am ${this.name}`); //которая в консоль выводит фразу
// };

// 1) User() // this = undefined || window  //этa ф-ция запускается в обычном js
// 2) new User() // this = {}   //а эта ф-ция запускается в режиме конструктора


/*
*перепишем эту функцию при помощи класса современная запись(так называемый "синтаксический сахар")
*/
// class User {
//   constructor(name, age, status) {//всё что находится в конструкторе-это индивидуальные свойства
//     // this = {} //у обычной функции this создается под капотом с пустым обьектом
//     this.name = name;
//     this.age = age;
//     this.status = "active";
//     // return this; // this = {name, age, status}
//   }

//   sayHello() {// так прописываем наш прототип (это общие свойства)
//     console.log(`Hello, I am ${this.name}`);
//   }
// }

//*вводим пользователей(запускаем функцию в виде конструктора при помощи ключевого слова new )
//const Bob = new User("Bob, 30"); //создаём разных пользователей //{name: "Bob", age: 30}
//прописываем логику
// // 1)  this = {} => {name: 'Bob"} => {name: 'Bob', age: 30} => {name: 'Bob', age: 30, status: 'active'}  => return this
// // 2) const Bob ={name: 'Bob', age: 30, status: 'active'}
// // 3) Bob.prototype = User.prototype //заходим в прототип
// // 4) Bob може користуватися методом SayHello()
//const Alice = new User("Alice, 25"); //{name: "Alice", age: 25}
//const Mary = new User("Mary", 20); //{name: "Mary", age: 20}

// function Array(...args) {
//   this.args = args;
//   this.length = args.length;
// }

// Array.prototype.map;
// Array.prototype.push;
// Array.prototype.filter;


// function Student(user) {
//   this.user = user;
// }

// const student = new Student(Bob);

// const numbers = [1, 2, 3, 4, 5];
// const numbers = new Array(1, 2, 3, 4, 5);

// const user = {
//     name: "Bob",
//     age: 30,
// }

// const user = new Object ()

// const name = "Bob".toUpperCase();

// const name = new String("Bob");

// Array
// Object
// String
// Number
// Boolean

// console.log(numbers);

// console.log(Bob);
// console.log(Alice);
// console.log(Mary);
// Bob.sayHello();
// Alice.sayHello();
// Mary.sayHello();

/*
*разберем пример с добавлением новых обций(# - обьявление приватных свойств, get - возможность считывать приватные свойства,
 set - возможность перезаписывать)
*/
// class User {
//   static Roles = { // Объявление и инициализация статического свойства (доступная классу и не доступна экземпляру)
//     ADMIN: "admin",
//     EDITOR: "editor",
//     STUDENT: "student",
//     MENTOR: "mentor",
//   };

//   //   static getRole(user) {
//   //     return user.role;
//   //   }

//   #email; // Обязательное объявление приватных свойств(приватный ключ нельзя считать и перезаписать)
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() { //получить доступ к защищенному полю #role через геттер(создает новый ключ в обьекте в котором дублируется информация с защищенноного ключа)
//     return this.#role; //и вывожу значение
//   }

//   set role(newRole) { //перезаписать защищенное поле  через сеттер(можем перезаписать ключ)
//     this.#role = newRole; // и дать ему новое значение
//   }
// }

// const mango = new User({//запускаем функцию и получаем экземпляр(обьект)с двумя аргументами
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango);
// // console.log(User.Roles);

// // console.log(mango.Roles); // undefined
// // console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// console.log(mango.email);//
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"

// # задачка. Добавить электронные адреса зарегистрированных пользователей
// class User {
//   static #takenEmails = []; (статический массив, который хранит всех зарегистрированных почт)

//   static isEmailTaken(email) { //проверяем есть ли такая почта в массиве
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email); //пушим почту в массив
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com")); // false
// console.log(User.isEmailTaken("mango@mail.com")); // true

// # Модуль 5. Занятие 10. Прототипы и классы

// ## Example 1 - Блоггер

// Напиши класс `Blogger` для создания обьекта блоггера со следующим свойствами:

// - `email` - почта, строка
// - `age` - возраст, число
// - `numberOfPosts` - кол-во постов, число
// - `topics` - массив тем на которых специализируется блоггер

// Класс ожидает один параметр - объект настроек с одноимёнными свойствами.

// Добавь метод `getInfo()`, который, возвращает строку:
// `User ${почта} is ${возраст} years old and has ${кол-во постов} posts`.

// Добавь метод `updatePostCount(value)`, который в параметре `value` принимает
// количество постов которые нужно добавить пользователю.

// ```js
// const mango = new User({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
// ```

// ## Example 2 - Хранилище

// Напиши класс `Storage` который создаёт объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать
// его в свойство `items`.

// Добавь методы класса:

// - `getItems()` - возвращает массив товаров.
// - `addItem(item)` - получает новый товар и добавляет его к текущим.
// - `removeItem(item)` - получает товар и, если он есть, удаляет его из текущих.

// ```js
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
// ```

// ## Example 3 - User

// Напиши класс `User` который создаёт объект со свойствами `login` и `email`.
// Объяви приватные свойства `#login` и `#email`, доступ к которым сделай через
// геттер и сеттер `login` и `email`.

// ```js
// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie
// ```

// ## Example 4 - Заметки(создать заметку, приоритет)

// Напиши класс `Notes` который управляет коллекцией заметок в свойстве `items`.
// Заметка это объект со свойствами `text` и `priority`. Добавь классу статическое
// свойство `Priority`, в котором будет храниться объект с приоритетами.

// ```js
// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// ```

const priority = {
  LOW: "low",
  NORMAL: "normal",
  HIGH: "high",
};

const notes = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  removeItem(text) {
    this.items = this.items.filter((item) => item.text !== text);
  },
  updatePriority(text, newPriority) {
    this.items = this.items.map((item) =>
      item.text === text ? { ...item, priority: newPriority } : item
    );
  },
};
//та же задачка с помощью класса
class Notes {
  static Priority = {  //статические стандартые приортитеты
    LOW: "low",
    NORMAL: "normal",
    HIGH: "high",
  };

  constructor(items = []) { //конструктор с полем items по дефолту пустой массив(храним заметки)
    this.items = items;
  }

  addItem(item) { //создаем заметку
    this.items.push(item); //пушим в массив
  }

  removeItem(text) { //удаляем заметку(удалить из массива по тексту(используем .filter))
    this.items = this.items.filter((item) => item.text !== text);//в новый массив записать текст не совпадает, мы его оставляем
  }

  updatePriority(text, newPriority) { //даем новый приоритет(редактируем)
    this.items = this.items.map((item) =>  //берём массив, перебираем, получаем доступ к каждому, находим тот который нужно редактировать
      item.text === text ? { ...item, priority: newPriority } : item //если мы нашли заметку я хочу создать новый обьект в который скопирую все старые данные и переписать поле приоритет  
    );
  }
}

// Добавь методы `addNote(note)`, `removeNote(text)` и
// `updatePriority(text, newPriority)`.

// ```js
const myNotes = new Notes();  //запускаем конструктор
console.log(myNotes);

myNotes.addItem({ text: "Моя первая заметка", priority: Notes.Priority.LOW });//добавляем заметку
console.log(myNotes.items);

myNotes.addItem({ //добавляем ещё заметку
  text: "Моя вторая заметка",
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeItem("Моя первая заметка");//удаляем заметку
console.log(myNotes.items);

myNotes.updatePriority("Моя вторая заметка", Notes.Priority.HIGH);//редактируем приоритет
console.log(myNotes.items);
// ```

// ## Example 5 - Toggle

// Напишите класс `Toggle` который принимает объект настроек `{isOpen: boolean}` и
// объявляет одно свойство `on` - состояние вкл/выкл (true/false). По умолчанию
// значение свойства `on` должно быть `false`.

// ```js
// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
