const fs = require('fs')

const unformattedData = fs.readFileSync('./day-one/input.txt', 'utf-8').trim()
let data = unformattedData.split('\n').map(val => val.split('   '))

const firstColumn = data.map(val => val[0])
firstColumn.sort()

const secondColumn = data.map(val => val[1])
secondColumn.sort()

const response = firstColumn.reduce((accumulator, currentValue, currentIndex) => {
  if (secondColumn[currentIndex] > currentValue) accumulator += secondColumn[currentIndex] - currentValue
  else accumulator += currentValue - secondColumn[currentIndex]

  return accumulator
}, 0)

console.log(response)