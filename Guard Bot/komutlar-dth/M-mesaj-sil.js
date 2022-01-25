const Discord = require('discord.js');
exports.run = function(client, message, args) {////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak  İçin Mesajları Yönet Yetkiniz Lazım.");
if(!args[0]) return message.channel.send("**Sileceğim Mesaj Miktarını Yazmalısın.** 🚫");
message.channel.bulkDelete(args[0]).then(() => {////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
  message.channel.send(` ${args[0]} Adet Mesajı Sildim. `).then(a => a.delete(200));
})
}
////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sil'],
  permLevel: 0
};
////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};