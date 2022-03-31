let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Kchar.mp3'
conn.sendFile(m.chat, vn, 'Kchar.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /kchar|Kchar/
handler.command = new RegExp
module.exports = handler
