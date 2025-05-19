const fs = require('fs-extra');
//const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61US66jRhTdS01ttfkYYyw9KWADxr+H/8ZRBmUooGwMuKrAQMuTKDtIhol61JNsIGvIIItIVtBLiHh+L91SOp0XKYyKS3HvOeeee9+COMEUjVEJem9BSnAOGaqPrEwR6AEt831EQBN4kEHQA0F/njmnkmqdqGi1zsvKDqJJhcM0Xu+iDUehOy1M5VBCUX8AtyZIs0OE3S8k3DvxZOF5E2NWLHYnOYZF4zQb657YYMFFS3dBKGJaLYf97fwB3OqMEBMcB3oaojMiMBqj0oaYvA6+2c+jKxFDbJmjzsYswzmuDIfNT6NgymJqSHo/F4XtRo9Pr4NvVvww1VoHr9UQDq3Utrc73x5Vx7yoWEGmpwjqziYJra0Y3OFTHMTIszwUM8zKV+s+HnBDsowuirrnjMJUyMXLj49dxykfZYFgtsgH/tB0ChLT1wG3VCOsKkffmieHaVkjYItwOiqcvRq6Qo7z1uRSyh1jNzrST4Hb5MUrp/+iO2ejq5Ms+22jE2UKfJwuxg521ZHtLziIVps8iwTotOZdvfs6+LtZpown4inNzpeNsI3aS+ZToxqN256srmaJc847aQMeqWl9hA9ZRr6EkjpHOcGizm3HJ1NjfGFy/DVZVqdLcD6knSov1whejEPlpk64gaOWq0TjYK6KMU8KeuIYXM76ziU9NIRgcz1cSbS4HtWHJ0YnVFoe6PG3JiAowJQRyHAS17Gu1ATQy5fIJYg9qQss+7J1qTvTyORgcsa2QSfnARoUmpF6u9VsOdw3CkyG57y0HkATpCRxEaXIG2LKElJOEaUwQBT0vn5qVM2ZoHPC0Ah7oAcUQRRkSZTbQlf6ir65hpBRmKZvYsRAE/gkOU8R6DGSoSZ4+kGUBUXocvJA7uu8zktKWxKl/mDAS/qAUyShZni+F13hM6IMnlPQ4+W23JE4ThBvzf8HR1+SlY7GdzlZUAVZETStw7flQYfjOGOgqoN/wdG+fdMEMSrY3ca1+CLfBD4mlK3jLI0S6L14/OUjdN0ki9myjN1+fUAE9D4JI8ZwHNCaWRZD4oY4R/2aB+j5MKLor34jgrwXLs87rJ94tQ1lbWwaS3MPaux1or9p05M/I0907wyn8Hxb4jipK3e79cU63gQxrHOBD99/9+2vP//+y7s/fnr/248nHAcf3v3wvpbpmUBdz0MM4ojW+tqCi5Fu6rPxhEx101T1QO0HKvhI+GWO7kaVVoepEsx2wxKvGtReTWeXKeL2V6WEQTzhSceG2WxZRYU4f/hMEtADGVc6jGpYuazN0sjUDdK0mPgRuSoNzmpYe20ez0K647uK8Ujp6pEIw0fuOlnBwzhtFJoy3/ILba7QIdv4u7C9u4pIuz7U1TyUYxd9Wgwd3A004cGmZOW2kAWLjXJYt5kjDM8h54WYXAwhLMr9Avt45M5I1yLc1fCuWFyO3c7GdbfWOQ+x6OfG0OkXuunNgut9wp82TPS82fHz8OGnVx+jp0X53JR/be0deO1A7tb8JMfz6v2H9aWhtVDZzmBTdJNTiwy4agCPQ2a6tntORqUCG0eBHNdUcj0O3OpRSCPI/IScQQ/A2CPJk3NIktWWtmI/+UKxvmZZ2vzOPIKUqR/H5DOTx0v3WzZJ0iGkIegBYSPLl3Xt+VJN0yWD7GXqgFo/0/UF3P4EfEEqXZ8IAAA=',
    PREFIXE: process.env.PREFIX || ".",
    GITHUB : process.env.GITHUB|| 'https://github.com/Keithkeizzah/ALPHA-MD',
    OWNER_NAME : process.env.OWNER_NAME || "Asad",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "923275374285",  
    CHATBOT : process.env.CHATBOT || "no",  
    CHATBOT_INBOX : process.env.CHATBOT_INBOX || "yes",                     
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    AUTO_REACT: process.env.AUTO_REACTION || "non",
    OWNER_REACT: process.env.OWNER_REACT || "yes",
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",  
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'yes',              
    EMOJIS: process.env.EMOJIS || "⚔️, 👿, 🌎, 💜",
    AUTOBIO_MSG: process.env.AUTOBIO_MSG || "I DON'T GIVE A idea⚔️",
   GREET_MSG: process.env.GREET_MSG || "Huskii am unavailable mzee 😂",               
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "yes",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no', 
    GREET : process.env.GREET || "yes", 
    VOICE_CHATBOT: process.env.VOICE_CHATBOT || 'no',
    VOICE_CHATBOT_INBOX: process.env.VOICE_CHATBOT_INBOX || 'yes',
              
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by Asad💗',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'yes',
    AUTOBIO: process.env.AUTOBIO || 'yes',       
    ANTICALL_MSG : process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS :process.env.EVENTS || "yes",
    CAPTION : process.env.CAPTION || "Asad Malik",
    BOT : process.env.BOT_NAME || 'ASAD_MD',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTICALL: process.env.ANTICALL || 'yes',              
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
