import { ICommand } from "wokcommands";
import discordjs from 'discord.js'
import welcomeSchema from "../models/welcome-schema";

export default {
    category: 'configuration',
    description: 'Sets the welcome channel and message.',

    permissions: ['ADMINISTRATOR'],

    minArgs: 2,
    expectedArgs: '<channel> <text>',
    slash: true,
    testOnly: true,
    options: [{
        name: 'channel',
        description: 'The target channel.',
        required: true,
        type: discordjs.Constants.ApplicationCommandOptionTypes.CHANNEL
    },
    {
        name: 'text',
        description: 'The welcome message. Use @ as the user placeholder.',
        required: true,
        type: discordjs.Constants.ApplicationCommandOptionTypes.STRING
    }],
    callback: async ({guild, interaction, args}) => {
        if(!guild) {
            return 'Please run this command in a guild.'
        }
        const target = interaction.options.getChannel('channel')
        if(!target || target.type !== 'GUILD_TEXT') {
            return 'Please tag a text channel.'
        }
        let text = interaction?.options.getString('text')

        await welcomeSchema.findOneAndUpdate({
            _id: guild.id
        },{
            _id: guild.id,
            text,
            channelId: target.id
        },{
            upsert: true
        })

        return 'Welcome channel set!'
    }
} as ICommand