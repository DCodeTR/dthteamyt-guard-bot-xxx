const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, message, args) => {

    const DEATHHBOT = new Discord.MessageEmbed()
    .setColor("#BLACK")
    .setDescription('Bu Komutu Kullanabilmek için **Kanalları Yönet** Yetkin Olmalı.')
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(DEATHHBOT) 
////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
let channel = message.mentions.channels.first() || message.channel;
message.channel.send(` Nuke İşlemi Uygulanıyor....`);
////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
let attachment = new Discord.MessageAttachment('Kanal Yeniden Oluşturuldu. | DTH TEAM YOUTUBE');

let position = channel.position;
setTimeout(() => {
channel.delete();
channel.clone().then(s => {
s.setPosition(position);
s.send(attachment);
});
}, 280)


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['nuke'],
  permLevel: 0
};
////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
exports.help = {
  name: 'nuke'
};