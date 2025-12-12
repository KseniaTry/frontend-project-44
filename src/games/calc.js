import initGame from '../index.js'
import initGreeting from '../cli.js'
import { getRandomInRange } from '../util.js'
import { MIN_RANDOM, MAX_RANDOM_CALC } from '../const.js'

const getRandomOperation = () => {
  const operations = ['+', '-', '*']
  const index = getRandomInRange(0, operations.length - 1)
  return operations[index]
}

const getExpression = () => {
  const firstElement = getRandomInRange(MIN_RANDOM, MAX_RANDOM_CALC)
  const secondElement = getRandomInRange(MIN_RANDOM, MAX_RANDOM_CALC)
  const operation = getRandomOperation()
  return `${firstElement} ${operation} ${secondElement}`
}

const checkAnswer = (expression) => {
  const [number1, operation, number2] = expression.split(' ')
  const firstElement = parseInt(number1)
  const secondElement = parseInt(number2)
  let result = 0

  switch (operation) {
    case '+':
      result = firstElement + secondElement
      break
    case '-':
      result = firstElement - secondElement
      break
    case '*':
      result = firstElement * secondElement
      break
  }

  return result
}

const run = () => {
  const userName = initGreeting()
  console.log('What is the result of the expression?')
  initGame(getExpression, checkAnswer, userName)
}

export default run
