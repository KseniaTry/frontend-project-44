import initGame from '../index.js'
import { create, all } from 'mathjs'

const math = create(all)

const getRandomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomOperation = () => {
  const operations = ['+', '-', '*']
  const index = getRandomInRange(0, operations.length - 1)
  return operations[index]
}

const getRandomExpression = () => {
  const first = getRandomInRange(1, 100)
  const second = getRandomInRange(1, 100)
  const operation = getRandomOperation()
  return `${first} ${operation} ${second}`
}

const answerCheck = expression => math.evaluate(expression)

const run = () => {
  console.log('What is the result of the expression?')
  initGame(getRandomExpression, answerCheck)
}

export { run }
