let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Me voy.mp3'
conn.sendFile(m.chat, vn, 'Me voy.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /me voy|Me voy/
handler.command = new RegExp
module.exports = handler
