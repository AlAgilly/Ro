import { ICommand } from 'wokcommands'
export default {
    name: 'add',
    category: 'Math',
    description: 'Adds two numbers.',
    expectedArgs: '<number1> <number2>',
    minArgs: 2,
    maxArgs: 2,
    testOnly: true,
    slash: true,
    
    callback: ({ args }) => {
        const number1 = parseInt(args[0])
        const number2 = parseInt(args[1])
        
        const sum = number1 + number2;
                
        return `${number1} + ${number2} = ${sum}`
    }
} as ICommand