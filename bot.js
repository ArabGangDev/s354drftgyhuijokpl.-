const client = new Discord.Client(); 
const Discord = require('discord.js');

client.on('ready', () => {
    client.user.setGame(`LOTE BOT`, 'https://twitch.tv/LOTE-BOT');
    console.log('Always Ready To Help!');
});

client.on("guildMemberAdd", member => {
  client.channels.find('id', '560421350867730442').send(`**welcome : [ ${member} ]**`)
});

client.login(process.env.BOT_TOKEN);
