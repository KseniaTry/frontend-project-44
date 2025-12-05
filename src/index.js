import readlineSync from 'readline-sync'
import { QUESTIONS_COUNT } from './const.js'

const initGame = (getExpression, answerCheck, userName) => {
  for (let i = 1; i <= QUESTIONS_COUNT; i += 1) {
    const expression = getExpression()
    const question = `Question: ${expression}`
    console.log(question)
    const userAnswer = readlineSync.question('Your answer: ')
    const correctAnswer = answerCheck(expression)

    if (userAnswer == correctAnswer) {
      console.log('Correct!')
      if (i === QUESTIONS_COUNT) {
        console.log(`Congratulations, ${userName}!`)
      }
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`)
      break
    }
  }
}

export default initGame
