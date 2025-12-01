import initGame from '../index.js'
import initGreeting from '../cli.js'
import { getRandomInRange } from '../util.js'
import { MIN_RANDOM, MAX_RANDOM } from '../const.js'

const isNumberEven = number => number % 2 === 0

const answerCheck = expression => isNumberEven(expression) ? 'yes' : 'no'

const getExpression = () => getRandomInRange(MIN_RANDOM, MAX_RANDOM)

const run = () => {
  const userName = initGreeting()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  initGame(getExpression, answerCheck, userName)
}

export default run
