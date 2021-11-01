import { ICommand } from "wokcommands";
import discordjs from 'discord.js'
import welcomeSchema from "../models/welcome-schema";

export default {
    category: 'Testing',
    description: 'Simulates a join.',

    permissions: ['ADMINISTRATOR'],

    slash: true,
    testOnly: true,
    callback: async ({member, client}) => {
        client.emit('guildMemberAdd', member)
        return 'Join simulated!'
    }
} as ICommand