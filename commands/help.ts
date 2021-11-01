import { MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    name:'help',
    category: 'Testing',
    description: 'Replies with pong.',
    slash: true,
    testOnly: true,
    callback: ({ interaction: msgInt }) => {
        const helplink = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Ro\'s Documentation')
                    .setStyle('LINK')
                    .setURL('https://alagilly.dev/Ro')
            )

        msgInt.reply({
            content: 'For a full list of Ro\'s commands and features, please visit the documentation website.',
            components: [helplink]
        })
    }
} as ICommand