let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Anco.mp3'
conn.sendFile(m.chat, vn, 'Anco.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /yair|Yair/
handler.command = new RegExp
module.exports = handler
