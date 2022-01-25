const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

exports.run = (client, message, args) => {

////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng

if (!message.member.permissions.has(" BAN_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
if (!message.guild) {
  const DTHTEAMYOUTUBE= new Discord.MessageEmbed()
    .setColor('RANDOM')
  .setTimestamp()////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng

  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('Uyarı', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(DTHTEAMYOUTUBE); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let selam = message.mentions.users.first();

  if (message.mentions.users.size < 1) return message.channel.send(`Lütfen sunucudan yasaklayacağınız kişiyi etiketleyin.`).catch(console.error);

  if (!message.guild.member(DTH).bannable) return message.channel.send(`❌ Belirttiğiniz kişinin Yetkisi Benden Daha Üstün!`);
  message.guild.member(DTH).ban();

  message.channel.send(" Başarılı, " + selam + " **İD'li kullanıcı** " + reason + " **sebebiyle sunucudan yasaklandı.**")
////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng

};
////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban'],
  permLevel: 0,
    kategori: "moderasyon",
};

exports.help = {
  name: 'ban',
  description: 'DTH TEAM YOUTUBE',
  usage: 'ban <@kullanıcı> <sebep>',

};
