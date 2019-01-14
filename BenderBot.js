const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});
 
client.login("NTM0MzIwMjc1NzEwNDEwNzY2.Dx344g.i-pQZFo7Dx93XVjjQ9rcZsyCi5k");