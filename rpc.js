const rpc = require('discord-rpc');
const Discord = require('discord.js');
const token = 'XXXXXXXX'; // Le token de votre bot

const bot = new Discord.Client()
const client = new rpc.Client({transport: 'ipc'});


bot.on('ready', () => {
	client.login({clientId: bot.user.id});
	rpc.register(bot.user.id)
	client.on('ready', () => {
		console.log('RPC Démarée');
		client.request('SET_ACTIVITY', {
			pid: 9999,
			activity: {
				details: 'Best Music Bot', // Pour faire une description
				assets: {
					large_image: "large-key-name", // Clé de la grande image
					large_text: "Add me !", // Text quand on passe sa souris sur l'image
					small_image: "small-key-name", // Clé de la petite image
					small_text: `💬 ${bot.guilds.cache.size} servers`, // Text quand on passe sa souris sur l'image
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
		});
	});
});

bot.login(token);
