let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/النت خرا.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `النت خرا.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['كسم وي', 'كسم النت', 'بيحمل', 'النت تعبان', 'النت بطيء', 'النت مش شغال', 'النت خرا', 'النت', 'الويفاي', 'we', 'الداتا', 'الشبكه'] 
handler.customPrefix = /^(كسم وي|كسم النت|بيحمل|النت تعبان|النت بطيء|النت مش شغال|النت خرا|النت|الويفاي|we|الداتا|الشبكه)$/i;
handler.command = new RegExp;
export default handler