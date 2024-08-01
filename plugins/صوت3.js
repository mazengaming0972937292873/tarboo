let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/يابوت.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `يابوت.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['يابوت', 'فينك يا بوت', 'هو انت فين'] 
handler.customPrefix = /^(يابوت|فينك يا بوت|هو انت فين)$/i;
handler.command = new RegExp;
export default handler