let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Linda.mp3'
conn.sendFile(m.chat, vn, 'Linda.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /linda|Linda/
handler.command = new RegExp
module.exports = handler
