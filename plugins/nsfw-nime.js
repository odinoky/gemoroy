
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command }) => {
	
	if (!global.db.data.chats[m.chat].nsfw) throw `🚫 El grupo no admite contenido nsfw \n\n Para habilitar escriba \n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 17) throw m.reply(`❎ Eres menor de edad! vuelve cuando tengas más de 18 años`)
   
   m.react(rwait)
let type = (command).toLowerCase()
switch (type) {
	
	//-- nsfw tipo anime
	case 'xwaifu':
        let xwai = await fetch(`https://api.waifu.pics/nsfw/waifu`)
        if (!xwai.ok) throw await xwai.text()
        let xwfu = await xwai.json()
        if (!xwfu.url) throw '❎ Error'
        conn.sendFile(m.chat, xwai.url, 'img.jpg', `✅ Random ${command}`, m)
        m.react(xmoji)    
  break

case 'blowjob':
case 'trap':
  let res = await fetch(`https://api.waifu.pics/nsfw/${command}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '❎ Error'
    conn.sendFile(m.chat, json.url, 'img.jpg', `✅ Random ${command}`, m)
    m.react(xmoji) 
break

case 'yuri':
case 'cum':
case 'xneko':
    let as = await conn.getFile(global.API('fgmods', `/api/nsfw-nime/${command}`, { }, 'apikey'))
    conn.sendFile(m.chat, as.data, 'img.jpg', `✅ Random ${command}`, m)
    m.react(xmoji) 
break

case 'hentai':
    let he = pickRandom(['yuri', 'cum', 'xneko', 'blowjob', 'ass', 'pussy'])
    let les = await conn.getFile(global.API('fgmods', `/api/nsfw-nime/${he}`, { }, 'apikey'))
    conn.sendFile(m.chat, les.data, 'img.jpg', `✅ Random ${command}`, m)
    m.react(xmoji) 
break

default:
 }

}
handler.help = ['xwaifu', 'xneko', 'blowjob', 'trap', 'yuri', 'cum', 'hentai']
handler.tags = ['ansfw']
handler.command = /^(xwaifu|xneko|blowjob|trap|yuri|cum|hentai)$/i
handler.diamond = true
handler.register = true
handler.group = true

export default handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
