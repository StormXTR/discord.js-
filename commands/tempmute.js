const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, msg, args) => {
    let tomute = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
    if(!tomute) return msg.reply("Kullanıcı Bulunamadı.");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return msg.reply("Bu kişiyi susturamam.");
    let muterole = msg.guild.roles.find(`name`, "susmuş");
    if(!muterole){
        try{
            muterole = await msg.guild.createRole({
                name: "susmuş",
                color: "#000000",
                permission:[]
            })
            msg.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermission(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        }catch(e){
            console.log(e.stack);
        }
    }
    let mutetime = args[1];
    if(!mutetime) return msg.reply("Bir zaman girmedin");

    await(tomute.addRole(muterole.id));
    msg.reply(`<@${tomute.id}> şu zamana kadar susturuldu ${ms(ms(mutetime))}`);

    setTimeout(function(){
        tomute.removeRole(muterole.id);
        msg.channel.send(`<@${tomute.id}> artık susmuş değil`);
    }, ms(mutetime));
    
}

module.exports.help = {
    name: "sustur"
}