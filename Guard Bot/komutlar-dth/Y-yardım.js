const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
  const dthteamyt = new Discord.MessageEmbed()
////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
  .setColor("BLACK")
  .setTitle(' **Dth Team Youtube | [Youtube Kanalımız](https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng) ')
  .setDescription(`
  
   !bot-izni aç/kapat | ** Anti Raid Bot İzni Özelliğini Açar**

   !anti-raid aç/kapat |** Anti Raid Özelliğini Açar**

   !avatar | **Etiketlediğiniz Kişinin Avatarını Atar**

   !ban | **Sunucudan Etiketlediğiniz Üyeyi Banlar**

   !kanal-koruma aç/kapat | **Kanal Koruma Özelliğini Açar**

   !kick | **Sunucudan Etiketlediğiniz Üyeyi Atar**

   !temizle | **Komutu Kullandığınız Kanalda Belirtiğiniz Kadar Mesajı Temizler**

   !nuke | **Komutu Kullandığınız Kanalı Tekrar Oluşturur**

   !ping | **Botun Pingini Gösterir

   !sohbet-aç | **Komutu Kullandığınız Kanalı Yazılabilir Hale Getirir**

   !sohbet-kapat |  **Komutu Kullandığınız Kanalı Yazılamaz Hale Getirir**

   !say | **Sunucudaki Üye Sayısını Gösterir**

   !unban | **Belirtiğiniz Kişinin Sunucudan Yasağını Kaldırır**

     [Bot Davet Linki](BOT DAVET LİNKİNİZ) **|** [Destek Sunucusu](SUNUCU LİNKİNİZ) **|** [Oy Linkim](OY LİNKİNİZ) **|

` )

.setImage("")


message.channel.send(dthteamyt)

}
exports.conf = {

  enabled: true,
////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
  guildOnly: false,
  permLevel: 0,

  aliases: ['help']

}
exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'


}
