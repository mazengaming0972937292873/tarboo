let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/اشخر.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `اشخر.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['اشخر'] 
handler.customPrefix = /^(اشخر)$/i;
handler.command = new RegExp;
export default handler