import { GuildMember } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Moderation',
    description: 'Kicks a user.',

    // permissions: ['ADMINISTRATOR'],
    requireRoles: true,
    slash: true,
    testOnly: true,
    guildOnly: true,

    minArgs: 2,
    expectedArgs: '<user> <reason>',
    expectedArgsTypes:['USER', 'STRING'],

    callback: ({interaction, args}) => {
        const target = interaction.options.getMember('user') as GuildMember

        if (!target) {
            return {
                custom: true,
                content: 'Please choose a user to kick.',
                ephemeral: false
            }
        }

        if(!target.kickable){
            return 'Cannot kick that user.'
        }

        args.shift()
        const reason = args.join(' ')
        return `You kicked <@${target.id}>`
    }
} as ICommand