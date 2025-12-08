import { initGame2 } from '../index.js'
import initGreeting from '../cli.js'
import { create, all } from 'mathjs'
import { getRandomInRange } from '../util.js'
import { MIN_RANDOM, MAX_RANDOM_CALC } from '../const.js'
import { QUESTIONS_COUNT } from '../const.js'

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
  return `Question: ${firstElement} ${operation} ${secondElement}`
}

const checkAnswer = expression => math.evaluate(expression)

const run = () => {
  const userName = initGreeting()
  console.log('What is the result of the expression?')
  // initGame(getExpression, checkAnswer, userName)

  for (let i = 1; i <= QUESTIONS_COUNT; i += 1) {
    const question = getExpression()
    const expression = question.split(': ')[1]
    const correctAnswer = checkAnswer(expression)
    const gameResult = initGame2(correctAnswer, question, userName)
    console.log(gameResult)

    if (gameResult !== 'Correct!') {
      break
    }

    if ((i === QUESTIONS_COUNT) && (gameResult === 'Correct!')) {
      console.log(`Congratulations, ${userName}!`)
    }
  }
}

export default run
