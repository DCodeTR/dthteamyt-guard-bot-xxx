const Discord = require("discord.js");////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI
exports.run = async (client, message, args) => {
const DTHTEAMYOUTUBE = new Discord.MessageEmbed()
  .addField(`Pingim` ,`${client.ws.ping}ms`)
  message.channel.send(DTHTEAMYOUTUBE)
}////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI
exports.conf = {
  enabled: true,
  guildOnly: false,////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
  aliases: [],
  permLevel: 0
};////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI
exports.help = {
  name: 'piing',
  description: 'DTH TEAM YOUTUBE',
  usage: 'ping'
}; 