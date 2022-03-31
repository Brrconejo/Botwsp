let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Mis ojos.mp3'
conn.sendFile(m.chat, vn, 'Mis ojos.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /mis ojos|Mis ojos/
handler.command = new RegExp
module.exports = handler
