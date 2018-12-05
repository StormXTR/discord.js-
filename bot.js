const botayar = require("./botayar.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
        console.log("Komutlar Bulunamadı.");
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} Yüklendi!`);
        bot.commands.set(props.help.name, props);
    });

})

bot.on ("ready", async () =>{
    console.log(`${bot.user.username} Bot Aktif!`);
});

bot.on ("message", async msg =>{
    if (msg.author.bot) return;
    if (msg.channel.type === "dm") return;

    let prefix = botayar.prefix;
    let messageArray = msg.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, msg, args);

});

bot.login(botayar.token);