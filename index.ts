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

client.login(process.env.TOKEN)