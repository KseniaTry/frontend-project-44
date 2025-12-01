import initGame from '../index.js'
import initGreeting from '../cli.js'
import { getRandomInRange } from '../util.js'
import { MIN_RANDOM, MAX_RANDOM } from '../const.js'

const getExpression = () => getRandomInRange(MIN_RANDOM, MAX_RANDOM)

const answerCheck = (expression) => {
  if (expression < 2) {
    return 'no'
  }
  else if (expression === 2) {
    return 'yes'
  }
  else if (expression % 2 === 0) {
    return 'no'
  }
  else {
    for (let i = 3; i <= Math.sqrt(expression); i += 2) {
      if (expression % i === 0) {
        return 'no'
      }
    }
    return 'yes'
  }
}

const run = () => {
  const userName = initGreeting()
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
  initGame(getExpression, answerCheck, userName)
}

export default run
