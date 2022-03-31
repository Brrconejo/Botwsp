let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Llamaba charly.mp3'
conn.sendFile(m.chat, vn, 'Llamaba charly.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(llamaba charly|Llamaba charly)$/i

module.exports = handler
