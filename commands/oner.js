const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
    let öneri = args.join(" ");

    let öneriembed = new Discord.RichEmbed()
    .setDescription("Öneri")
    .setColor("#1a23db")
    .addField("Yazan Kişi: ", msg.author)
    .addField("Öneri", öneri);

    let önerikanali = msg.guild.channels.find(`name`, "öneri");
    if (!önerikanali) return msg.channel.send("`öneri` Adlı kanal bulunamadı.");

    msg.delete().catch(O_o=>{});
    önerikanali.send(öneriembed);

    return;
}

module.exports.help = {
    name: "öner"
}