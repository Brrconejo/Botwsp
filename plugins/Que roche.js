let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Que roche.mp3'
conn.sendFile(m.chat, vn, 'Que roche.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /que roche|Que roche/
handler.command = new RegExp
module.exports = handler
