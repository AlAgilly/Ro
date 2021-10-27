import { Interaction, MessageActionRow, MessageButton, Message } from "discord.js";
import { ICommand } from 'wokcommands'
export default {
    name: 'rpc',
    category: 'Random',
    description: 'Rock, paper, scissors game.',
    expectedArgs: '[opponent]',
    minArgs: 0,
    maxArgs: 1,
    testOnly: true,
    slash: true,
    guildOnly: true,
    
    callback: async ({message, interaction: msgInt, channel, args}) => {

        const rndInt = Math.floor(Math.random() * (3 - 1 + 1) + 1)      
 
        let opponent = args[0]

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('rock')
                    .setEmoji('🪨')
                    .setLabel('Rock')
                    .setStyle('PRIMARY')
            )
            .addComponents(
                new MessageButton()
                    .setCustomId('paper')
                    .setEmoji('🧾')
                    .setLabel('Paper')
                    .setStyle('PRIMARY')
            )
            .addComponents(
                new MessageButton()
                    .setCustomId('scissors')
                    .setEmoji('✂️')
                    .setLabel('Scissors')
                    .setStyle('PRIMARY')
            )
        await msgInt.reply({
            content: 'Rock, paper, or scissors?',
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

            if (collection.first()?.customId === 'rock') {
                if (rndInt == 3) {
                    await msgInt.editReply({
                        content: `You chose \`🪨 Rock\` and ${opponent} chose \`✂️ Scissors\`. You win!`,
                        components:[],
                    })
                } else if (rndInt == 2) {
                    await msgInt.editReply({
                        content: `You chose \`🪨 Rock\` and ${opponent} chose \`🧾 Paper\`. You lose!`,
                        components:[],
                    })
                } else if (rndInt == 1) {
                    await msgInt.editReply({
                        content: `You chose \`🪨 Rock\` and ${opponent} chose \`🪨 Rock\`. Its a tie!`,
                        components:[],
                    })
                }
            } else if (collection.first()?.customId === 'paper') {
                if (rndInt == 3) {
                    await msgInt.editReply({
                        content: `You chose \`🧾 Paper\` and ${opponent} chose \`✂️ Scissors\`. You lose!`,
                        components:[],
                    })
                } else if (rndInt == 2) {
                    await msgInt.editReply({
                        content: `You chose \`🧾 Paper\` and ${opponent} chose \`🧾 Paper\`. Its a tie!`,
                        components:[],
                    })
                } else if (rndInt == 1) {
                    await msgInt.editReply({
                        content: `You chose \`🧾 Paper\` and ${opponent} chose \`🪨 Rock\`. You win!`,
                        components:[],
                    })
                }
            } else if (collection.first()?.customId === 'scissors') {
                if (rndInt == 3) {
                    await msgInt.editReply({
                        content: `You chose \`✂️ Scissors\` and ${opponent} chose \`✂️ Scissors\`. Its a tie!`,
                        components:[],
                    })
                } else if (rndInt == 2) {
                    await msgInt.editReply({
                        content: `You chose \`✂️ Scissors\` and ${opponent} chose \`🧾 Paper\`. You win!`,
                        components:[],
                    })
                } else if (rndInt == 1) {
                    await msgInt.editReply({
                        content: `You chose \`✂️ Scissors\` and ${opponent} chose \`🪨 Rock\`. You lose!`,
                        components:[],
                    })
                }
            }

        })
    }
} as ICommand