const Discord = require('discord.js');

module.exports = {
    run: (client, message) => {
        if(!message.guild.voiceConnection){ 
            return message.reply('There is nothing to resume :)');
        }
        if(message.guild.voiceConnection.player){
            const dispatcher = message.guild.voiceConnection.player.dispatcher;
            if(dispatcher.paused){
                dispatcher.resume();
            }
        }
    },
    get command() {
        return {
            name: 'resume',
            usage: 'resume'
        }
    }
}