/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  changeName(newName) {
    console.log('this внутри changeName: ', this);

    this.name = newName;
  },
  // метод добавить трек
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating; //получить доступ для изменения свойства ключа rating 
  },
  getTrackCount() {
    return this.tracks.length;//возвращает текущую длину массива с количеством треков(вычисляемое свойство просчета длины массива)
  },
};

console.log(playlist.getTrackCount());//если вызываем сначала, то получаем начальное количество треков(3)

playlist.changeName('Новое имя');

playlist.addTrack('новый трек 1');//вызываем и добавляем новый трек
console.log(playlist.getTrackCount());

playlist.addTrack('новый трек 2');
console.log(playlist.getTrackCount());//а если вызываем после добавления треков, то получаем конечное количество треков

playlist.updateRating(4); //вызываем и даем новый рейтинг

console.log(playlist);
