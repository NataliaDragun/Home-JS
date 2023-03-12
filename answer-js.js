// * 1
const arr = [4, 5, 16]

const sum = arr.reduce((total, elem) => total + (elem % 2 ? 0 : Math.sqrt(elem)), 0)

console.log(sum);

// * 2
function aaa(size, elem) {
  const newArr = []
  for (let i = 0; i < size; i++) {
    newArr.push(elem)
  }
  return newArr
}
console.log(aaa(3, 'a'));


//  * 3
const array = [1, 2, 3]
console.log(array.sort((a, b) => b - a));

console.log('---------------');

function reverse(ar) {
  const rev = []

  for (let i = ar.length - 1; i >= 0; i --) {
    rev.push(ar[i]);
  }
  return rev
}
console.log(reverse([1, 2, 3]));


console.log('---------------');

// * 4
const arr_4 = [0, 1, false, 2, undefined, '', 3, null]
console.log(arr_4.filter(Boolean));


// * 5
function object(arr_5) {
  const obj = {}

  for (let i = 0; i < arr_5.length; i++) {
    obj[arr_5[i][0]] = arr_5[i][1]
  }
  return obj
}
console.log(object([['a', 1], ['b', 2]]));



// * 6
const repeat = [1, 2, 3, 1, 2]
const repeatNew = []
repeat.forEach((elem) => {
  if (!repeatNew.includes(elem)) {
    repeatNew.push(elem)
  }
})

console.log(repeatNew);

// * 7
function result(a, b) {
  if (a.length !== b.length) {
    return false}

    for (let i = 0; i < a.length; i++) {

    if (a[i] !== b[i]) {
      return false
    } else{
      return true
    }
 }
}
console.log(result([1, 2, 3], [1, 2, 3]));

// * 8
const arr_8 =  [1, 2, [3, 4, [5]]]
// const arrNewConcat = [].concat(arr_8[0], arr_8[1], arr_8[2], arr_8[2][1][0])
// console.log(arrNewConcat);

// const arrNewConcat = [].concat(arr_8[0], arr_8[1], arr_8[2])
// console.log(arrNewConcat);


//  * 9
function slice(arr_9, size) {
  const newArray = []
  let i = 0
  while (i < arr_9.length) {
    newArray.push(arr_9.slice(i, size + i))
    i += size
  }
  return newArray
}
console.log(slice([1, 2, 3, 4, 5], 2));

// * 10
var str="Пример строки";
function capitalizeFirstLetter(str) {
  return str.toLowerCase(0)
    
};
document.writeln(capitalizeFirstLetter(str)); 






