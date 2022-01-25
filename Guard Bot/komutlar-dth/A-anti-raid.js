const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply(
      "bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın."
    );////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI
  if (args[0] == "aç") {
    if (db.has(`antiraidth_${message.guild.id}`) === true) {
      return message.channel.send("Anti-raid zaten açılmış.");
    }////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI
    db.set(`antiraidth_${message.guild.id}`, "anti-raid-aç");
    message.reply(
      "**Anti-raid sistemi başarıyla açıldı** "
    );
  }
////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI
  if (args[0] == "kapat") {
    if (db.has(`antiraidth_${message.guild.id}`) === false) {
      return message.channel.send(
        "Anti-raid açılmamış. Açmak için **!anti-raid aç**"
      );////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
    }
    db.delete(`antiraidth_${message.guild.id}`, "anti-raid-aç");
    message.reply(
      "**Anti-raid sistemi başarıyla kapatıldı** "
    );
  }////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI
  if (!args[0])
    return message.reply(
      "Lütfen geçerli işlem girin. Örnek: **!anti-raid aç/kapat**"
    );
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["antiraid"],
  permLevel: 0,
};
exports.help = {
  name: "anti-raid",
};
