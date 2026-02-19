//closure
function outer() {
  let n = 1
  function inner() {
    return n++
  }
  return inner
}
console.log(counter())
console.log(counter())
console.log(counter())

const counter = outer()