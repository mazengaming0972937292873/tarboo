import { generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';  // إضافة مكتبة node-fetch لجلب البيانات
import axios from 'axios';

const fetchQuranData = async (surahNumber) => {
  try {
    const response = await fetch(`https://quran-wudy.vercel.app/surah/${surahNumber}`);
    const data = await response.json();
    return data.data.verses;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const handler = async (m, { conn, text, command }) => {
    const device = getDevice();

    const availableSurahs = [
        "الفاتحة", "البقرة", "ال عمران", "النساء", "المائدة", "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس",
        "هود", "يوسف", "الرعد", "إبراهيم", "الحجر", "النحل", "الإسراء", "الكهف", "مريم", "طه", "الأنبياء",
        "الحج", "المؤمنون", "النور", "الفرقان", "الشعراء", "النمل", "القصص", "العنكبوت", "الروم", "لقمان",
        "السجدة", "الأحزاب", "سبأ", "فاطر", "يس", "الصافات", "ص", "الزمر", "غافر", "فصلت", "الشورى", "الزخرف",
        "الدخان", "الجاثية", "الأحقاف", "محمد", "الفتح", "الحجرات", "ق", "الذاريات", "الطور", "النجم", "القمر",
        "الرحمن", "الواقعة", "الحديد", "المجادلة", "الحشر", "الممتحنة", "الصف", "الجمعة", "المنافقون", "التغابن",
        "الطلاق", "التحريم", "الملك", "القلم", "الحاقة", "المعارج", "نوح", "الجن", "المزمل", "المدثر", "القيامة",
        "الإنسان", "المرسلات", "النبأ", "النازعات", "عبس", "التكوير", "الإنفطار", "المطففين", "الإنشقاق", "البروج",
        "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد", "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق",
        "القدر", "البينة", "الزلزلة", "العاديات", "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل", "قريش", "الماعون",
        "الكوثر", "الكافرون", "النصر", "المسد", "الإخلاص", "الفلق", "الناس"
    ];

    if (command === 'سوره') {
        if (!text) {
            throw `⎔ ⋅ ───━ •﹝👑﹞• ━─── ⋅ ⎔\nما السوره التي تبحث عنها\n*يرجى إدخال رقم السورة*\n\n*مثال*:\n.سوره الفاتحة\n❐━═⏣⊰𝐁𝐘:𝐍𝐀𝐑𝐎𝐓𝐔⊰👑⊱𝐁𝐎𝐓⊱⏣═━❐*\n> الامر يجعل البوت يعيد تشغيل البوت او لا يرسل الصوت لو كانت السوره كبيره`;
        }

        const surahName = text.trim();

        const surahNumber = availableSurahs.indexOf(surahName) + 1;
        if (surahNumber === 0) {
            const surahList = availableSurahs.join('\n');
            throw `السورة "${surahName}" غير موجودة. يرجى اختيار سورة من القائمة التالية:\n\n${surahList}`;
        }

        const ayahs = await fetchQuranData(surahNumber);
        if (!ayahs) {
            throw "فشل في جلب بيانات السورة.";
        }

        const formattedList = Object.values(ayahs).map(v => (
            `${v.number.inSurah}. ${v.text.arab}`
        )).join('\n');

        const instructions = "📌 قم بالرد على هذه الرسالة برقم الآية المطلوب لاستقبال الصوت.";

        const zoro = {
            body: { text: `اتفضل السورة\n\n${formattedList}`.trim() },
            footer: { text: `${global.wm}`.trim() },
            header: {
                title: `*${surahName}*`,
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                            title: 'اختيارات الآيات',
                            sections: [{
                                title: 'الآيات',
                                rows: ayahs.map((ayah, index) => ({
                                    title: `آية ${ayah.number.inSurah}`,
                                    description: ayah.text.arab,
                                    id: `ايات ${ayah.number.inSurah}`
                                }))
                            }]
                        })
                    }
                ],
                messageParamsJson: ''
            }
        };

        const msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage: zoro,
                },
            },
        }, { userJid: conn.user.jid, quoted: m });

        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
        
    } else if (command === 'تلاوة') {
        if (!text) {
            throw 'يرجى تقديم رابط الصوت';
        }

        const doc = {
            audio: {
                url: text,
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            waveform: [100, 0, 100, 0, 100, 0, 100],
            fileName: 'surah.mp3',
        };

        await conn.sendMessage(m.chat, doc);
    }
};

handler.help = ['Elsonysurah <surah>'];
handler.tags = ['Elsonysurah'];
handler.command = ['سوره', 'تلاوة'];

export default handler;