/**
 * Created by jackytianer on 15/8/27.
 */
/*解构赋值*/
'use strict';
var [a, b, c] = [1, 2, 3];
// 等价于
/* ```javascript
var a = 1;
var b = 2;
var c = 3;
*/

let [,,third] = ["foo", "bar", "baz"];
console.log(third) // "baz"

// 数组赋值
let [head, ...tail] = [1, 2, 3, 4];
console.log(head);
console.log(tail);

// 允许默认值
var[x, y='b'] = ['a']; //# x='a', y='b'
