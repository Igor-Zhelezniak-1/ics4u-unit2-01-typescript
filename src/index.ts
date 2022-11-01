/**
 * This is the standard index.ts starting point.
 *
 * author  Igor
 * version 1.0
 * since   2022-10-04
 */
import MyStack from './stack'

// use Stack class
const someStack1 = new MyStack()
const someStack2 = new MyStack()

console.log('\nSet speed to 10 on Stack 1.')
someStack1.variable = 10
console.log(`The current variable on Stack 1 is: ${someStack1.variable}`)

console.log('\nSet variable to 7 on Stack 2.')
someStack2.variable = 7
console.log(`The variable on Stack 2 is: ${someStack2.variable}`)

console.log('\nDone.')
