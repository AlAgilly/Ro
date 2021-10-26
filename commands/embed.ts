import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Sends an embed.',
    permissions: ['ADMINISTRATOR'],
    slash: 'both',
    testOnly: true,
    callback: ({message, text}) => {
        const embed = new MessageEmbed()
            .setDescription('Hello World')
        return embed
    }
} as ICommand