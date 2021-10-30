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
                    .setURL('https://alagilly.dev/')
            )

        msgInt.reply({
            content: ''
        })
    }
} as ICommand