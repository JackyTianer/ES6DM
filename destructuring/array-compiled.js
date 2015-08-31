/**
 * Created by jackytianer on 15/8/27.
 */
/*解构赋值*/
'use strict';
var a = 1;
var b = 2;
var c = 3;

// 等价于
/* ```javascript
var a = 1;
var b = 2;
var c = 3;
*/

var _ref = ["foo", "bar", "baz"];
var third = _ref[2];

console.log(third); // "baz"

// 数组赋值
var head = 1;
var tail = [2, 3, 4];

console.log(head);
console.log(tail);

// 允许默认值
var _ref2 = ['a'];
var x = _ref2[0];
var _ref2$1 = _ref2[1];
var y = _ref2$1 === undefined ? 'b' : _ref2$1;
//# x='a', y='b'

//# sourceMappingURL=array-compiled.js.map