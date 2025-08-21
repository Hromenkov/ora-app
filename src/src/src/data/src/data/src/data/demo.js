const DEMO = {
  ru_synodal: {
    mrk: { name:'Евангелие от Марка', chapters:[[ 
      "Начало Евангелия Иисуса Христа, Сына Божия,",
      "как написано у пророков: «Вот, Я посылаю Ангела Моего…»",
      "Глас вопиющего в пустыне: приготовьте путь Господу…",
      "Явился Иоанн, крестя в пустыне…",
      "И выходили к нему вся страна Иудейская…",
      "Иоанн же носил одежду из верблюжьего волоса…"
    ] ]},
    gen: { name:'Бытие', chapters:[[
      "В начале сотворил Бог небо и землю.",
      "Земля же была безвидна и пуста…",
      "И сказал Бог: да будет свет. И стал свет.",
    ]]},
  },
  en_kjv: {
    mrk: { name:'The Gospel According to Mark', chapters:[[
      "The beginning of the gospel of Jesus Christ, the Son of God;",
      "As it is written in the prophets…",
      "The voice of one crying in the wilderness…",
    ]]}
  }
};

// генератор, если книги нет в DEMO
export function ensureBookData(translationId, bookId, language, bookName, chaptersTotal=10){
  if(!DEMO[translationId]) DEMO[translationId] = {};
  if(DEMO[translationId][bookId]) return DEMO[translationId][bookId];

  const chapters = [];
  const maxChapters = Math.min(chaptersTotal, 5);
  for(let c=1;c<=maxChapters;c++){
    const verses = [];
    const count = c===1 ? 20 : 15;
    for(let i=1;i<=count;i++){
      verses.push(language==='ru'
        ? `Стих ${i} из ${c} главы книги «${bookName}» (демо)`
        : `Verse ${i} from chapter ${c} of “${bookName}” (demo)`);
    }
    chapters.push(verses);
  }
  DEMO[translationId][bookId] = { name: bookName, chapters };
  return DEMO[translationId][bookId];
}

export function getTranslationData(id){ return DEMO[id] || {}; }
