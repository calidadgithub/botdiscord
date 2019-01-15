const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("me cago en tus putos muertos!");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("D6")) {
    var num;
    num=Math.trunc((Math.random()*6)+1);
    
    message.channel.send(num);
  }
});
 
   client.on("message", (message) => {
    if (message.content.startsWith("D4")) {
      var num;
      num = Math.trunc((Math.random() * 4) + 1);
      message.channel.send(num);
    }
  });

   
  client.on("message", (message) => {
    if (message.content.startsWith("D20")) {
      var num;
      num =Math.trunc((Math.random() * 20) + 1);
      message.channel.send(num);
    }
  });

  client.on("message", (message) => {
    if (message.content.startsWith("meme")) {
      message.channel.send("Toma momazo", {
        file: "http://link.to/your.file"
    }
  });
client.login("NTM0MzIwMjc1NzEwNDEwNzY2.Dx344g.i-pQZFo7Dx93XVjjQ9rcZsyCi5k");
