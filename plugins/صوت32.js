let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/محن.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `محن.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['محن', 'اية المحن دا','بطل محن','ممحون'] 
handler.customPrefix = /^(محن|اية المحن دا|بطل محن|ممحون)$/i;
handler.command = new RegExp;
export default handler