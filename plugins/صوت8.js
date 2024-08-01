let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './وكلاك.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `وكلاك.mp3`}, {quoted: m});
};

handler.help = ['وكلاك']
handler.tags = ['notification']
handler.command = ['وكلاك', 'متغاظ', 'متغاظ مني', 'هتموت من غيظك', 'خليها تاكلك', 'موت متغاظ'];
handler.customPrefix = /^(وكلاك|متغاظ|متغاظ مني|هتموت من غيظك|خليها تاكلك|موت متغاظ)$/i;
handler.command = new RegExp;
export default handler