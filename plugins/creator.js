let { MessageType } = (await import('@adiwajshing/baileys')).default
import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

 let tag = `@${m.sender.split('@')[0]}`
 let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999, status: 1, surface: 1, message: `${command} ${type}`, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;HENDRA-LUBECKð®ð©â¸;;;\nFN:HENDRA-LUBECKð®ð©â¸\nORG:HENDRA-LUBECKð®ð©â¸\nTITLE:\nitem1.TEL;waid=6281227607864:+62 812-2760-7864\nitem1.X-ABLabel:ðð¼ððð-ðð¿â¸\nX-WA-BIZ-DESCRIPTION:${htjava} Tá´á´ á´á´É´á´ÊÉªá´á´ sá´á´ á´ á´á´É´á´á´á´!!\nX-WA-BIZ-NAME:ðð¼ððð-ðð¿â¸\nEND:VCARD`
//------- NOMOR
 const pp = fs.readFileSync('./media/own.jpg')
  let nowner1 = `${nomorown1.split`@`[0]}@s.whatsapp.net`
  let nowner2 = `${nomorown2.split`@`[0]}@s.whatsapp.net`
let teksnomor = (
`â³ ââ â¸ *MÊ Oá´¡É´á´Ê* â¹ ââ â³
â£â® *${nameown1}* â¯â¢
â¬ @${nomorown1.split`@`[0]} â­
â
â£â® *${nameown2}* â¯â¢
â¬ @${nomorown2.split`@`[0]} â­
â`
)
//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown1 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1])
let teksbio = `ââ«¹â«º ð Nama : HENDRA LUBECKð®ð©
ââ«¹â«º âï¸ Nama RL : HAMBA ALLAH
ââ«¹â«º âï¸ Gender : Pria
ââ«¹â«º ð Agama : Islam
ââ«¹â«º â° Tanggal lahir : xxxx
ââ«¹â«º ð¨ Umur : xx
ââ«¹â«º ð§® Kelas : xx
ââ«¹â«º ð§© Hobby : xxxx
ââ«¹â«º ð¬ Sifat : ASIK,BAIK,RAMAH
ââ«¹â«º ðºï¸ Tinggal : Indonesia, Sumatra
âââââââââââââÂ·â¢
`
let ppown2 = await conn.profilePictureUrl(nomorown2 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio2 = `ââ«¹â«º ð Nama : HENDRA LUBECKð®ð©
âââ«¹â«º âï¸ Nama RL : HAMBA ALLAH

ââ«¹â«º âï¸ Gender : Pria

ââ«¹â«º ð Agama : Islam

ââ«¹â«º â° Tanggal lahir : xxxx

ââ«¹â«º ð¨ Umur : xx

ââ«¹â«º ð§® Kelas : xx

ââ«¹â«º ð§© Hobby : xxxx

ââ«¹â«º ð¬ Sifat : ASIK,BAIK,RAMAH

ââ«¹â«º ðºï¸ Tinggal : Indonesia, Sumatra
âââââââââââââÂ·â¢
`

  let tek = `â£âââ ã¨â£ *Ná´á´á´* â¤ã¨ ââââ¢
â
ð Oá´¡É´á´Ê TÉªá´á´á´ Rá´sá´á´É´á´ CÊá´á´ AÉ´á´Ê
ð Oá´¡É´á´Ê Bá´ÊÊá´á´ BÊá´á´á´ SÉªá´á´á´ Sá´á´á´
ð Gá´á´ Rá´sá´á´É´á´ Ká´Êá´ MÉªÉ´á´á´ Sá´
ð Eá´Éªá´á´É´Êá´ DÉªá´á´á´á´
ð CÊá´á´ Cá´á´¡á´ Gá´¡ AÉ´á´Ê AÉ´á´Ê Gá´¡ Bá´á´á´ TÉªá´á´Ê Lá´
ð CÊá´á´ AÉ´á´Ê Gá´á´ Já´Êá´s Bá´É´/BÊá´á´á´
ð Cá´ÊÊ BÊá´á´á´\nâ«¹ Ká´á´Éª *.rules* UÉ´á´á´á´ Má´ÊÉªÊá´á´ Rá´Êá´s Sá´Êá´É´É¢á´á´á´É´Ê â«º`
const sections = 
[{
title: `â«¹â«º Oá´Êá´Ê â«¹â«º`,
rows: [
{title: "â¸ Kontak", rowId: ".owner kontak"},
{title: "â¸ Nomor", rowId: ".owner nomor"},
{title: "â¸ Biodata ðð¼ððð-ðð¿", rowId: ".owner bio"},
{title: "â¸ Biodata Maxxy-Md", rowId: ".owner bio2"},
{title: "â¸ Script", rowId: ".sc"},
]}, {
title: `â¬ Sá´á´á´á´Êá´ Má´ â¬`,
rows: [
{title: "ã  Donasi", rowId: ".owner nomor"},
{title: "ã  Sewa", rowId: ".sewa"},
{title: "ã  Buy Premium", rowId: ".premium"},
]},]
const listMessage = {
  text: tek,
  footer: wm,
  title: null,
  buttonText: "CÊÉªá´á´",
  sections
}
  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {


        case 'kontak': 
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: ftroli })
        break
          case 'nomor':
         /* conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nomorown1] }})*/
 /*  conn.sendButton(m.chat, teksnomor, null, pp, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m, { contextInfo: { mentionedJid: [nomorown1] }})*/
 conn.send2ButtonImg(m.chat, fs.readFileSync('./media/own.jpg').buffer, teksnomor, `Halo ${tag}\nIá´á´ Oá´¡É´á´Ê Ká´â«ºâ«°â«¹\n` + botdate, `Sewa Bot`, `.sewa`, 'Menu', `.menu`, ftroli, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/_b4c00t4an_s3l3b',
    mediaType: 2, 
    description: sgc,
    title: "Join Sini Juga Cuy!",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "ð· Instagram", nomorown, 'ð¹ Nomor', [[null, null], [null, null],[null,null]], m)

   conn.sendButton(m.chat, 'ââà¼º *ð±ððð³ððð hendra-ðð¿* à¼»', teksbio, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
                        case 'bio2':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "ð· Instagram", nomorown, 'ð¹ Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, 'ââà¼º *ð±ððð³ððð HENDRA LUBECKð®ð©* à¼»', teksbio2, ppown2, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
           return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`â®â° Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i
export default handler
