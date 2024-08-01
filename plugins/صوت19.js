let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/قول_يشاعر.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `قول_يشاعر.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['يشاعر','قول يشاعر'] 
handler.customPrefix = /^(يشاعر|قول يشاعر)$/i;
handler.command = new RegExp;
export default handler