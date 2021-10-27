import { ICommand } from 'wokcommands'
export default {
    name: 'diceroll',
    category: 'Random',
    description: '🎲 Rolls a 6-sided dice.',
    testOnly: true,
    slash: true,
    
    callback: ({ args }) => {
                 
        const rndInt = Math.floor(Math.random() * (6 - 1 + 1) + 1)      
        
        let coin = ''
        if ( rndInt == 1 ){
            coin = 'one'
        } else if ( rndInt == 2 ) {
            coin = 'two'
        } else if ( rndInt == 3 ) {
            coin = 'three'
        } else if ( rndInt == 4 ) {
            coin = 'four'
        } else if ( rndInt == 5 ) {
            coin = 'five'
        } else if ( rndInt == 6 ) {
            coin = 'six'
        }
        return `${coin}`
    }
} as ICommand