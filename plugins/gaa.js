let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Mega gaa.mp3'
conn.sendFile(m.chat, vn, 'Mega gaa.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /mega gaa|Mega Gaa/
handler.command = new RegExp
module.exports = handler
