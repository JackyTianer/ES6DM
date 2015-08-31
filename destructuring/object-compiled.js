/**
 * Created by jackytianer on 15/8/27.
 */
'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _foo$bar = { foo: "aaa", bar: "bbb" };
var foo = _foo$bar.foo;
var bar = _foo$bar.bar;

console.log(foo); // "aaa"
console.log(bar); // "bbb"

var _foo$bar2 = { foo: "aaa", bar: "bbb" };
var baz = _foo$bar2.baz;

console.log(baz); // undefined 不同名,所以undefine

var _p = {
  p: ["Hello", { y: "World" }]
};

var _p$p = _slicedToArray(_p.p, 2);

var x = _p$p[0];
var y = _p$p[1].y;

console.log(x);

//字符串
var _hello = 'hello';

var _hello2 = _slicedToArray(_hello, 5);

var a = _hello2[0];
var b = _hello2[1];
var c = _hello2[2];
var d = _hello2[3];
var e = _hello2[4];

//函数参数
function add(_ref) {
  var _ref2 = _slicedToArray(_ref, 2);

  var x = _ref2[0];
  var y = _ref2[1];

  return x + y;
}

add([1, 2]); // 3

//# sourceMappingURL=object-compiled.js.map