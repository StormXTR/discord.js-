const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()

    .setDescription("Bot Bilgi")
    .setThumbnail(bicon)
    .setColor("#74f442")
    .addField("Bot isim: ", bot.user.username)
    .addField("Katılma Tarihi: ", bot.user.createdAt);

    return msg.channel.send(botembed);
}

module.exports.help = {
    name: "botbilgi"
}