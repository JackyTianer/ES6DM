/**
 * Created by jackytianer on 15/8/27.
 */
'use strict';
// let和const 为js增加了块级作用域的概念
/* let*/
for(var i = 0; i<10; i++){
}
console.log(i);

// let定义的变量只属于当前代码块
for(let j = 0; j<10; j++){
}
// console.log(j)  # j is not defined

var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // #6

// 变量无法提升
function do_something() {
  console.log(foo);
  let foo = 2;
}
// do_something(); # foo is not defined;
