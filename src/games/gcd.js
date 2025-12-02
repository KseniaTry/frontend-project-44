import initGame from '../index.js'
import initGreeting from '../cli.js'
import { getRandomInRange } from '../util.js'
import { MIN_RANDOM, MAX_RANDOM } from '../const.js'

const getExpression = () => `${getRandomInRange(MIN_RANDOM, MAX_RANDOM)} ${getRandomInRange(MIN_RANDOM, MAX_RANDOM)}`

const checkAnswer = (expression) => {
  const expressions = expression.split(' ')
  let firstElement = expressions[0]
  let secondElement = expressions[1]

  while (secondElement !== 0) {
    const defaultFirstElement = firstElement
    firstElement = secondElement
    secondElement = defaultFirstElement % secondElement
  }
  return firstElement
}

const run = () => {
  const userName = initGreeting()
  console.log('Find the greatest common divisor of given numbers.')
  initGame(getExpression, checkAnswer, userName)
}

export default run
