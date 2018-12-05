const Discord = require('discord.js');

exports.run = function(client, msg, args) {

  let mesajsayisi = parseInt(args.join(' '));
  if (mesajsayisi.length < 1) return msg.channel.send('Kaç mesaj silmem gerektiğini belirtmedin.')
  if (mesajsayisi > 100) return msg.channel.send('100 adetden fazla mesaj silemem!');
  msg.channel.bulkDelete(mesajsayisi + 1);
  msg.channel.send(mesajsayisi +' adet mesaj sildim!')
};


exports.help = {
  name: 'temizle',
};
