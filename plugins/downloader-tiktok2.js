import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) return m.reply(`Use Example: ${usedPrefix+ command} https://vt.tiktok.com/ZSJE2ffo4`)
  let res = await fetch(`https://api.zahwazein.xyz/downloader/tiktok?apikey=79ec223a85&url=${text}`)
  let res2 = await res.json()
  let x = res2.result
  let cap = `Nih ${conn.getName(m.sender)}`
conn.sendFile(m.chat, x.link, 'tiktok.mp4', cap, m)
}
handler.help = ['tiktok', 'tt']
handler.tags = ['downloader']
handler.command = /^(tiktok)$/i

export default handler
