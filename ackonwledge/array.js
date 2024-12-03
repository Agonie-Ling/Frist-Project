// Array()数组

/*
    Array.from(arrayLike, [mapFn], [thisArg])
    arrayLike：类数组对象，或者可迭代对象。
    mapFn：可选参数，如果指定了该参数，新数组中的每个元素会执行该回调函数。
    thisArg：可选参数，执行回调函数 mapFn 时 this 对象。
    返回值：一个新的数组实例。
*/
console.log(Array.from('foo'));     // [ "f", "o", "o" ]

/*
    Array.isArray(value)
    value：要检测的值。
    返回值：如果 value 是 Array ，则返回 true ；否则返回 false 。
*/
console.log(Array.isArray([1, 2, 3])); // true

/*
    Array.of(element0[, element1[,...[, elementN]]])
    elementN：数组中应该包含的元素。
    返回值：由指定的元素组成的新数组对象。
*/
console.log(Array.of(7)); // [7]
console.log(Array.of("str", 1, true));  // ["str", 1, true] 

/*
    arr.at(index)
    index: 要返回元素的索引，允许为负值。
*/
const array1 = [5, 12, 8, 130, 44];
console.log(array1.at(2)); // 8
console.log(array1.at(-2)); // 130

/*
    arr.concat(value1, value2,..., valueN)
    valueN: 数组
    返回值：新的Array实例。
    该方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
*/
const array2 = [1, 2, 3];
const array3 = [4, 5, 6];
console.log(array2.concat(array3)); //[1, 2, 3, 4, 5, 6]

/*
    arr.copyWithin(target, [start], [end])
    target: 从该位置开始替换数据。
    start: 从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
    end: 到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
    返回值：更改后的数组。
    该方法不会扩展数组的长度
*/
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4)); // [4, 2, 3, 4, 5]
console.log([1, 2, 3, 4, 5].copyWithin(2)); // [ 1, 2, 1, 2, 3 ]

/*
    arr.entries()
    返回值：返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
*/
const array4 = ["a", "b", "c"];
const iterator = array4.entries();
for (const [index, element] of iterator) {
    console.log(`${index}: ${element}`);    // 0: a  1: b  2: c 
}
