let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Tengo ganas.mp3'
conn.sendFile(m.chat, vn, 'Tengo ganas.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /tengo ganas|Tengo ganas/
handler.command = new RegExp
module.exports = handler
