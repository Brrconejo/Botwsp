let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Gaa.mp3'
conn.sendFile(m.chat, vn, 'Gaa.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /gaa|Gaa/
handler.command = new RegExp
module.exports = handler
