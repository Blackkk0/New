const fs = require("fs");
const Discord = require ("discord.js")
const moment = require ("moment")
const client = new Discord.Client();
const prefix = "";

client.login(""); 

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.username}!`);
  client.user.setStatus("ONLINE");
  client.user.setActivity(`Jack Sparrow`, { type: "PLAYING" });
  client.guilds.cache.forEach(g => {
    if (g.member(client.user).hasPermission("ADMINISTRATOR")) {
      g.fetchInvites().then(guildInvites => {});
    }
  });
});
