function getStudentsInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userObj = {
        name: 'John',
        email: 'john@example.com',
        age: 21,
      }
      resolve(userObj)
    }, 2000)
  })
}

function displayInfo({ name }) {
  console.log(name)
}
async function main() {
  const result = await getStudentsInfo()
  displayInfo(result)
  console.log('Program Completed Successfully')
}

main()

