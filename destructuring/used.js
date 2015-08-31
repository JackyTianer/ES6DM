/**
 * Created by jackytianer on 15/8/27.
 */
// 作用
// 变量交换
[x, y] = [y, x];

// 返回一个数组

function example() {
  return [1, 2, 3];
}
var [a, b, c] = example();

// 返回一个对象

function example() {
  return {
    foo: 1,
    bar: 2
  };
}
var { foo, bar } = example();