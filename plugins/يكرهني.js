let toM = a => '@' + a.split('@')[0]

function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let self = m.sender // الشخص اللي بيديله الأمر
    let a, b

    // اخفاء نفس الشخص من القائمة
    ps = ps.filter(v => v !== self)

    // الحصول على شخص عشوائي
    a = ps.getRandom()

    do {
        b = ps.getRandom()
    } while (b === a)

    m.reply(`▣──────────────────
│
*هذا الشخص بيكرهك😔*
▣─❧ ${toM(a)} 
│
▣──────────────────`, null, {
        mentions: [a, b]
    })
}

handler.help = ['بيكرهني']
handler.tags = ['fun']
handler.command = ['بيكرهني']
handler.group = true

export default handler