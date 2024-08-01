let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/يالهوي.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `يالهوي.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['يالهوي', 'يافضحتك', 'فضح'] 
handler.customPrefix = /^(يالهوي|يافضحتك|فضح)$/i;
handler.command = new RegExp;
export default handler