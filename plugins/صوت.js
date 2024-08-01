let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/انها المخدرات.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `انها المخدرات.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['انتا شارب', 'انتا شارب حاجة', 'انها المخدرات', 'هى المخدرات', 'انت شارب حاجة', 'يا ابني انتا شارب', 'انتا فايق', 'هي المخدرات', 'مبسوط', 'رايق', 'مضروب', 'شارب ايه', 'شارب حاجه', 'هو انتا شارب', 'هو انت شارب', 'دا شارب حاجة'];
handler.customPrefix = /^(انتا شارب|انتا شارب حاجة|انها المخدرات|هى المخدرات|انت شارب حاجة|يا ابني انتا شارب|انتا فايق|هي المخدرات|مبسوط|رايق|مضروب|شارب ايه|شارب حاجه|هو انتا شارب|هو انت شارب|دا شارب حاجة)$/i;
handler.command = new RegExp;
export default handler