import initGame from '../index.js'
import initGreeting from '../cli.js'
import { getRandomInRange } from '../util.js'
import { MIN_RANDOM, MAX_RANDOM } from '../const.js'

const isNumberEven = number => number % 2 === 0

const getExpression = () => getRandomInRange(MIN_RANDOM, MAX_RANDOM)

const checkAnswer = expression => isNumberEven(expression) ? 'yes' : 'no'

const run = () => {
  const userName = initGreeting()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  const expression = getExpression()
  initGame(expression, checkAnswer, userName)
}

export default run
