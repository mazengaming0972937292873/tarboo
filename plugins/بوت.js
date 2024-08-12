let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : (m.mentionedJid && m.mentionedJid[0]) ? m.mentionedJid[0] : (m.fromMe ? conn.user.jid : m.sender);
  let name = conn.getName(who);
  let mentionedUsername = `@${who.replace(/@.+/, '')}`; // اسم المستخدم المنشن

  let imgurl = 'https://telegra.ph/file/72f9dc162ba7c5be17bc0.jpg'; // رابط الصورة
  let filename = 'imgerror.jpg'; // اسم الملف

  // رسالة مع التعديل المطلوب
  let msg = `*ًمــرحــبــا ⌊ ${mentionedUsername} ⌉ انـا كـاسـبـر • تـحـتـاج الـى مـسـاعـدة؟ ، اكـتـب﹙.اوامــر﹚*\n\n> *مـمـنـوع اسـتـخـدام الـبـوت فـي الـدردشـات الـخـاصـة!*`;

  conn.sendFile(m.chat, imgurl, filename, msg, m, false, { thumbnail: Buffer.alloc(0), mentions: [who] });
};

handler.customPrefix = /^(بوت|bot|كاسبر)$/i;
handler.command = new RegExp;

export default handler;