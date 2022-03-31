let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Llamaba charly.mp3'
conn.sendFile(m.chat, vn, 'Llamaba charly.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /llamaba charly|Llamaba charly/
handler.command = new RegExp
module.exports = handler
