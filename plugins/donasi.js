let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 6285695487137
│┝‷✧ *Dana:* 6285695487137
│┝‷✧ *Linkaja:* 6285695487137
│┝‷✧ *Gopay:* 6285695487137
│┝‷✧ *Ovo:* 6285695487137
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6285695487137?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm