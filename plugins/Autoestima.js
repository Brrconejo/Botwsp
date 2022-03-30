let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Autoestima.mp3'
conn.sendFile(m.chat, vn, 'Autoestima.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /autoestima|Autoestima/
handler.command = new RegExp
module.exports = handler
