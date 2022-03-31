let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
//    pp = await conn.getProfilePicture(who)
} catch (e) {
} finally {
let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let username = conn.getName(who)
let str = `
*_ミ💖 Hola ${username} 💖彡_*

*<MENU DE AUDIOS/>*
- Escribe las palabras/frases tal como estan, no hace falta poner ningun prefijo (#, ., *, etc) 

° ඬ⃟🔊 _Quien es tu sempai botsito 7w7_
° ඬ⃟🔊 _Te diagnostico con gay_
° ඬ⃟🔊 _A nadie le importa_
° ඬ⃟🔊 _Fiesta del admin_
° ඬ⃟🔊 _Fiesta del admin 2_
° ඬ⃟🔊 _Vivan los novios_
° ඬ⃟🔊 _Feliz cumpleaños_
° ඬ⃟🔊 _Noche de paz_
° ඬ⃟🔊 _Buenos dias_
° ඬ⃟🔊 _Audio hentai_
° ඬ⃟🔊 _Chica lgante_
° ඬ⃟🔊 _Feliz navidad_
° ඬ⃟🔊 _Vete a la vrg_
° ඬ⃟🔊 _Pasa pack Bot_
° ඬ⃟🔊 _Atencion grupo_
° ඬ⃟🔊 _Marica quien_
° ඬ⃟🔊 _Murio el grupo_
° ඬ⃟🔊 _Oh me vengo_
° ඬ⃟🔊 _Viernes_
° ඬ⃟🔊 _Baneado_
° ඬ⃟🔊 _Sexo_
° ඬ⃟🔊 _Hola_
° ඬ⃟🔊 _Un pato_
° ඬ⃟🔊 _Nyanpasu_
° ඬ⃟🔊 _Te amo_
° ඬ⃟🔊 _Yamete_
° ඬ⃟🔊 _Bañate_
° ඬ⃟🔊 _Es puto_
° ඬ⃟🔊 _La biblia_
° ඬ⃟🔊 _Onichan_
° ඬ⃟🔊 _Bot puto_
° ඬ⃟🔊 _Shadow Bot_
° ඬ⃟🔊 _Siuuu_
° ඬ⃟🔊 _Rawr_
° ඬ⃟🔊 _UwU_
° ඬ⃟🔊 _:c_
° ඬ⃟🔊 _a_

(っ◔◡◔)っ ♥ O̶t̶r̶o̶s̶ ♥

° ඬ⃟🔊 _grr_
° ඬ⃟🔊 _gaa_
° ඬ⃟🔊 _jaa_
° ඬ⃟🔊 _telepatia_
° ඬ⃟🔊 _no es jueves_
° ඬ⃟🔊 _dolor_
° ඬ⃟🔊 _épico_
° ඬ⃟🔊 _coger_
° ඬ⃟🔊 _me voy_
° ඬ⃟🔊 _brr_
° ඬ⃟🔊 _linda_
° ඬ⃟🔊 _autoestima_
° ඬ⃟🔊 _hipocurita_
° ඬ⃟🔊 _llamaba charly_
° ඬ⃟🔊 _me muero_
° ඬ⃟🔊 _mff_
° ඬ⃟🔊 _mis ojos_
° ඬ⃟🔊 _ohh_
° ඬ⃟🔊 _que roche_
° ඬ⃟🔊 _ricolas_
° ඬ⃟🔊 _saoo_

*_「 𝙏͚͜͝͠𝙝͚͜͝͠𝙚͚͜͝͠ ͚͜͝͠𝙎͚͜͝͠𝙝͚͜͝͠𝙖͚͜͝͠𝙙͚͜͝͠𝙤͚͜͝͠𝙬͚͜͝͠ ͚͜͝͠𝘽͚͜͝͠𝙧͚͜͝͠𝙤͚͜͝͠𝙠͚͜͝͠𝙚͚͜͝͠𝙧͚͜͝͠𝙨͚͜͝͠ ͚͜͝͠-͚͜͝͠ ͚͜͝͠𝘽͚͜͝͠𝙤͚͜͝͠𝙩͚͜͝͠ ͚͜͝͠  」_*`.trim()
let mentionedJid = [who]
conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
}}
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.fail = null
module.exports = handler
