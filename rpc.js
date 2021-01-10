const rpc = require('discord-rpc');
const Discord = require('discord.js');
const id = 'XXXXXXX'; // L'id de votre application
const token = 'XXXXXXXX'; // Le token de votre bot


rpc.register(id)
const bot = new Discord.Client()
const client = new rpc.Client({transport: 'ipc'});
client.on('ready', () => {
    bot.on('ready', () =>{
    console.log('🎵 RPC ON');
    client.request('SET_ACTIVITY', {
        pid: 9999,
        activity: {
            details: 'Best Music Bot', // Pour faire une description
            assets: {
                large_image: "neotux", // Clé de la grande image
                large_text: "Add me !", // Text quand on passe sa souris sur l'image
                small_image: "icons8-robot-100", // Clé de la petite image
                small_text: `💬 ${bot.guilds.cache.size}/75 servers`, // Text quand on passe sa souris sur l'image
            },
            buttons: [
                {
                    label: "🎺 Invite", //Nom du bouton
                    url: "https://top.gg/bot/660891282465357834" //lien du bouton
                },
                {
                    label: "🚒 Support", //Nom du bouton
                    url: "https://discord.io/neoport" //Lien du bouton
                }
            ]
        }
    })
})
});
client.login({clientId: id});
bot.login(token)
