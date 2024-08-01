let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/كسم حياتي.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `كسم حياتي.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['كسم حياتي','يكسم حياتي'] 
handler.customPrefix = /^(كسم حياتي|يكسم حياتي)$/i;
handler.command = new RegExp;
export default handler