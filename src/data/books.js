export const BOOKS = {
  old: [
    { id: 'gen', name: 'Бытие', chapters: 50 },
    { id: 'exo', name: 'Исход', chapters: 40 },
    { id: 'psa', name: 'Псалтирь', chapters: 150 },
  ],
  new: [
    { id: 'mat', name: 'Ев. от Матфея', chapters: 28 },
    { id: 'mrk', name: 'Ев. от Марка', chapters: 16 },
    { id: 'luk', name: 'Ев. от Луки', chapters: 24 },
    { id: 'jhn', name: 'Ев. от Иоанна', chapters: 21 },
    { id: 'rom', name: 'К Римлянам', chapters: 16 },
  ],
};

export const getAllBooks = () => [...BOOKS.old, ...BOOKS.new];
export const getBook = (id) => getAllBooks().find(b => b.id === id);
export const isNew = (id) => BOOKS.new.some(b => b.id === id);

