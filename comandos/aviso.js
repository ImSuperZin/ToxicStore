const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor('AVISO', "https://cdn.discordapp.com/emojis/460499215882387482.png?v=1")
      .setFooter(`Aviso feito por: ${message.author.username}`, message.author.avatarURL)
      .setDescription("" + args.join(" "));
      message.channel.send("@everyone").then(a=>a.delete(1));
      message.channel.send({embed})
      message.delete().catch();
      message.channel.send(sayMessage);
      

}

module.exports.help = {
  name: "say"
}
