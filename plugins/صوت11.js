let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/متسترجل.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `متسترجل.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['متسترجل', 'بتتخولن', 'استرجل'] 
handler.customPrefix = /^(متسترجل|بتتخولن|استرجل)$/i;
handler.command = new RegExp;
export default handler