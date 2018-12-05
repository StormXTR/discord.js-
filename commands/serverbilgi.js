const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
    let hakkinda = "Sunucumuz Sohbet içindir";
    let sunucubilgi = new Discord.RichEmbed()
    .setDescription("Sunucu Hakkında")
    .setColor("#f4f141")
    .addField("Sunucu ismi: ", msg.guild.name)
    .addField("Kısa Bilgi: ", hakkinda)
    .addField("Katılma Tarihi: ", msg.guild.joinedAt)
    .addField("Sunucu Oluşturulma Tarihi: ", msg.guild.createdAt)
    .addField("Toplam Kişi Sayısı :", msg.guild.memberCount);

    return msg.channel.send(sunucubilgi);
}

module.exports.help = {
    name: "serverbilgi"
}