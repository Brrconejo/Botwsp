let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/No es jueves.mp3'
conn.sendFile(m.chat, vn, 'No es jueves.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /no es jueves|No es jueves/
handler.command = new RegExp
module.exports = handler
