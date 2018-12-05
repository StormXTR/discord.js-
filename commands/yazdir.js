const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
    if(msg.member.roles.some(r=>["Sunucu Sahibi","Yönetici","Yoneticinin sag kolu","Fakers","Discord Destek Ekibi"].includes(r.name))){
        msg.delete();
        let text = args.join(" ");
        if (text.length < 1 ) return msg.reply("Bir kaç kelime yazmalısın!");
        msg.channel.sendCode("asciidoc", text);
      }else{
        msg.delete();
        msg.reply("Bunu yapabilmek için gerekli role sahip değilsin!");
      }
}

module.exports.help = {
    name: "yazdir"
}