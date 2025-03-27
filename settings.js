//CREATOR Gxyenn 
//Version Script No Version

const fs = require('fs');
const chalk = require('chalk');
const XlesySet = require('./XlesySet'); // Import konfigurasi dari XlesySet.js

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

// Data bot
global.author = XlesySet.author;
global.namestore = XlesySet.namestore;
global.packname = XlesySet.packname;
global.botname = XlesySet.botname;
global.owner = XlesySet.owner;
global.listprefix = XlesySet.listprefix;
global.listv = XlesySet.listv;
global.number_bot = XlesySet.number_bot;
global.tempatDB = 'database.json'
global.pairing_code = true

// Data pembayaran
global.dana = XlesySet.dana;
global.gopay = XlesySet.gopay;
global.ovo = XlesySet.ovo;
global.pulsa = XlesySet.pulsa;
global.qris = XlesySet.qris;

global.fake = {
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://telegra.ph/file/fe4843a1261fc414542c4.jpg',
	thumbnail: fs.readFileSync('./src/media/Xlesy.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: 'https://www.youtube.com/@Xlesy-Gxyenn',
	gh: 'https://github.com/Gxyenn/Gxyenn',
	gc: 'https://whatsapp.com/channel/0029Vap5nJh2UPBDIc9bja1s',
	ch: '120363334736301537@newsletter',
}

global.limit = {
	free: 15,
	premium: 999,
	vip: 9999
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	key0: 'Apikey mu telah habis!.\n _Silahkan Hubungi Creator Untuk Buy Apikey Mu Kembali_',
	owner: 'Fitur Khusus Owner!',
	admin: 'Fitur Khusus Admin!',
	botAdmin: 'Bot Bukan Admin!',
	group: 'Gunakan Di Group!',
	private: 'Gunakan Di Privat Chat!',
	limit: 'Limit Anda Telah Habis!',
	prem: 'Khusus User Premium!',
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

global.APIs = {
  Xlesy: 'http://localhost:3000/api',
}

global.APIKeys = {
  'http://localhost:3000/api': 'Xlesy-awokawok', // API Key yang dihasilkan
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
