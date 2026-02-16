// const student = {
//   name: 'John',
//   age: 21,
// }

// names = ['John', 'Catht', 'Mike']
// const [name1, name2] = names
// console.log(name1)
// console.log(name2)

// const { name, age } = student
// console.log(name)
// console.log(age)

// const student = {
//   name: 'John',
//   age: 21,
//   city: 'Jalandhar',
// }
// const { city = 'Amritsar' } = student
// console.log(city)

const student = {
  name: 'John',
  age: 21,
  marks: {
    math: 60,
    science: 90,
  },
}

const { marks } = student
console.log(marks)
const {
  marks: { math },
} = student
console.log(math)
