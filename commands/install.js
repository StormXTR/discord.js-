const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
    let kanallar = msg.guild.channels.find(`name`, "öneri,rapor");
    if (!kanallar) {
        msg.guild.createChannel("rapor");
        msg.guild.createChannel("öneri");
        msg.channel.sendCode("asciidoc", "=Kurulum Tamamlandı=");

        return;
    }
}

module.exports.help = {
    name: "kur"
}