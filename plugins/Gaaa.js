let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Gaaa.mp3'
conn.sendFile(m.chat, vn, 'Gaaa.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /gaaa|Gaaa/
handler.command = new RegExp
module.exports = handler
