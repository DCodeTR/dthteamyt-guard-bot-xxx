const Discord = require("discord.js");
////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;

  const dthteamyoutube = new Discord.MessageEmbed().setImage(user.avatarURL());
  message.channel.send(dthteamyoutube);
};
////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "avatar",
  description: "DTH TEAM YOUTUBE",
  usage: "avatar",
};
