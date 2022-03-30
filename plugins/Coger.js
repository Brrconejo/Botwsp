let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Coger.mp3'
conn.sendFile(m.chat, vn, 'Coger.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /coger|Coger/
handler.command = new RegExp
module.exports = handler
