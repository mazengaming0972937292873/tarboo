let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/مين زهقان.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `مين زهقان.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['مين زهقان', 'حد زهقان'] 
handler.customPrefix = /^(مين زهقان|حد زهقان)$/i;
handler.command = new RegExp;
export default handler