let a = 10
let c = 20
let d = 30

function show() {
  console.log('1111111111111')
}

//只能一次默认导出 ！！！
export default {
  a,
  c,
  show
}
//多次按需导出
export let s1 = 'aaa'
export let s2 = 'ccc'
export function say() {
  console.log('ooooooooo')
}

// export default {
//   d
// }
