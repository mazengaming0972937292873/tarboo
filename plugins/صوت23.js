let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/ديوث.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `ديوث.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['ديوث', 'ديوث', 'ياديوث', 'معرص', 'يامعرص'] 
handler.customPrefix = /^(ديوث|ياديوث|معرص|يامعرص)$/i;
handler.command = new RegExp;
export default handler