/**
 * Created by jackytianer on 15/8/27.
 */
'use strict';
var { foo, bar } = {foo: "aaa", bar: "bbb"};
console.log(foo) // "aaa"
console.log(bar) // "bbb"

var { baz } = {foo: "aaa", bar: "bbb"};
console.log(baz) // undefined 不同名,所以undefine

var { p: [x, { y }] } = {
  p: [
    "Hello",
    {y: "World"}
  ]
};
console.log(x);

//字符串
const [a, b, c, d, e] = 'hello';

//函数参数
function add([x, y]){
  return x + y;
}

add([1, 2]) // 3