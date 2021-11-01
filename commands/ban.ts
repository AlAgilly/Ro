import { Interaction, MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Bans a user.',
    permissions: ['ADMINISTRATOR'],
    expectedArgs: '<user>',
    minArgs: 1,
    maxArgs: 1,
    slash: 'both',
    testOnly: true,
    options: [
        {
            name: 'user',
            description: 'The user you would like to ban.',
            required: true,
            type: 'USER',
          },
    ],
    callback: async ({interaction: msgInt, channel, args}) => {
        const user = args[0]

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('ban_yes')
                    .setEmoji('🔨')
                    .setLabel('Confirm')
                    .setStyle('SUCCESS')
            )
            .addComponents(
                new MessageButton()
                    .setCustomId('ban_no')
                    .setLabel('Cancel')
                    .setStyle('DANGER')
            )
        await msgInt.reply({
            content: 'Are you sure?',
            components: [row],
            ephemeral:true
        })

        const filter = (btnInt: Interaction) => {
            return msgInt.user.id === btnInt.user.id
        }

        const collector = channel.createMessageComponentCollector({
            filter,
            max: 1,
            time: 1000 * 10
        })

        collector.on('end', async (collection) => {

            if(collection.first()?.customId === 'ban_yes') {
                await msgInt.editReply({
                    content: 'An action has been taken.',
                    components:[],
                })

                await msgInt.channel?.send(`<@${user}> has been banned by <@${msgInt.user}>`)

            } else {
                await msgInt.editReply({
                    content: 'Action cancelled.',
                    components:[],
                })
            }

        })
    }
} as ICommand