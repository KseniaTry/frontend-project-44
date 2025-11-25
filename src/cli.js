import readlineSync from 'readline-sync'

let name = ''

const initGreeting = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  name = userName
  console.log('Hello, ' + userName + '!')
}

export { initGreeting, name }
