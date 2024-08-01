let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/الحب.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `الحب.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['الحب', 'مامعني الحب','ما هو الحب','يعني اي الحب'] 
handler.customPrefix = /^(الحب|مامعني الحب|ما هو الحب|يعني اي الحب)$/i;
handler.command = new RegExp;
export default handler