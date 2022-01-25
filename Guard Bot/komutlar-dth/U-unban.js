const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new MessageEmbed().setDescription(`Bu Komutu Kullanabilmek İçin Üyelleri Ban Yetkin Olmalı!`))
    let user = args[0];
    const banList = await message.guild.fetchBans();////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
    if (!user || isNaN(user) || !banList.has(user)) {
        return message.channel.send(new MessageEmbed().setDescription(` Kullanıcı id hatalı veya kullanıcı yasaklı değil!`))
    }////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
    message.guild.members.unban(user);
    message.channel.send(new MessageEmbed().setDescription(` Başarılı!`))
};

exports.conf = {
    aliases: ["un-ban"]
};
////DTH TEAM YOUTUBE KANALINA ÖZEL ALTYAPI https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng
exports.help = {
    name: 'unban'
};