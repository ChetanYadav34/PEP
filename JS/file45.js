function getStudentsInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'John',
        email: 'john@example.com',
        age: 21,
      })
    }, 2000)
  })
}

async function main() {
  const result = await getStudentsInfo()
  console.log(result)
  console.log('Program Completed Successfully')
}
main()
// getStudentInfo should return object name,email and age
