const Discord = require('discord.js')
exports.run = (bot, message, args) =>
{
  let Discord = require('discord.js');
    var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
     if(collection.first() == null)
     {
       const embed = new Discord.RichEmbed()////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
       .setTitle(`  `)
       .setColor("RED");
       message.channel.send("Yasaklı Kullanıcı bulunamadı");
     }
     else
     {
       const dth = new Discord.RichEmbed()
       .setTitle("Yasaklı Kullanıcılar")
       .setColor("RED");////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(` **${user.tag}**`, `_________ _____________`);
       }
       message.channel.send({dth});
     }
   });////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
 }
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banlılar","banliste","banlist","ban-list"],
  permLevel: 0
};
module.exports.help = {
  name: 'banlist',
  description: 'DTH TEAM YT',
  usage: 'banlist'
};