//This file is not used.
//This is an incomplete command handler that I realized I don't need.
//I would probably still make one anyway for future projects, even if small.

const { prefix } = require('./config.json')

module.exports = (client, aliases, callback) => {
    if (typeof aliases === 'string') {
        aliases = [aliases]
    }
    
    client.on('message', message => {
        const { content } = message;
        
        aliases.forEach(alias => {
            const command = '${prefix}${alias}'

            if (content.startsWith('${command} ') || content === command){
                console.log('Running the command ${command}')
                callback(message)
            }
        })
    })
}

