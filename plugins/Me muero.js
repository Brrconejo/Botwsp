let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Me muero.mp3'
conn.sendFile(m.chat, vn, 'Me muero.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /me muero|Me muero/
handler.command = new RegExp
module.exports = handler
