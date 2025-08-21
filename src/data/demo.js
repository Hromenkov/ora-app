const DEMO = {
  ru_synodal: {
    mrk: { name:'Евангелие от Марка', chapters:[[
      "Начало Евангелия Иисуса Христа, Сына Божия,",
      "как написано у пророков: «Вот, Я посылаю Ангела Моего пред лицем Твоим, который приготовит путь Твой пред Тобою».",
      "Глас вопиющего в пустыне: приготовьте путь Господу, прямыми сделайте стези Ему.",
      "Явился Иоанн, крестя в пустыне и проповедуя крещение покаяния для прощения грехов.",
      "И выходили к нему вся страна Иудейская и Иерусалимляне...",
      "Иоанн же носил одежду из верблюжьего волоса..."
    ]]},
    gen: { name:'Бытие', chapters:[[
      "В начале сотворил Бог небо и землю.",
      "Земля же была безвидна и пуста...",
      "И сказал Бог: да будет свет. И стал свет."
    ]]},
  },
  en_kjv: {
    mrk: { name:'The Gospel According to Mark', chapters:[[
      "The beginning of the gospel of Jesus Christ, the Son of God;",
      "As it is written in the prophets...",
      "The voice of one crying in the wilderness..."
    ]]}
  }
};

export function ensureBookData(trId, bookId, lang, bookName, chaptersTotal=10){
  if (!DEMO[trId]) DEMO[trId] = {};
  if (DEMO[trId][bookId]) return DEMO[trId][bookId];

  const chapters = [];
  const max = Math.min(chaptersTotal, 5);
  for (let c = 1; c <= max; c++){
    const count = c===1 ? 20 : 15;
    const verses = Array.from({length:count},(_,i)=>
      lang==='ru'
        ? `Стих ${i+1} из ${c} главы книги «${bookName}» (демо)`
        : `Verse ${i+1} from chapter ${c} of “${bookName}” (demo)`
    );
    chapters.push(verses);
  }
  DEMO[trId][bookId] = { name: bookName, chapters };
  return DEMO[trId][bookId];
}
