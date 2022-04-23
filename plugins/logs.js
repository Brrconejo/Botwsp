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

*[❗] ¿Como usar este comando?*
_#logo (efecto) (texto)_
*Ejemplo:*
_#logo 3d-deep-sea-metal Shadow_

*[❗] Algunas veces le dira que falta otro texto, el uso seria el siguiente:*
_#logo (efecto) (texto1|texto2)_
*Ejemplo:*
_#logo Wolf-Logo-Galaxy Shadow|Brokers_

*_<LISTA DE EFECTOS/>_*

° ඬ⃟ #logo 3d-deep-sea-metal
° ඬ⃟ #logo American-flag-3D
° ඬ⃟ #logo 3D-sci-fi
° ඬ⃟ #logo 3D-rainbow-color-calligraphy
° ඬ⃟ #logo 3D-water-pipe
° ඬ⃟ #logo Halloween-skeleton
° ඬ⃟ #logo a-spooky-Halloween
° ඬ⃟ #logo a-cinematic-horror
° ඬ⃟ #logo a-sketch
° ඬ⃟ #logo blue-circuit-style
° ඬ⃟ #logo space
° ඬ⃟ #logo a-metallic
° ඬ⃟ #logo Creat-glossy-metalic
° ඬ⃟ #logo a-Captain-America
° ඬ⃟ #logo science-fiction
° ඬ⃟ #logo Video-game-classic-8-bit
° ඬ⃟ #logo green-horror-style
° ඬ⃟ #logo a-transformer
° ඬ⃟ #logo berry
° ඬ⃟ #logo layered
° ඬ⃟ #logo Online-thunder--generator
° ඬ⃟ #logo a-magma-hot
° ඬ⃟ #logo 3D-stone-cracked-cool
° ඬ⃟ #logo 3D-neon-light
° ඬ⃟ #logo impressive-glitch
° ඬ⃟ #logo a-glitch
° ඬ⃟ #logo Harry-Potter
° ඬ⃟ #logo embossed--on-cracked-surface
° ඬ⃟ #logo Broken-glass
° ඬ⃟ #logo art-paper-cut
° ඬ⃟ #logo artistic-black-and-white-status-and-quote-with-your-photos
° ඬ⃟ #logo Online-3D-gradient--generator
° ඬ⃟ #logo a-3D-glossy-metal
° ඬ⃟ #logo 3D-realistic--on-the-beach
° ඬ⃟ #logo a-watercolor                                                                                               
° ඬ⃟ #logo Online-multicolor-3D-paper-cut
° ඬ⃟ #logo Write-text-on-foggy-window
° ඬ⃟ #logo neon-devil-wings
° ඬ⃟ #logo 3D-underwater--generator
° ඬ⃟ #logo Online-black-and-white-bear-mascot-logo-creation
° ඬ⃟ #logo wonderful-graffiti-art
° ඬ⃟ #logo a-cool-graffiti-text-on-the-wall
° ඬ⃟ #logo cool-wall-graffiti
° ඬ⃟ #logo a-christmas-holiday-snow
° ඬ⃟ #logo a-futuristic-technology-neon-light                                                                         
° ඬ⃟ #logo snow--for-winter-holidays
° ඬ⃟ #logo a-cloud--on-the-sky
° ඬ⃟ #logo 3D-luxury-gold
° ඬ⃟ #logo 3D-gradient
° ඬ⃟ #logo Blackpink-logo-style
° ඬ⃟ #logo realistic-vintage-style-light-bulb
° ඬ⃟ #logo realistic-cloud
° ඬ⃟ #logo a-cloud--in-the-sky
° ඬ⃟ #logo Write-in-Sand-Summer-Beach
° ඬ⃟ #logo Sand-Writing
° ඬ⃟ #logo Sand-engraved-3d
° ඬ⃟ #logo a-summery-sand-writing
° ඬ⃟ #logo Foil-Balloon--For-Birthday
° ඬ⃟ #logo 3d-glue--with-realistic-style
° ඬ⃟ #logo space-3D
° ඬ⃟ #logo Metal-Dark-Gold
° ඬ⃟ #logo Glitch--Style-Tik-Tok
° ඬ⃟ #logo a-Stone
° ඬ⃟ #logo Neon-Light--With-Galaxy-Style
° ඬ⃟ #logo 1917-Style
° ඬ⃟ #logo 80's-Retro-Neon
° ඬ⃟ #logo Minion--3D
° ඬ⃟ #logo Pornhub-Style-Logo
° ඬ⃟ #logo Double-Exposure--Black-&-White
° ඬ⃟ #logo Holographic-3D
° ඬ⃟ #logo 3D-Avengers-logo
° ඬ⃟ #logo Metal-Purple-Dual-Effect
° ඬ⃟ #logo logo-style-Marvel-studios-Ver:-metal
° ඬ⃟ #logo logo-style-Marvel-studios
° ඬ⃟ #logo Deluxe-Silver
° ඬ⃟ #logo Color-Full-Luxury-Metal
° ඬ⃟ #logo Glossy-Blue-Metal
° ඬ⃟ #logo Deluxe-Gold
° ඬ⃟ #logo Glossy-Carbon
° ඬ⃟ #logo Fabric
° ඬ⃟ #logo Neon
° ඬ⃟ #logo New-Year-Cards-3D-By-Name
° ඬ⃟ #logo Happ-new-year-card-firework-gif
° ඬ⃟ #logo Fullcolor-Balloon
° ඬ⃟ #logo Text-Logo-3D-Metal
° ඬ⃟ #logo avatar-gold                                                                                                
° ඬ⃟ #logo Text-Logo-3D-Metal-Silver
° ඬ⃟ #logo Text-Logo-3D-Metal-Rose-Gold
° ඬ⃟ #logo Text-Logo-3D-Metal-Gold
° ඬ⃟ #logo Text-Logo-3D-Metal-Galaxy
° ඬ⃟ #logo Xmas-Cards-3D
° ඬ⃟ #logo Blood-Text-On-The-Frosted-Glass
° ඬ⃟ #logo Halloween-Fire
° ඬ⃟ #logo Metal-Dark-Gold
° ඬ⃟ #logo Lion-Logo-Mascot
° ඬ⃟ #logo Wolf-Logo-Black-&-White
° ඬ⃟ #logo Wolf-Logo-Galaxy
° ඬ⃟ #logo Ninja-Logo
° ඬ⃟ #logo Logo-Joker
° ඬ⃟ #logo Wicker
° ඬ⃟ #logo Natural-Leaves
° ඬ⃟ #logo Firework-Sparkle
° ඬ⃟ #logo Skeleton
° ඬ⃟ #logo Red-Foil-Balloon
° ඬ⃟ #logo Purple-Foil-Balloon
° ඬ⃟ #logo Pink-Foil-Balloon
° ඬ⃟ #logo Green-Foil-Balloon
° ඬ⃟ #logo Cyan-Foil-Balloon
° ඬ⃟ #logo Blue-Foil-Balloon
° ඬ⃟ #logo Gold-Foil-Balloon
° ඬ⃟ #logo Steel
° ඬ⃟ #logo Ultra-Gloss
° ඬ⃟ #logo Denim
° ඬ⃟ #logo Decorate-Green
° ඬ⃟ #logo Decorate-Purple
° ඬ⃟ #logo Peridot-Stone
° ඬ⃟ #logo Rock
° ඬ⃟ #logo Lava
° ඬ⃟ #logo Yellow-Glass
° ඬ⃟ #logo Purple-Glass
° ඬ⃟ #logo Orange-Glass
° ඬ⃟ #logo Green-Glass
° ඬ⃟ #logo Cyan-Glass
° ඬ⃟ #logo Blue-Glass
° ඬ⃟ #logo Red-Glass
° ඬ⃟ #logo Purple-Shiny-Glass
° ඬ⃟ #logo Captain-America
° ඬ⃟ #logo Robot-R2-D2
° ඬ⃟ #logo Rainbow-Equalizer
° ඬ⃟ #logo Toxic
° ඬ⃟ #logo Pink-Sparkling-Jewelry
° ඬ⃟ #logo Blue-Sparkling-Jewelry
° ඬ⃟ #logo Green-Sparkling-Jewelry
° ඬ⃟ #logo Purple-Sparkling-Jewelry
° ඬ⃟ #logo Gold-Sparkling-Jewelry
° ඬ⃟ #logo Red-Sparkling-Jewelry
° ඬ⃟ #logo Cyan-Sparkling-Jewelry
° ඬ⃟ #logo Purple-Glass
° ඬ⃟ #logo Decorative-Glass
° ඬ⃟ #logo Chocolate-Cake
° ඬ⃟ #logo Strawberry
° ඬ⃟ #logo Koi-Fish
° ඬ⃟ #logo Bread
° ඬ⃟ #logo Matrix-Style
° ඬ⃟ #logo Horror-Blood
° ඬ⃟ #logo Neon-Light
° ඬ⃟ #logo Thunder
° ඬ⃟ #logo 3D-Box
° ඬ⃟ #logo Neon
° ඬ⃟ #logo Road-Warning
° ඬ⃟ #logo 3D-Steel
° ඬ⃟ #logo Bokeh
° ඬ⃟ #logo Green-Neon
° ඬ⃟ #logo Free-Advanced-Glow
° ඬ⃟ #logo Dropwater
° ඬ⃟ #logo Break-Wall
° ඬ⃟ #logo Chrismast-Gift
° ඬ⃟ #logo Honey
° ඬ⃟ #logo Plastic-Bag-Drug
° ඬ⃟ #logo Horror-Gift
° ඬ⃟ #logo Marble-Slabs
° ඬ⃟ #logo Marble
° ඬ⃟ #logo Ice-Cold
° ඬ⃟ #logo Fruit-Juice
° ඬ⃟ #logo Rusty-Metal
° ඬ⃟ #logo Abstra-Gold
° ඬ⃟ #logo Biscuit
° ඬ⃟ #logo Bagel
° ඬ⃟ #logo Wood
° ඬ⃟ #logo SCI---Fi
° ඬ⃟ #logo Metal-Rainbow
° ඬ⃟ #logo Purple-Gem
° ඬ⃟ #logo Shiny-Metal
° ඬ⃟ #logo Yellow-Jewelry
° ඬ⃟ #logo Silver-Jewelry
° ඬ⃟ #logo Red-Jewelry
° ඬ⃟ #logo Purple-Jewelry
° ඬ⃟ #logo Orange-Jewelry
° ඬ⃟ #logo Green-Jewelry
° ඬ⃟ #logo Cyan-Jewelry
° ඬ⃟ #logo Blue-Jewelry
° ඬ⃟ #logo Hot-Metal
° ඬ⃟ #logo Hexa-Golden
° ඬ⃟ #logo Blue-Glitter
° ඬ⃟ #logo Purple-Glitter
° ඬ⃟ #logo Pink-Glitter
° ඬ⃟ #logo Green-Glitter
° ඬ⃟ #logo Silver-Glitter
° ඬ⃟ #logo Gold-Glitter
° ඬ⃟ #logo Bronze-Glitter
° ඬ⃟ #logo Eroded-Metal
° ඬ⃟ #logo Carbon
° ඬ⃟ #logo Pink-Candy
° ඬ⃟ #logo Blue-Metal
° ඬ⃟ #logo Blue-Gem
° ඬ⃟ #logo Black-Metal
° ඬ⃟ #logo 3D-Glowing-Metal
° ඬ⃟ #logo 3D-Chrome

*_「 𝙏͚͜͝͠𝙝͚͜͝͠𝙚͚͜͝͠ ͚͜͝͠𝙎͚͜͝͠𝙝͚͜͝͠𝙖͚͜͝͠𝙙͚͜͝͠𝙤͚͜͝͠𝙬͚͜͝͠ ͚͜͝͠𝘽͚͜͝͠𝙧͚͜͝͠𝙤͚͜͝͠𝙠͚͜͝͠𝙚͚͜͝͠𝙧͚͜͝͠𝙨͚͜͝͠ ͚͜͝͠-͚͜͝͠ ͚͜͝͠𝘽͚͜͝͠𝙤͚͜͝͠𝙩͚͜͝͠ ͚͜͝͠  」_*`.trim()
let mentionedJid = [who]
conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
}}
handler.command = /^(logos|Logos)$/i
handler.fail = null
module.exports = handler
