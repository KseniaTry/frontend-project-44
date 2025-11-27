import initGame from '../index.js'
import { initGreeting } from '../cli.js'

const getRandomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const isNumberEven = number => number % 2 === 0

const answerCheck = expression => isNumberEven(expression) ? 'yes' : 'no'

const getExpression = () => getRandomInRange(1, 100)

const run = () => {
  initGreeting()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  initGame(getExpression, answerCheck)
}

export default run
