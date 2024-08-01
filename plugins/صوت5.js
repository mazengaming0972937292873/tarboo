let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './رقم فيك.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `رقم فيك.mp3`}, {quoted: m});
};

handler.help = ['رقم فيك']
handler.tags = ['notification']
handler.command = ['رقم فيك', 'رقم غريب'] 
handler.customPrefix = /^(رقم فيك|رقم غريب)$/i;
handler.command = new RegExp;
export default handler