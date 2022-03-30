let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Épico.mp3'
conn.sendFile(m.chat, vn, 'Épico.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Epico|Epico|épico|Épico/
handler.command = new RegExp
module.exports = handler
