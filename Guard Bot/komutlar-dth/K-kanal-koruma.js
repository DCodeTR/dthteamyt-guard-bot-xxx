const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let prefix = ayarlar.prefix;
////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI
  if (!args[0]) {
    const dth = new Discord.MessageEmbed()
      .setDescription(`Bunu mu Arıyorsun? ${prefix}kanal-koruma aç/kapat`)
      .setTimestamp();
    return message.channel.send(dth);
  }////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI
  if (args[0] === "aç") {
    db.set(`kanalkorumadthteam_${message.guild.id}`, "Aktif");
    const dthteamyt = new Discord.MessageEmbed()
      .setDescription(
        `Kanal Koruma Başarıyla Açıldı.`
      )////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI
      .setTimestamp();
    return message.channel.send(dthteamyt);
  }
  if (args[0] === "kapat") {
    db.delete(`kanalkorumadthteam_${message.guild.id}`);
    const dthteamyt = new Discord.MessageEmbed()
      .setDescription(
        `Kanal Koruma Başarıyla Kapatıldı.`
      )////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
      .setTimestamp();
    return message.channel.send(dthteamyt);
  }
};
exports.conf = {
  aliases: ["kanal"],
  permLevel: 0,
};
exports.help = {
  name: "kanal-koruma",
};
