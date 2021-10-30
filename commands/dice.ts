import { ICommand } from 'wokcommands'
export default {
    name: 'diceroll',
    category: 'Random',
    description: '🎲 Rolls a 6-sided dice.',
    testOnly: true,
    slash: true,
    
    callback: ({ }) => {
                 
        const rndInt = Math.floor(Math.random() * (6 - 1 + 1) + 1)      
        
        let dice = ''
        if ( rndInt == 1 ){
            dice = 'one'
        } else if ( rndInt == 2 ) {
            dice = 'two'
        } else if ( rndInt == 3 ) {
            dice = 'three'
        } else if ( rndInt == 4 ) {
            dice = 'four'
        } else if ( rndInt == 5 ) {
            dice = 'five'
        } else if ( rndInt == 6 ) {
            dice = 'six'
        }
        return `${dice}`
    }
} as ICommand