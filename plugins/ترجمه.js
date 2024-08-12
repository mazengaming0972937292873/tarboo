import translate from '@vitalets/google-translate-api'

let handler = async (m, { args, usedPrefix, command }) => {
    let err = `
📌 *مثال:*

*${usedPrefix + command}* <النص>
`.trim()

    let text = args.join(' ')
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text

    try {
        let result = await translate(text, { to: 'ar' }).catch(_ => null)
        if (result) {
            m.reply(result.text)
        } else {
            m.reply('فشل في الترجمة، يرجى المحاولة لاحقاً.')
        }
    } catch (e) {
        m.reply('حدث خطأ أثناء الترجمة.')
    }
}

handler.help = ['ترجم <النص>']
handler.tags = ['tools']
handler.command = ['ترجمه', 'ترجمة', 'ترجم', 'tr']

export default handler