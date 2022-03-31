let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Ricolas.mp3'
conn.sendFile(m.chat, vn, 'Ricolas.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /ricolas|Ricolas/
handler.command = new RegExp
module.exports = handler
