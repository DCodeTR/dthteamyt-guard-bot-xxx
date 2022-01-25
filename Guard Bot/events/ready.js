module.exports = client => {
    console.log(`${client.user.username} ismi ile giriş yapıldı!`);
    client.user.setStatus("online");

    console.log(`${client.user.id}                                                                                                                                                                     `)
  client.user.setActivity(`DTH TEAM YOUTUBE | https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng/videos`, { type: "WATCHING"});  

   console.log(`${client.user.username}: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + ` kullanıcıya hizmet veriliyor!`);
  };