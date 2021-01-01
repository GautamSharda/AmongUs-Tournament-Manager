//Imports
const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

//On ready
client.on('ready', () => {
    console.log('The client is ready!')

//Getting the server 
const Guild = client.guilds.cache.get('<serverID>')
//Getting the members in the server
const Members = Guild.members.cache.map(members => members.nickname) 

//Creating a separate array identical to members
var arr = Members;

//exclude some people
var f =0;
for (f = 0; f < arr.length; f++){
    if (arr[f] === null){
        arr[f] = 'no nickname' 
    }
}
console.log(arr)

for (f = 0; f < arr.length; f++){
    if (arr[f].includes('<Nickname>')){
        arr.splice(f,1);
        console.log(arr)
    }
}

for (f = 0; f < arr.length; f++){
    if (arr[f].includes('no nickname')){
        arr.splice(f,1);
        console.log(arr)
    }
}
for (f = 0; f < arr.length; f++){
    if (arr[f].includes('no nickname')){
        arr.splice(f,1);
        console.log(arr)
    }
}
for (f = 0; f < arr.length; f++){
    if (arr[f].includes('no nickname')){
        arr.splice(f,1);
        console.log(arr)
    }
}
for (f = 0; f < arr.length; f++){
    if (arr[f].includes('no nickname')){
        arr.splice(f,1);
        console.log(arr)
    }
}
for (f = 0; f < arr.length; f++){
    if (arr[f].includes('no nickname')){
        arr.splice(f,1);
        console.log(arr)
    }
}
for (f = 0; f < arr.length; f++){
    if (arr[f].includes('no nickname')){
        arr.splice(f,1);
        console.log(arr)
    }
}
for (f = 0; f < arr.length; f++){
    if (arr[f].includes('no nickname')){
        arr.splice(f,1);
        console.log(arr)
    }
}
for (f = 0; f < arr.length; f++){
    if (arr[f].includes('no nickname')){
        arr.splice(f,1);
        console.log(arr)
    }
}
for (f = 0; f < arr.length; f++){
    if (arr[f].includes('no nickname')){
        arr.splice(f,1);
        console.log(arr)
    }
}


//Modifying arr such that each element is: 'name = points'
var index;
var p = 0;
for (index = 0; index < arr.length; index++){
    arr[index] += ` = `
    p = parseInt(p)
    arr[index] += p
}
console.log(arr)

//Commands    
client.on('message', message => {
    //Must start with the prefix
    if(message.content.startsWith(config.prefix)){
        
        //Ping command for test purposes
        if (message.content === `${config.prefix}ping`) {
            message.channel.send('Pong.')
        }

        //Scoreboard command
        if(message.content == `${config.prefix}scoreboard`){
            var g;
            for (g = 0; g < arr.length; g++){
                arr[g] = `\n${arr[g]}`
            }
            //Working on the embed below
            const exampleEmbed = new Discord.MessageEmbed()
	        .setColor('#0099ff')
	        .setTitle('Scoreboard')
	        .setURL('https://discord.js.org/')
	        .setDescription('Win = 100 points \nKill = 10 points \n Finish all your tasks = 20 points \n\nTop 3 get prizes!\n')
	        .addFields(
                {name: '\u200B', value: '\u200B'},
		        { name: 'Leaderboard', value: `${arr}` },
	        )
	        .setFooter('Produced by Gautam Sharda');

            message.channel.send(exampleEmbed);
        }
        
        //Create lobby command
        if(message.content === `${config.prefix}create`){
            
            //Function for randomly shuffling the array with members
            function shuffle(array) {
                var currentIndex = array.length, temporaryValue, randomIndex;
              
                // While there remain elements to shuffle...
                while (0 !== currentIndex) {
              
                  // Pick a remaining element...
                  randomIndex = Math.floor(Math.random() * currentIndex);
                  currentIndex -= 1;
              
                  // And swap it with the current element.
                  temporaryValue = array[currentIndex];
                  array[currentIndex] = array[randomIndex];
                  array[randomIndex] = temporaryValue;
                }
              
                return array;
              }

            //Creating another array identical to arr and members
            const TMembers = Guild.members.cache.map(members => members.nickname)
            console.log(TMembers)

            //excluding people
            var f =0;
            for (f = 0; f < TMembers.length; f++){
                if (TMembers[f] === null){
                    TMembers[f] = 'no nickname' 
                }
            }
            console.log(TMembers)

            for (f = 0; f < TMembers.length; f++){
                if (TMembers[f].includes('<Nickname>')){
                    TMembers.splice(f,1);
                    console.log(TMembers)
                }
            }
         
            for (f = 0; f < TMembers.length; f++){
                if (TMembers[f].includes('no nickname')){
                    TMembers.splice(f,1);
                    console.log(TMembers)
                }
            }
            for (f = 0; f < TMembers.length; f++){
                if (TMembers[f].includes('no nickname')){
                    TMembers.splice(f,1);
                    console.log(TMembers)
                }
            }
            for (f = 0; f < TMembers.length; f++){
                if (TMembers[f].includes('no nickname')){
                    TMembers.splice(f,1);
                    console.log(TMembers)
                }
            }
            for (f = 0; f < TMembers.length; f++){
                if (TMembers[f].includes('no nickname')){
                    TMembers.splice(f,1);
                    console.log(TMembers)
                }
            }
            for (f = 0; f < TMembers.length; f++){
                if (TMembers[f].includes('no nickname')){
                    TMembers.splice(f,1);
                    console.log(TMembers)
                }
            }
            for (f = 0; f < TMembers.length; f++){
                if (TMembers[f].includes('no nickname')){
                    TMembers.splice(f,1);
                    console.log(TMembers)
                }
            }
            for (f = 0; f < TMembers.length; f++){
                if (TMembers[f].includes('no nickname')){
                    TMembers.splice(f,1);
                    console.log(TMembers)
                }
            }
            for (f = 0; f < TMembers.length; f++){
                if (TMembers[f].includes('no nickname')){
                    TMembers.splice(f,1);
                    console.log(TMembers)
                }
            }
            for (f = 0; f < TMembers.length; f++){
                if (TMembers[f].includes('no nickname')){
                    TMembers.splice(f,1);
                    console.log(TMembers)
                }
            }


            //shuffling the array
            shuffle(TMembers)
            
            //putting mods in respective lobbies + honoring prefs 
            for (f = 0; f < TMembers.length; f++){
                if(TMembers[f].includes('<Nickname>')){
                    TMembers[f] = `${TMembers[6]}`
                    TMembers[6] = `Bivan`
                }
            }
        
            //splitting the array into 2 to generate 2 lobbies (can add more)
            const newMembers = TMembers.slice(0,9);
            const newMembers1 = TMembers.slice(9,19);
            //const newMembers2 = TMembers.slice(20,24);
                        
            //adding new line before each element so it looks nicer when printed
            var j;
            for(j = 0; j < newMembers.length; j++){
                newMembers[j] = `\n${newMembers[j]}`
            }
            for(j = 0; j < newMembers1.length; j++){
                newMembers1[j] = `\n${newMembers1[j]}`
            }
            //for(j = 0; j < newMembers2.length; j++){
               // newMembers2[j] = `\n${newMembers2[j]}`
            //}
            console.log(TMembers, newMembers, newMembers1);//add new members 2 if needed
            
            //Working on the embed below:
            const LobbyEmbed = new Discord.MessageEmbed()
	        .setColor('#0099ff')
	        .setTitle('Lobbies')
	        .setURL('https://discord.js.org/')
	        .setDescription('The groups that will be playing a game together.')
	        .addFields(
		        { name: '---Lobby 1---', value: `${newMembers}`, inline: true },
		        { name: '---Lobby 2---', value: `${newMembers1}`, inline: false },
	        )
            //.addField('---Lobby 3---', `${newMembers2}`, true)
            .setFooter('Produced by Gautam Sharda');

	        
            message.channel.send(LobbyEmbed);
        }
        
        //The point change commands
        if(message.content.includes(`@`)){ 
            //Getting the member that is mentioned
            const A = message.mentions.members.first()
            console.log(A)
            const ID = A.id

            //erasing spaces from the command, to ensure it matches the condition
            var command = message.content.trim()
            console.log(command)

            //add 10 points command
            if(command === `${config.prefix}10 <@!${ID}>` || command == `${config.prefix}10 <@${ID}>`){
                
                console.log('hello')

                //Getting the nickname of the member mentioned.
                const Username = A.nickname
                console.log(Username)
                
                //Updating the array containing members + points
                for (index = 0; index < arr.length; index++){
                    if (arr[index].includes(Username)){
                        //magic
                        console.log(arr[index])

                        var initial = arr[index]
                        
                        var string = arr[index];
                        var i = string.indexOf("=")
                        i = parseInt(i)
                        console.log(i)
                        var sliced = string.slice(i+1)
                        console.log(sliced) 
                        d = parseInt(sliced)
                        console.log(d)
                        d += 10
                        arr[index] = `${Username} = ${d}`

                        var final = arr[index]
                    }
                }
                console.log(arr)

                const Update = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Update')
                .setURL('https://discord.js.org/')
                .setDescription('The following change was made:')
                .addFields(
                    {name: 'Initial', value: `${initial}`},
                    { name: 'Final', value: `${final}` },
                )
                .setFooter('Produced by Gautam Sharda');

                message.channel.send(Update)
            }

            //add 100 points command
            if(command === `${config.prefix}100 <@${ID}>` || command === `${config.prefix}100 <@!${ID}>`){
                console.log('hello') 
                
                //Getting the nickname of the member mentioned.
                const Username = A.nickname
                
                //Updating the array containing members + points
                for (index = 0; index < arr.length; index++){
                    if (arr[index].includes(Username)){
                        //magic
                        console.log(arr[index])

                        var initial1 = arr[index]

                        var string = arr[index];
                        var i = string.indexOf("=")
                        i = parseInt(i)
                        console.log(i)
                        var sliced = string.slice(i+1)
                        console.log(sliced) 
                        d = parseInt(sliced)
                        console.log(d)
                        d += 100
                        arr[index] = `${Username} = ${d}`

                        var final1 = arr[index]
                    }
                }
                console.log(arr)
                const Update1 = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Update')
                .setURL('https://discord.js.org/')
                .setDescription('The following change was made:')
                .addFields(
                    {name: 'Initial', value: `${initial1}`},
                    { name: 'Final', value: `${final1}` },
                )
                .setFooter('Produced by Gautam Sharda');

                message.channel.send(Update1)
            }
            if(command === `${config.prefix}20 <@${ID}>` || command === `${config.prefix}20 <@!${ID}>`){
                console.log('hello') 
                
                //Getting the nickname of the member mentioned.
                const Username = A.nickname
                
                //Updating the array containing members + points
                for (index = 0; index < arr.length; index++){
                    if (arr[index].includes(Username)){
                        //magic
                        console.log(arr[index])

                        var initial1 = arr[index]

                        var string = arr[index];
                        var i = string.indexOf("=")
                        i = parseInt(i)
                        console.log(i)
                        var sliced = string.slice(i+1)
                        console.log(sliced) 
                        d = parseInt(sliced)
                        console.log(d)
                        d += 20
                        arr[index] = `${Username} = ${d}`

                        var final1 = arr[index]
                    }
                }
                console.log(arr)
                const Update3 = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Update')
                .setURL('https://discord.js.org/')
                .setDescription('The following change was made:')
                .addFields(
                    {name: 'Initial', value: `${initial1}`},
                    { name: 'Final', value: `${final1}` },
                )
                .setFooter('Produced by Gautam Sharda');

                message.channel.send(Update3)
            }
        
            }


        }
     })

})

//Connecting client
client.login(config.token)
