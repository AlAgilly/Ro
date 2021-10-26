import DiscordJS, { Intents, Interaction } from 'discord.js'
import dotenv from 'dotenv'
import { resolve } from 'path/posix'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('Ro is online!')

    const guildID = '874715472736682064'
    const guild = client.guilds.cache.get(guildID)
    let commands

    if(guild){
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'ping',
        description: 'Replies with pong.',
    })

    commands?.create({
        name: 'add',
        description: 'Adds two numbers.',
        options: [
            {
            name: 'num1',
            description: 'The first number.',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
        },
        {
            name: 'num2',
            description: 'The second number.',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
        }
    ]
    })
})

client.on('interactionCreate', async (interaction) =>{
    if(!interaction.isCommand()) {
        return
    }

    const {commandName, options} = interaction

    if (commandName === 'ping') {
        interaction.reply({
            content: 'pong',
            ephemeral: true
        })
    } else if(commandName === 'add') {
        const num1 = options.getNumber('num1')!
        const num2 = options.getNumber('num2')!

        await interaction.deferReply({
            ephemeral: true,
        })
        await new Promise((resolve) => setTimeout(resolve, 4000))

        interaction.editReply({
            content: `${num1} + ${num2} = ${num1 + num2}`,
        })
    }
})



client.login(process.env.TOKEN)