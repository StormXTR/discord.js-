const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, msg, args) => {
    let rUSer = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
    if(!rUSer) return msg.channel.send("Kullanıcı Bulunamadı.");
    let bsebep = args.join(" ").slice(22);
    if(!bsebep) return msg.channel.send("Bir sebep girmelisin");

    let reportembed = new Discord.RichEmbed()
    .setDescription("deneme")
    .setColor("#f47041")
    .addField("Bildiren Kişi: ", `${msg.author} ID: ${msg.author.id}`)
    .addField("Bildirilen Kişi: ", `${rUSer} ID: ${rUSer.id}`)
    .addField("Bildirim Tarihi: ", `${msg.createdAt}`)
    .addField("Sebep: ", bsebep);

    let reportchannel = msg.guild.channels.find(`name`, "rapor");
    if(!reportchannel) return msg.channel.send("`rapor` adlı kanal bulunamadı.");
    

    msg.delete().catch(O_o=>{});
    reportchannel.send(reportembed);
    
    return;
}

module.exports.help = {
    name: "bildir"
}