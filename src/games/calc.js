import initGame from '../index.js'
import initGreeting from '../cli.js'
import { create, all } from 'mathjs'
import { getRandomInRange } from '../util.js'
import { MIN_RANDOM, MAX_RANDOM_CALC } from '../const.js'

const math = create(all)

const getRandomOperation = () => {
  const operations = ['+', '-', '*']
  const index = getRandomInRange(0, operations.length - 1)
  return operations[index]
}

const getExpression = () => {
  const firstElement = getRandomInRange(MIN_RANDOM, MAX_RANDOM_CALC)
  const secondElement = getRandomInRange(MIN_RANDOM, MAX_RANDOM_CALC)
  const operation = getRandomOperation()
  // return `${firstElement} ${operation} ${secondElement}`
  return '3 - 5'
}

const checkAnswer = expression => math.evaluate(expression)

const run = () => {
  const userName = initGreeting()
  console.log('What is the result of the expression?')
  initGame(getExpression, checkAnswer, userName)
}

export default run
