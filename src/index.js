import readlineSync from 'readline-sync'
import { name } from '../src/cli.js'

const QUESTIONS_COUNT = 3

const initGame = (getExpression, answerCheck) => {
  for (let i = 1; i <= QUESTIONS_COUNT; i += 1) {
    const expression = getExpression()
    console.log(`Question: ${expression}`)
    const userAnswer = readlineSync.question('Your answer: ')
    const correctAnswer = answerCheck(expression)

    if (userAnswer == correctAnswer) {
      console.log('Correct!')
      if (i === QUESTIONS_COUNT) {
        console.log(`Congratulations, ${name}!`)
      }
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`)
      break
    }
  }
}

export default initGame
