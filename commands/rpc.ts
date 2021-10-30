import { Interaction, MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { ICommand } from 'wokcommands'
export default {
    name: 'rpc',
    category: 'Random',
    description: '✊ Rock, paper, scissors game.',
    expectedArgs: '<opponent>',
    minArgs: 0,
    maxArgs: 1,
    cooldown: '5s',
    testOnly: true,
    slash: true,
    guildOnly: true,
    options: [
        {
            name: 'opponent',
            description: 'The user you would like to verse.',
            required: false,
            type: 'USER',
          },
    ],
    
    callback: async ({ interaction: msgInt, channel, args }) => {

        let opponent = args[0]

        if (opponent === undefined) {
            opponent = "Ro"

            const rndInt = Math.floor(Math.random() * (3) + 1)      

            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('rock')
                        .setEmoji('✊')
                        .setLabel('Rock')
                        .setStyle('PRIMARY')
                )
                .addComponents(
                    new MessageButton()
                        .setCustomId('paper')
                        .setEmoji('🖐️')
                        .setLabel('Paper')
                        .setStyle('PRIMARY')
                )
                .addComponents(
                    new MessageButton()
                        .setCustomId('scissors')
                        .setEmoji('✌️')
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
                            content: `You chose **✊ Rock** and ${opponent} chose **✌️ Scissors**. You win!`,
                            components:[],
                        })
                    } else if (rndInt == 2) {
                        await msgInt.editReply({
                            content: `You chose **✊ Rock** and ${opponent} chose **🖐️ Paper**. You lose!`,
                            components:[],
                        })
                    } else if (rndInt == 1) {
                        await msgInt.editReply({
                            content: `You chose **✊ Rock** and ${opponent} chose **✊ Rock**. Its a tie!`,
                            components:[],
                        })
                    }
                } else if (collection.first()?.customId === 'paper') {
                    if (rndInt == 3) {
                        await msgInt.editReply({
                            content: `You chose **🖐️ Paper** and ${opponent} chose **✌️ Scissors**. You lose!`,
                            components:[],
                        })
                    } else if (rndInt == 2) {
                        await msgInt.editReply({
                            content: `You chose **🖐️ Paper** and ${opponent} chose **🖐️ Paper**. Its a tie!`,
                            components:[],
                        })
                    } else if (rndInt == 1) {
                        await msgInt.editReply({
                            content: `You chose **🖐️ Paper** and ${opponent} chose **✊ Rock**. You win!`,
                            components:[],
                        })
                    }
                } else if (collection.first()?.customId === 'scissors') {
                    if (rndInt == 3) {
                        await msgInt.editReply({
                            content: `You chose **✌️ Scissors** and ${opponent} chose **✌️ Scissors**. Its a tie!`,
                            components:[],
                        })
                    } else if (rndInt == 2) {
                        await msgInt.editReply({
                            content: `You chose **✌️ Scissors** and ${opponent} chose **🖐️ Paper**. You win!`,
                            components:[],
                        })
                    } else if (rndInt == 1) {
                        await msgInt.editReply({
                            content: `You chose **✌️ Scissors** and ${opponent} chose **✊ Rock**. You lose!`,
                            components:[],
                        })
                    }
                } else {
                    await msgInt.editReply({
                        content: `You took too long.`,
                        components:[],
                    })
                }

            })
        } else {
            const opponents = ((await channel.guild.members.fetch(args[0])).user)

            if ((msgInt.user.id === opponents.id) || opponents.bot) {
                return 'You cant verse yourself or a Bot.'
            }

            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('rock')
                        .setEmoji('✊')
                        .setLabel('Rock')
                        .setStyle('PRIMARY')
                )
                .addComponents(
                    new MessageButton()
                        .setCustomId('paper')
                        .setEmoji('🖐️')
                        .setLabel('Paper')
                        .setStyle('PRIMARY')
                )
                .addComponents(
                    new MessageButton()
                        .setCustomId('scissors')
                        .setEmoji('✌️')
                        .setLabel('Scissors')
                        .setStyle('PRIMARY')
                )
            
            await msgInt.user.send({
                content: 'hi',
                components: [row]
            })

            // const filter = (btnInt: Interaction) => {
            //     return msgInt.user.id === btnInt.user.id
            // }

            const collector = channel.createMessageComponentCollector({
                // filter,
                max: 1,
                time: 1000 * 10
            })

            await msgInt.reply({
                content: 'hello'
            })

            // await opponents.send({
            //     content: `<@${opponents.id}>: Rock, paper, or scissors?`,
            //     components: [row],
            // })


            collector.on('end', async (collection) => {
                
                if (collection.first()?.customId === 'rock') {

                    await msgInt.channel?.send({
                        content: `ROCKKKK`,
                    })
                }
                
            })
            const embed = new MessageEmbed()
                .setDescription('Hello World')
            return embed

        }
    }
} as ICommand