Завдання на розуміння роботи методів масиву.

Реалізувати функції, які працюватимуть ідентично методів some, filter, reduce:



function some(array, predicate) {
  // ...
}

const arr = [1,2,3]
some(arr, el => el > 1) // true - те саме, що arr.some(el => el > 1)

function filter(array, predicate) {
  // ...
}

filter(arr, el => el > 1) // [2, 3] - те саме, що arr.filter(el => el > 1)

function reduce(array, predicate, initialValue) {
  // ...
}

reduce(arr, (sum, el) => sum + el, 0) // 6 - те саме, що arr.reduce((sum, el) => sum + el, 0)




п.с. методи масивів використовувати не можна)

п.п.с push можна

п.п.п.с. заглядайте в документацію методів, щоб дізнатися, як вони працюють, бо зробить приблизно так само не канає:

щоб кинути помилку в reduce: throw new TypeError('Reduce of empty array with no initial value')
варіант з thisArg можна не враховувати. Якщо врахували, то дуже круто
