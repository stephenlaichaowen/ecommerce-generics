import { writable } from 'svelte/store'

const tourStore = writable([
  {
    date: 'JUL 16',
    location: 'DETROIT, MI',
    theatre: 'DTE ENERGY MUSIC THEATRE'
  },
  {
    date: 'JUL 19',
    location: 'TORONTO, ON',
    theatre: 'BUDWEISER STAGE'
  },
  {
    date: 'JUL 22',
    location: 'BRISTOW, VA',
    theatre: 'JIGGY LUBE LIVE'
  },
  {
    date: 'JUL 29',
    location: 'PHOENIX, AZ',
    theatre: 'AK-CHIN PAVILION'
  },
  {
    date: 'AUG 2',
    location: 'PHOENIX, AZLAS VEGAS, NV',
    theatre: 'T-MOBILE ARENA'
  },
  {
    date: 'AUG 7',
    location: 'CONCORD, CA',
    theatre: 'CONCORD PAVILION'
  }
])

export default tourStore