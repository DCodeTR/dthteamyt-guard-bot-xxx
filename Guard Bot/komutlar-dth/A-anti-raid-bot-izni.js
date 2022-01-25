const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply(////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI
      "bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın."
    );
  if (db.has(`antiraidth_${message.guild.id}`) === false) {
    return message.channel.send(
      "Anti-raid açılmamış. Açmak için **!anti-raid aç**"
    );////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI
  }
  if (!args[1]) return message.reply("Lütfen bir bot id si girin");
////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
  if (isNaN(args[1])) {
    return message.reply("Sadece ID");
  }
  if (args[0] == "ver") {
    client.users.cache.get(args[0]);
    db.set(`botdthizin_${message.guild.id}.${args[1]}`, "aktif");
    message.reply(args[1] + "ID li bota izin verildi");
  }////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI
  if (args[0] == "kaldır") {
    db.delete(`botdthizin_${message.guild.id}.${args[1]}`, "aktif");
    message.reply(args[1] + " ID li botun izni kaldırıldı");
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
};
exports.help = {
  name: "bot-izni",
};
