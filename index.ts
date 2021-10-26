import DiscordJS, { Intents, Interaction } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
// import { resolve } from 'path/posix'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('Ro is online!')

    new WOKCommands(client, {
        commandDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: ['874715472736682064']
    })

})

// client.on('interactionCreate', async (interaction) =>{
//     if(!interaction.isCommand()) {
//         return
//     }

//     const {commandName, options} = interaction

//     if (commandName === 'ping') {
//         interaction.reply({
//             content: 'pong',
//             ephemeral: true
//         })
//     } else if(commandName === 'add') {
//         const num1 = options.getNumber('num1')!
//         const num2 = options.getNumber('num2')!

//         await interaction.deferReply({
//             ephemeral: true,
//         })
//         await new Promise((resolve) => setTimeout(resolve, 4000))

//         interaction.editReply({
//             content: `${num1} + ${num2} = ${num1 + num2}`,
//         })
//     }
// })



client.login(process.env.TOKEN)