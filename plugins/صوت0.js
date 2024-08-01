let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/خدت_الصدمة.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `خدت_الصدمة.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['ايه ده؟', 'إنت بتهزر؟', 'لا يا راجل!', 'معقول؟', 'بجد؟'] 
handler.customPrefix = /^(ايه ده|إنت بتهزر|لا يا راجل|معقول|بجد|🙂🙂)$/i;
handler.command = new RegExp;
export default handler