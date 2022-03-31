let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Hipocurita.mp3'
conn.sendFile(m.chat, vn, 'Hipocurita.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /hipocurita|Hipocurita/
handler.command = new RegExp
module.exports = handler
