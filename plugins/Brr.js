let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Brr.mp3'
conn.sendFile(m.chat, vn, 'Brr.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /brr|Brr/
handler.command = new RegExp
module.exports = handler
