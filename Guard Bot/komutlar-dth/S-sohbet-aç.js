////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: true
  });

  message.channel.send("Sohbet kanalı ``Yazılabilir`` durumuna getirildi.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
  aliases: [],
  kategori: "sohbet",
  permLevel: 3
};

exports.help = {
  name: "sohbet-aç",
  description: "DTH TEAM YOUTUBE",
  usage: "sohbet-aç"
};