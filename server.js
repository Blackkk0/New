const fs = require("fs");
const Discord = require ("discord.js")
const moment = require ("moment")
const client = new Discord.Client();
const prefix = "";
//////////Black//////////
client.login(""); 
//////////Black//////////
client.on("ready", async () => {
  console.log(`Logged in as ${client.user.username}!`);
  client.user.setStatus("ONLINE");
  client.user.setActivity(`Black Activity Online Playing`, { type: "PLAYING" });
  client.guilds.cache.forEach(g => {
    if (g.member(client.user).hasPermission("ADMINISTRATOR")) {
      g.fetchInvites().then(guildInvites => {});
    }
  });
});
//////////Black//////////
