import fetch from 'node-fetch';

const handler = async (m, { conn, command }) => {

    try {
        let imageBuffer;

        switch (command) {
            case 'فانرت':
                imageBuffer = await (await fetch(`https://api.lolhuman.xyz/api/random/art?apikey=${lolkeysapi}`)).buffer();
                conn.sendMessage(m.chat, { image: imageBuffer, caption: '*𝙱𝙾𝚃 𝙴𝙻 𝚃𝙰𝚁𝙱𝙾𝙾 | 🐼❤️)*' }, { quoted: m });
                m.react('🧧');
                break;
            
            case 'هوسبو':
                imageBuffer = await (await fetch(`https://api.lolhuman.xyz/api/random/husbu?apikey=${lolkeysapi}`)).buffer();
                conn.sendMessage(m.chat, { image: imageBuffer, caption: '*𝙱𝙾𝚃 𝙴𝙻 𝚃𝙰𝚁𝙱𝙾𝙾 | 🐼❤️)*' }, { quoted: m });
                m.react('🚩');
                break;

            case 'كانا':
                imageBuffer = await (await fetch(`https://api.lolhuman.xyz/api/random/kanna?apikey=${lolkeysapi}`)).buffer();
                conn.sendMessage(m.chat, { image: imageBuffer, caption: '*𝙱𝙾𝚃 𝙴𝙻 𝚃𝙰𝚁𝙱𝙾𝙾 | 🐼❤️)*' }, { quoted: m });
                m.react('🍧');
                break;

            case 'ميغومين':
                imageBuffer = await (await fetch(`https://api.lolhuman.xyz/api/random/megumin?apikey=${lolkeysapi}`)).buffer();
                conn.sendMessage(m.chat, { image: imageBuffer, caption: '*𝙱𝙾𝚃 𝙴𝙻 𝚃𝙰𝚁𝙱𝙾𝙾 | 🐼❤️)*' }, { quoted: m });
                m.react('🍂');
                break;

            case 'نيكو':
                imageBuffer = await (await fetch(`https://api.lolhuman.xyz/api/random/neko?apikey=${lolkeysapi}`)).buffer();
                conn.sendMessage(m.chat, { image: imageBuffer, caption: '*𝙱𝙾𝚃 𝙴𝙻 𝚃𝙰𝚁𝙱𝙾𝙾 | 🐼❤️)*' }, { quoted: m });
                m.react('😻');
                break;

            case 'شوتا':
                imageBuffer = await (await fetch(`https://api.lolhuman.xyz/api/random/shota?apikey=${lolkeysapi}`)).buffer();
                conn.sendMessage(m.chat, { image: imageBuffer, caption: '*𝙱𝙾𝚃 𝙴𝙻 𝚃𝙰𝚁𝙱𝙾𝙾 | 🐼❤️)*' }, { quoted: m });
                m.react('⚡');
                break;

            case 'وايف':
                imageBuffer = await (await fetch(`https://api.lolhuman.xyz/api/random/waifu?apikey=${lolkeysapi}`)).buffer();
                conn.sendMessage(m.chat, { image: imageBuffer, caption: '*𝙱𝙾𝚃 𝙴𝙻 𝚃𝙰𝚁𝙱𝙾𝙾 | 🐼❤️)*' }, { quoted: m });
                m.react('🍭');
                break;

            case 'الينا':
                imageBuffer = await (await fetch(`https://api.lolhuman.xyz/api/random/elaina?apikey=${lolkeysapi}`)).buffer(); // تصحيح الرابط
                conn.sendMessage(m.chat, { image: imageBuffer, caption: '*𝙱𝙾𝚃 𝙴𝙻 𝚃𝙰𝚁𝙱𝙾𝙾 | 🐼❤️)*' }, { quoted: m });
                m.react('🍚');
                break;
        }
    } catch (error) {
        console.error('Error fetching image:', error);
        conn.sendMessage(m.chat, 'حدث خطأ أثناء محاولة جلب الصورة. حاول مرة أخرى لاحقًا.', { quoted: m });
    }
}

handler.command = /^(فانرت|هوسبو|كانا|ميغومين|نيكو|شوتا|وايف|الينا)$/i
handler.tags = ['anime']
handler.help = ['فانرت', 'هوسبو', 'كانا', 'ميغومين', 'نيكو', 'شوتا', 'وايف', 'الينا']
handler.limit = true

export default handler