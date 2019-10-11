import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

const adapter = new LocalStorage('db')
const db = low(adapter)

db.defaults({
  categories: [
    {
      id: 1,
      name: 'CategoryOne',
    },
    {
      id: 2,
      name: 'CategoryTwo',
    },
    {
      id: 3,
      name: 'CategoryThree',
    },
  ],
  entries: [
    {
      id: 1,
      catId: 1,
      name: 'EntryOne',
      data: {
        user: 'user',
        pass: 'pass',
        host: 'host',
      },
      extra: [],
    },
    {
      id: 2,
      catId: 1,
      name: 'EntryTwo',
      data: {
        user: 'user',
        pass: 'pass',
        host: 'host',
      },
      extra: [],
    },
    {
      id: 3,
      catId: 1,
      name: 'EntryThree',
      data: {
        user: 'user',
        pass: 'pass',
        host: 'host',
      },
      extra: [],
    },
    {
      id: 4,
      catId: 2,
      name: 'EntryFour',
      data: {
        user: 'user',
        pass: 'pass',
        host: 'host',
      },
      extra: [],
    },
    {
      id: 5,
      catId: 2,
      name: 'EntryFive',
      data: {
        user: 'user',
        pass: 'pass',
        host: 'host',
      },
      extra: [],
    },
    {
      id: 6,
      catId: 2,
      name: 'EntrySix',
      data: {
        user: 'user',
        pass: 'pass',
        host: 'host',
      },
      extra: [],
    },
    {
      id: 7,
      catId: 3,
      name: 'EntrySeven',
      data: {
        user: 'user',
        pass: 'pass',
        host: 'host',
      },
      extra: [],
    },
    {
      id: 8,
      catId: 3,
      name: 'EntryEight',
      data: {
        user: 'user',
        pass: 'pass',
        host: 'host',
      },
      extra: [],
    },
    {
      id: 9,
      catId: 3,
      name: 'EntryNine',
      data: {
        user: 'user',
        pass: 'pass',
        host: 'host',
      },
      extra: [],
    },
  ],
}).write()

export function getCategories() {
  return db.get('categories').value()
}

export function getEntries() {
  return db.get('entries').value()
}

export function getEntryById(entryId) {
  const entId = parseInt(entryId, 10)
  const entry = db.get('entries').find({ id: entId })
  return entry.value()
}

export function getCategoryById(categoryId) {
  const catId = parseInt(categoryId, 10)
  const cat = db.get('categories').find({ id: catId })
  return cat.value()
}

export function getEntriesByCategoryId(categoryId) {
  const catId = parseInt(categoryId, 10)
  const entries = db.get('entries').filter({ catId })
  return entries.value()
}

export function updateEntry(entry) {
  db.get('entries')
    .find({ id: entry.id })
    .assign({
      catId: entry.catId,
      name: entry.name,
      data: entry.data,
      extra: entry.extra,
    })
    .write()
}
