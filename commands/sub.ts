import { ICommand } from 'wokcommands'
export default {
    // Best practice for the built-in help menu
    category: 'Math',
    description: 'Subtracts two numbers together.',
    
    // For the correct usage of the command
    expectedArgs: '<number1> <number2>',
    minArgs: 2,
    maxArgs: 2,
    
    // Invoked when the command is actually ran
    callback: ({ channel, args }) => {
        // Convert the arguments into numbers
        const number1 = parseInt(args[0])
        const number2 = parseInt(args[1])
        
        const sum = number1 - number2;
                
        // Alternatively we can just simply return our text
        // WOKCommands will handle the proper way to reply with it
        return `${number1} - ${number2} = ${sum}`
    }
} as ICommand