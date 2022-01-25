const Discord = require("discord.js");

exports.run = (client, message) => {
  let üyedth = new Discord.MessageEmbed()
    .setAuthor("SUNUCU ÜYE BİLGİ ")////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
    .setColor("BLACK")
   .addField("**Toplam Kullanıcı**",message.guild.memberCount )
    .setTimestamp()
  return message.channel.send(üyedth);
};

module.exports.conf = {
  aliases: ["say"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng

module.exports.help = {
  name: "üye-say",
  description: "",
  usage: ""
};