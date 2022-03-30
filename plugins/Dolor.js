let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Dolor.mp3'
conn.sendFile(m.chat, vn, 'Dolor.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /dolor|Dolor/
handler.command = new RegExp
module.exports = handler
