// function f1(x) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(x)
//       resolve()
//     }, 3000)
//   })
// }

function f1(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (x % 2 === 0) {
        resolve()
      } else {
        reject('Odd numbers not allowed')
      }
    }, 3000)
  })
}

async function main() {
  let num = Math.round(Math.random() * 10)
  try {
    await f1(num)
    console.log('Program Completed Successfully')
  } catch (err) {
    console.log(err)
  }
}

main()
