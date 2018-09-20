const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const embed = new Discord.RichEmbed() 
    .setAuthor('VOTAÇÃO', "https://cdn.discordapp.com/emojis/482171966833426432.gif?v=1")
    .setDescription("" + args.join(" "))
    .setColor("#00ffa8")
    .setTimestamp()
    .setFooter(`Votação Feita Por: ${message.author.username}`, message.author.avatarURL); 
        message.delete().catch();
        message.channel.send({
        embed
    }).then(msg => {
        msg.react("👍").then(r => msg.react("👎"))
    });


}
