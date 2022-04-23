let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Valio.mp3'
conn.sendFile(m.chat, vn, 'Valio.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /valio|valió|Valió|Valio/
handler.command = new RegExp
module.exports = handler
