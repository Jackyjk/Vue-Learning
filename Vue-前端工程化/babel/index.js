/*
import m1 from './m1.js' 

console.log(m1);
*/





//大括号内部代表的是按需导入的对象  可以取别名
import m1, { s1, s2 as ss2, say } from './m1.js'

console.log(m1)
console.log(s1)
console.log(ss2)
console.log(say)

//直接导入  执行m2.js的代码  返回其结果 0 1 2
import './m2.js'

// console.log("ok");