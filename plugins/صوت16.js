let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/يابضاني.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `يابضاني.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['يبيضي', 'يابيضي', 'بيض', 'نينينيني', 'بيضي'] 
handler.customPrefix = /^(يبيضي|يابيضي|بيض|نينينيني|بيضي)$/i;
handler.command = new RegExp;
export default handler