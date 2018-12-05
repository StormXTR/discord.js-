const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
    msg.delete();
    let yardimembed = new Discord.RichEmbed()
    .setDescription("Bot Yardım")
    .setColor("RANDOM")
    .setFooter("Bu bot 'Remos' adlı kişiye aittir.")
    .addField("Komutlar","Komutlar Buradan Görebilirsiniz..")
    .addField("!kurallar", "Kuralları görmenize yarar.")
    .addField("!öner", "Öneri kanalına öneri yazmaya yardımcı olur.")
    .addField("!serverbilgi", "Sunucu hakkında bilgi edinmenize yarar.")
    .addField("!botbilgi", "Bot hakkında bilgi edinmenize yarar.")
    .addField("!bildir", "Rahatsız olduğunuz bir kişiyi bildirmeye yarar.")
    .addField("Yetkili Komutlar","Sadece yetkili kişiler kullanabilir.")
    .addField("!sustur", "susturmak istediğiniz bir kişiyi !sustur <etiket> 10s/m/h/d ile sustura bilirsiniz.")
    .addField("!yazdir", "Bot'a istediğiniz bir şeyi yazdırmaya yarar.");

    return msg.channel.send(yardimembed);

}

module.exports.help = {
    name: "yardim"
}