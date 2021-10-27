import { ButtonInteraction, Interaction, Message, MessageActionRow, MessageButton } from "discord.js";
import { execPath } from "process";
import { ICommand } from "wokcommands";

export default {
    name:'username',
    aliases: ['p'],
    category: 'Fun & Games',
    description: 'Replies with "Pong!"',
    // expectedArgs: '',
    // minArgs: 0,
    // maxArgs: 0,
    permissions: ['ADMINISTRATOR'],
    // cooldown: '60s',
    // globalCooldown: '10m',
    hidden: false,
    ownerOnly: false,
    testOnly: false,
    guildOnly: false,
    slash: false,

    callback: ({}) => {}
} as ICommand