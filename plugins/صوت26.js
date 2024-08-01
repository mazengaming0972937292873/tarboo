let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/احا.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `احا.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['احا', 'احاا','احااا','احاااا'] 
handler.customPrefix = /^(احا|احاا|احااا|احاااا)$/i;
handler.command = new RegExp;
export default handler