import { ICommand } from 'wokcommands'
export default {
    name: 'coinflip',
    category: 'Random',
    description: '📀 Flips a coin.',
    testOnly: true,
    slash: true,
    
    callback: ({ }) => {
                 
        const rndInt = Math.floor(Math.random() * (3 - 2 + 1) + 1)      
        
        let coin = ''
        if ( rndInt == 1 ){
            coin = 'Heads'
        } else if ( rndInt == 2 ) {
            coin = 'Tails'
        }
        return `${coin}`
    }
} as ICommand