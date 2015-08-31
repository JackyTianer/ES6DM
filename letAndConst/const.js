/**
 * Created by jackytianer on 15/8/27.
 */
'use strict';
/*const*/
const PI = 3.1415;
console.log(PI) // 3.1415
// PI = 3; #error 不可修改 在chrome上会报错

// 将const指向一个引用类型
const foo = {};
foo.prop = 123;
console.log(foo.prop); //可以修改,原因foo只指向了一个地址

const foo2 = Object.freeze({});
// foo2.prop = 123; #object is not extensible ,使用freeze后,对象不可修改