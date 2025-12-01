import initGame from '../index.js'
import initGreeting from '../cli.js'
import { getRandomInRange } from '../util.js'
import { MIN_RANDOM, MAX_RANDOM } from '../const.js'

const getExpression = () => `${getRandomInRange(MIN_RANDOM, MAX_RANDOM)} ${getRandomInRange(MIN_RANDOM, MAX_RANDOM)}`

const answerCheck = (expression) => {
  const modifiedExpression = expression.split(' ')
  let first = modifiedExpression[0]
  let second = modifiedExpression[1]

  while (second !== 0) {
    const defaultdFirst = first
    first = second
    second = defaultdFirst % second
  }
  return first
}

const run = () => {
  const userName = initGreeting()
  console.log('Find the greatest common divisor of given numbers.')
  initGame(getExpression, answerCheck, userName)
}

export default run
