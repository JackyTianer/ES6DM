/**
 * Created by jackytianer on 15/9/1.
 */
var s = "Hello world!";


// Hello是否s头部
s.startsWith("Hello") // true
// !是否在s尾部
s.endsWith("!") // true
// s是否包含o
s.includes("o") // true

//强大的模板功能

var s = `hello`; //单行字符串;

//多行字符串
s = `<div>
        hello world
     </div>
`
var b = 1;
// 模板变量
s = `
  <div>
    ${b};
  </div>
`    // <div>1</div>

