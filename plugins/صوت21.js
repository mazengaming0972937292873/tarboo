let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/قول السؤال تاني.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `قول السؤال تاني.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['قول السؤال تاني', 'انت هنا', 'مش فاهم', 'مشفاهم'] 
handler.customPrefix = /^(قول السؤال تاني|انت هنا|مش فاهم|مشفاهم)$/i;
handler.command = new RegExp;
export default handler