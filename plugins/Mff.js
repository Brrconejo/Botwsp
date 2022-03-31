let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Mff.mp3'
conn.sendFile(m.chat, vn, 'Mff.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /mff|Mff/
handler.command = new RegExp
module.exports = handler
