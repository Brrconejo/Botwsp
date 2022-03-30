let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Grr.mp3'
conn.sendFile(m.chat, vn, 'Grr.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /grr|Grr/
handler.command = new RegExp
module.exports = handler
