let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/نعم.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `نعم.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['نعم'] 
handler.customPrefix = /^(نعم)$/i;
handler.command = new RegExp;
export default handler