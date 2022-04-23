function handler(m) {
this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
this.sendContact(m.chat, '51958959882', 'Shadow - Creador - Oficial 1', m)
handler.command = /^(owner|dueño)$/i
module.exports = handler
