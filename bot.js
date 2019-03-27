const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setGame(`LOTE BOT`, 'https://twitch.tv/LOTE-BOT');
    console.log('Always Ready To Help!');
});

client.on("guildMemberAdd", member => {
  client.channels.find('id', '560421350867730442').send(`**welcome ${member} To Lote Server**`)
});

client.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined " + `${member.guild.name}`)

});
client.on('guildMemberAdd', member => {
	console.log('User ' + member.user.username + ' has joined the server!')
	var role = member.guild.roles.find('name', '. Lote');
	member.addRole(role)
});

client.login(process.env.BOT_TOKEN);
