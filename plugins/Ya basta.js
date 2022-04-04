let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Ya basta.mp3'
conn.sendFile(m.chat, vn, 'Ya basta.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /ya basta|Ya basta/
handler.command = new RegExp
module.exports = handler
