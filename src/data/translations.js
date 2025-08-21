export const TRANSLATIONS = [
  { id:'ru_synodal', name:'Синодальный', language:'ru', year:'1876', status:'ready' },
  { id:'en_kjv',     name:'King James',  language:'en', year:'1611', status:'ready' },
  { id:'en_bbe',     name:'Basic English', language:'en', year:'1949', status:'ready' },
];

export const byId = (id) => TRANSLATIONS.find(t => t.id === id);
export const firstByLang = (lang) => TRANSLATIONS.find(t => t.language === lang && t.status === 'ready');

