let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/هرمونات.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `هرمونات.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['هرمونات', 'دي هرمونات','الهرمونات'] 
handler.customPrefix = /^(هرمونات|دي هرمونات|الهرمونات)$/i;
handler.command = new RegExp;
export default handler