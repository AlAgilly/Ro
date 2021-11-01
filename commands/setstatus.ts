// import { Client } from 'discord.js'
// import { ICommand } from 'wokcommands'

// const setStatus = (client: Client, status: string, type: string) => {
//     client.user?.setPresence({
//         status: 'online',
//         activities: [
//             {
//                 type: parseInt(type),
//                 name: status,
//             },
//         ],
//     })
// }
    
// export default {
//     category: 'Configuration',
//     description: 'Updates Ro\'s status.',

//     minArgs: 2,
//     expectedArgs: '<type> <status>',
//     // expectedArgsTypes:['INTEGER', 'STRING'],
//     options: [
//         {
//             name: 'type',
//             description: 'Type 1 = Playing. Type 2 = Listening to. Type 3 = Watching.',
//             required: true,
//             type: 'STRING',
//         },
//         {
//             name: 'status',
//             description: 'The status message.',
//             required: true,
//             type: 'STRING',
//         },
//     ],

//     ownerOnly: true,
//     slash: true,
//     testOnly: true,
    
//     init: (client: Client) => {
//         const status = "Lynn code tirelessly"
//         setStatus(client, status, "3")
//     },
    
//     callback: ({ client, interaction, args }) => {
//         if(interaction?.options.getString('type') === null || parseInt(interaction?.options.getString('type') || "1") > 3) {
//             return `Please choose a type from 1 to 3.`
//         }
//         setStatus(client, (interaction?.options.getString('type') || "1"), (interaction?.options.getString('type') || "1"))
        
//         return 'Status set!'
//     },
// } as ICommand

import { Client } from 'discord.js'
import { ICommand } from 'wokcommands'

const setStatus = (client: Client, status: string) => {
  client.user?.setPresence({
    status: 'online',
    activities: [
      {
        name: status,
      },
    ],
  })
}

export default {
  // Best practice for the built-in help menu
  category: 'Configuration',
  description: 'Updates the status for the bot',
  
  // We need at least 1 word for the status.
  // maxArgs is -1 by default which means no limit.
  minArgs: 1,
  expectedArgs: '<status>',
  
  // Make this command owner only.
  // We will set the owner ID(s) in the next code snippet.
  ownerOnly: true,
  
  // This method is invoked only once whenever the command is registered
  init: (client: Client) => {
    // TODO: Load the status from the database
    const status = "Testing" // Would come from the database
    setStatus(client, status)
  },
  
  // This method is invoked anytime the command is ran
  callback: ({ client, text, message }) => {
    setStatus(client, text)
    
    // TODO: Store the status (text variable) to a database
    
    message.reply({
      content: 'Status set!'
    })
  },
} as ICommand