let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/عاوز اتجوز.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `عاوز اتجوز.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['عاوز اتجوز', 'انصحني', 'جوزني', 'جوزوني'] 
handler.customPrefix = /^(عاوز اتجوز|انصحني|جوزني|جوزوني)$/i;
handler.command = new RegExp;
export default handler