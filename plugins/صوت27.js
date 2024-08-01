let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/اول مره قابلتك.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `اول مره قابلتك.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['اول مره قابلتك', 'اول ما قابلتك','لما قابلتك','يوم ما قابلتك'] 
handler.customPrefix = /^(اول مره قابلتك|اول ما قبلتك|لما قابلتك|يوم ما قابلتك)$/i;
handler.command = new RegExp;
export default handler