let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Jaa.mp3'
conn.sendFile(m.chat, vn, 'Jaa.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Gaa/
handler.command = new RegExp
module.exports = handler
