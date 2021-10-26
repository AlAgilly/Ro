import { MessageActionRow, MessageButton } from "discord.js";
import { execPath } from "process";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Link to Ro\'s command list and help.',
    slash: 'both',
    testOnly: true,
    callback: ({interaction: msgInt}) => {
        const link = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setURL('https://alagilly.dev/ro')
                    .setLabel('Ro Commands')
                    .setStyle('LINK')
            )
        msgInt.reply({
            content: 'Here is a link to all my commands',
            components: [link],
            // ephemeral:true
        })
    }
} as ICommand