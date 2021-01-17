//META{"name":"discordrpc", "source":"https://github.com/TapsHTS/discord-rpc", "website":"https://neotuxbot.tk"}*//

/*
MIT License

Copyright (c) 2020-2021 Taps

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Updated Jan 17th, 2021.



(() => {
    const rpc = require('discord-rpc');
    const Discord = require('discord.js')
    const token = 'XXXXXX'; // Le token de votre bot
    
    const bot = new Discord.Client();
    const client = new rpc.Client({transport: 'ipc'});
    
    
    bot.on('ready', () => {
        client.login({clientId: bot.user.id});
        rpc.register(bot.user.id)
        client.on('ready', () => {
            client.request('SET_ACTIVITY', {
                pid: 9999,
                activity: {
                    details: 'Best Music Bot', // Pour faire une description
                    assets: {
                        large_image: "largekey", // Clé de la grande image (https://discord.com/developers/applications --> Rich Presence --> Art Assets)
                        large_text: "Add me !", // Text quand on passe sa souris sur l'image
                        small_image: "smallkey", // Clé de la petite image (https://discord.com/developers/applications --> Rich Presence --> Art Assets)
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
  })();

class discordrpc {
  getName() {
    return "discord-rpc";
  }
  getShortName() {
    return "D-RPC";
  }
  getDescription() {
    return "Custom rpc with stats bot.\nIf you have a problem, create an issue at https://github.com/TapsHTS/discord-rpc";
  }
  getVersion() {
    return "1.0.0";
  }
  getAuthor() {
    return "Taps";
  }
  constructor() {
    this.initialized = false;
    this.client = null;
  }
  load() {
    console.log(`%c[${"RPC"}]`, "color: #3a71c1; font-weight: 700;", ("Chargement du rpc"));
  }
  unload() {
    console.log(`%c[${"RPC"}]`, "color: #3a71c1; font-weight: 700;", ("Déchargement du rpc..."));
  }
  start() {
    console.log(`%c[${"RPC"}]`, "color: #008000; font-weight: 700;", ("Démaré !"));
    this.initialize(); 
  }
  initialize() {
    console.log(`%c[${"RPC"}]`, "color: #3a71c1; font-weight: 700;", ("Initialisation des ressources..."));
  }
  async stop() {
    console.log(`%c[${"RPC"}]`, "color: #FF0000; font-weight: 700;", ("Arrêt du rpc"));

  }
  
}
