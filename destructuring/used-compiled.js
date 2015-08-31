/**
 * Created by jackytianer on 15/8/27.
 */
// 作用
// 变量交换
"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

// 返回一个数组

var _ref = [y, x];
x = _ref[0];
y = _ref[1];
function example() {
  return [1, 2, 3];
}

var _example = example();

var _example2 = _slicedToArray(_example, 3);

var a = _example2[0];
var b = _example2[1];
var c = _example2[2];

// 返回一个对象

function example() {
  return {
    foo: 1,
    bar: 2
  };
}

var _example3 = example();

var foo = _example3.foo;
var bar = _example3.bar;

//# sourceMappingURL=used-compiled.js.map