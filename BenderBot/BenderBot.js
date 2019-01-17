const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("Help")) {
    message.channel.send("Estos son los comandos de que dispongo: \n 1. D4 -> Lanzo un dado de 4 caras. \n 2. D6 -> Lanzo un dado de 6 caras. \n 3. D20 -> Lanzo un dado de 20 caras. \n 4. meme -> Te lanzo un memazo.");
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
      var num= Math.trunc((Math.random()*4)+1);
      message.channel.send("Toma momazo", {
        files:[ "./meme/".concat(String(num).concat(".jpg"))]});
  }});
client.login("NTM0MzIwMjc1NzEwNDEwNzY2.Dx344g.i-pQZFo7Dx93XVjjQ9rcZsyCi5k");
