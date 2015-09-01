/**
 * Created by jackytianer on 15/9/1.
 */
"use strict";

var s = "Hello world!";

// Hello是否s头部
s.startsWith("Hello"); // true
// !是否在s尾部
s.endsWith("!"); // true
// s是否包含o
s.includes("o"); // true

//强大的模板功能

var s = "hello"; //单行字符串;

//多行字符串
s = "<div>\n        hello world\n     </div>\n";
var b = 1;
// 模板变量
s = "\n  <div>\n    " + b + ";\n  </div>\n"; // <div>1</div>

//# sourceMappingURL=string-compiled.js.map