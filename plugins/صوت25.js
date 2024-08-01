let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/متزهقش.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `متزهقش.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['زهقان', 'انا زهقان'] 
handler.customPrefix = /^(انا زهقان|زهقان)$/i;
handler.command = new RegExp;
export default handler