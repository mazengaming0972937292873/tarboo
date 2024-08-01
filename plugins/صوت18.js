let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/جود_كير.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `جود_كير.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['كود كير', 'حفاظة', 'بمبز', 'لبسو حفاظة', 'لبسو كود كير'] 
handler.customPrefix = /^(كود كير|حفاظة|بمبز|لبسو حفاظة|لبسو كود كير)$/i;
handler.command = new RegExp;
export default handler