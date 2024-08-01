let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/يسافلة.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `يسافلة.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['يسافله', 'يسافلة'] 
handler.customPrefix = /^(يسافله|يسافلة)$/i;
handler.command = new RegExp;
export default handler