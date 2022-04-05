let handler = function (m) {
	this.sendContact(m.chat, '6285695487137', 'Owner Griyzel Bot', m)
}

handler.customPrefix = ['🍭Owner Griyzel BOT'] 
handler.command = new RegExp

module.exports = handler