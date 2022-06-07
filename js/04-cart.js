/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()    //вызвать функцию
 * - add(product) //добавить продукт
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;//используем this чтобы вызвать массив items
  },
  add(product) {//добавить продукт
    for (const item of this.items) { //перебираем массив поэлементно
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;// деструкруризация

    for (let i = 0; i < items.length; i += 1) {//находим доступ к индексу элемента
      const item = items[i];//создадим локальную переменную

      if (productName === item.name) {
        console.log('нашли такой продукт ', productName);
        console.log('индекс: ', i);

        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of items) {
      total += price * quantity;
    }

    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

console.log(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.remove('🍇');
console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());


//автопроверка 34
// const bookShelf = {
//    books: ["The last kingdom", "The guardian of dreams"],
//   // Это метод объекта
//   getBooks() {
//     return  "Returning all books";
//     // console.log("Returning all books");
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//  removeBook(bookName) {
//     return `Deleting book ${bookName}`; 
//   },
// updateBook(oldName, newName) {//этот метод обновляет название книги на новое
// return `Updating book ${oldName} to ${newName}`;//возвращает строку
//   }
// };

// bookShelf.getBooks();//вызываем функции
// bookShelf.addBook();


//35 автопроверка(заменить элемент)

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//
//    const bookIndex = this.books.indexOf(oldName);//найдем нужный элемент массива(oldName)
//     this.books.splice(bookIndex, 1, newName);//заменяем найденный элемент новым элементом
//   },
// };


//35 автопроверка обновить название зелья с oldName на newName, в массиве зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
// const potionIndex = this.potions.indexOf(oldName);//найдем нужный элемент массива(oldName)
//  if (this.potions.includes(oldName)) {//если массив содержит oldName
// this.potions.splice(potionIndex, 1, newName);//удаляем найденный элемент
//     }
//   },
// };

//автопроверка 41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() { //метод для получения всех зелий
//     return this.potions;
//   },
//   addPotion(newPotion) {//добавить зелье
//   for (const potion of this.potions) {
// if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//   }    
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {//удаляет объект
//   for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//     if (potionName === potion.name) {
//       this.potions.splice(i, 1);
//       return `Potion ${potionName} is not in inventory!`;
//     }
//    }
//   },
//   updatePotionName(oldName, newName) { //обновляет свойство name
// for (let i = 0; i < this.potions.length; i += 1) {
//    const potion = this.potions[i];
//    if (oldName === potion.name) {
//      potion.name = newName;
//  return `Potion ${oldName} is not in inventory!`;
//    }
//   }
//     this.potions.splice(potionIndex, 1, newName);
//   },
//  };
