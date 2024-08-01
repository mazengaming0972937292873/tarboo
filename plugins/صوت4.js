let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/قالو اي.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `قالو اي.mp3`}, {quoted: m});
};

handler.help = ['قالو اي', 'خوالات']
handler.tags = ['notification']
handler.command = ['قالو اي', 'شويه خولات', 'بيقولو اي', 'خوالات', 'قالو إيه', 'قالوا اي', 'قالوا إيه', 'بيقولوا اي', 'بيقولو إيه', 'قالو آي', 'شوية خولات', 'بيقولو ايه', 'بيقولو إيه', 'بيقولوا ايه', 'قالو آي', 'بيقولو إيه', 'بيقولوا', 'قالوا'];
handler.customPrefix = /^(قالو اي|شويه خولات|بيقولو اي|خوالات|قالو إيه|قالوا اي|قالوا إيه|بيقولوا اي|بيقولو إيه|قالو آي|شوية خولات|بيقولو ايه|بيقولو إيه|بيقولوا ايه|قالو آي|بيقولو إيه|بيقولوا|قالوا)$/i;
handler.command = new RegExp;
export default handler