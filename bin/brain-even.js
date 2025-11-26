#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { name } from '../src/cli.js'
import { initGreeting } from '../src/cli.js'

const QUESTIONS_NUMBER = 3

const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const initEvenGame = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    for (let i = 1; i <= QUESTIONS_NUMBER; i += 1) {
        const randomNumber = getRandomInRange(1, 100)
        console.log(`Question: ${randomNumber}`)
        const userAnswer = readlineSync.question('Your answer: ')
        let correctAnswer = ''
        const isNumberEven = number => number % 2 === 0
        correctAnswer = isNumberEven(randomNumber) ? 'yes' : 'no'
        if (userAnswer === correctAnswer) {
            console.log('Correct!')
            if (i === QUESTIONS_NUMBER) {
                console.log(`Congratulations, ${name}!`)
            }
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`)
            break;
        }
    }

}

initGreeting()
initEvenGame()
