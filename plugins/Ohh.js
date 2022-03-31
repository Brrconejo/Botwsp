let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Ohh.mp3'
conn.sendFile(m.chat, vn, 'Ohh.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /ohh|Ohh/
handler.command = new RegExp
module.exports = handler
