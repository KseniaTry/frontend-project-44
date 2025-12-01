import initGame from '../index.js'
import initGreeting from '../cli.js'
import { getRandomInRange } from '../util.js'
import { MIN_RANDOM, MAX_RANDOM, MIN_PROGRESSION_STEP, MAX_PROGRESSION_STEP, MIN_PROGRESSION_EL_COUNT, MAX_PROGRESSION_EL_COUNT } from '../const.js'

const getExpression = () => {
  const start = getRandomInRange(MIN_RANDOM, MAX_RANDOM)
  const step = getRandomInRange(MIN_PROGRESSION_STEP, MAX_PROGRESSION_STEP)
  const elementsCount = getRandomInRange(MIN_PROGRESSION_EL_COUNT, MAX_PROGRESSION_EL_COUNT)
  const missed = getRandomInRange(1, elementsCount) - 1
  let result = [start]
  for (let i = 1; i <= elementsCount; i += 1) {
    let number = result.at(-1) + step
    result.push(number)
  }
  result[missed] = '..'
  return result.join(' ')
}

const getStepOfProgression = (array) => {
  for (let i = 0, j = 1; i < array.length; i += 1, j += 1) {
    if (array[j] - array[i]) {
      return array[j] - array[i]
    }
  }
}

const answerCheck = (expression) => {
  const elements = expression.split(' ')
  const missedElementIndex = elements.indexOf('..')
  const step = getStepOfProgression(elements)
  let result = 0

  if (missedElementIndex === elements.length - 1) {
    result = elements[missedElementIndex - 1] - step
  }
  else {
    result = elements[missedElementIndex + 1] - step
  }

  return result
}

const run = () => {
  const userName = initGreeting()
  console.log('What number is missing in the progression?')
  initGame(getExpression, answerCheck, userName)
}

export default run
