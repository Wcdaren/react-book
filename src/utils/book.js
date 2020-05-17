import { realPx } from './utils'
import { getReadTime } from './localStorage'
import Default from '@/assets/style/theme/Default'
import Gold from '@/assets/style/theme/Gold'
import Eye from '@/assets/style/theme/Eye'
import Night from '@/assets/style/theme/Night'

export const FONT_SIZE_LIST = [
  { fontSize: 12 },
  { fontSize: 14 },
  { fontSize: 16 },
  { fontSize: 18 },
  { fontSize: 20 },
  { fontSize: 22 },
  { fontSize: 24 },
]

export const FONT_FAMILY = [
  { font: 'Default' },
  { font: 'Cabin' },
  { font: 'Days One' },
  { font: 'Montserrat' },
  { font: 'Tangerine' },
]

export function genThemeList(t) {
  return [
    {
      alias: t('themeDefault'),
      name: 'Default',
      style: {
        body: {
          color: '#4c5059',
          background: '#f2f3f4',
          'padding-top': `${realPx(48)}px!important`,
          'padding-bottom': `${realPx(48)}px!important`,
        },
        img: {
          width: '100%',
        },
        '.epubjs-hl': {
          fill: 'red',
          'fill-opacity': '0.3',
          'mix-blend-mode': 'multiply',
        },
      },
    },
    {
      alias: t('themeGold'),
      name: 'Gold',
      style: {
        body: {
          color: '#5c5b56',
          background: '#c6c2b6',
          'padding-top': `${realPx(48)}px!important`,
          'padding-bottom': `${realPx(48)}px!important`,
        },
        img: {
          width: '100%',
        },
        '.epubjs-hl': {
          fill: 'red',
          'fill-opacity': '0.3',
          'mix-blend-mode': 'multiply',
        },
      },
    },
    {
      alias: t('themeEye'),
      name: 'Eye',
      style: {
        body: {
          color: '#404c42',
          background: '#a9c1a9',
          'padding-top': `${realPx(48)}px!important`,
          'padding-bottom': `${realPx(48)}px!important`,
        },
        img: {
          width: '100%',
        },
        '.epubjs-hl': {
          fill: 'red',
          'fill-opacity': '0.3',
          'mix-blend-mode': 'multiply',
        },
      },
    },
    {
      alias: t('themeNight'),
      name: 'Night',
      style: {
        body: {
          color: '#cecece',
          background: '#000000',
          'padding-top': `${realPx(48)}px!important`,
          'padding-bottom': `${realPx(48)}px!important`,
        },
        img: {
          width: '100%',
        },
        '.epubjs-hl': {
          fill: 'red',
          'fill-opacity': '0.3',
          'mix-blend-mode': 'multiply',
        },
      },
    },
  ]
}

export function genGlobalThemeList(name = 'Default') {
  switch (name) {
    case 'Default':
      return Default
    case 'Gold':
      return Gold
    case 'Eye':
      return Eye
    case 'Night':
      return Night
    default:
      return Default
  }
}

export function getReadTimeByMinute(fileName) {
  if (!getReadTime(fileName)) {
    return 0
  } else {
    return Math.ceil(getReadTime(fileName) / 60)
  }
}

export function categoryText(category, t) {
  switch (category) {
    case 1:
      return t('computerScience')
    case 2:
      return t('socialSciences')
    case 3:
      return t('economics')
    case 4:
      return t('education')
    case 5:
      return t('engineering')
    case 6:
      return t('environment')
    case 7:
      return t('geography')
    case 8:
      return t('history')
    case 9:
      return t('laws')
    case 10:
      return t('lifeSciences')
    case 11:
      return t('literature')
    case 12:
      return t('biomedicine')
    case 13:
      return t('businessandManagement')
    case 14:
      return t('earthSciences')
    case 15:
      return t('materialsScience')
    case 16:
      return t('mathematics')
    case 17:
      return t('medicineAndPublicHealth')
    case 18:
      return t('philosophy')
    case 19:
      return t('physics')
    case 20:
      return t('politicalScienceAndInternationalRelations')
    case 21:
      return t('psychology')
    case 22:
      return t('statistics')
    default:
      return '暂无标题'
  }
}
export function getCategoryName(id) {
  switch (id) {
    case 1:
      return 'ComputerScience'
    case 2:
      return 'SocialSciences'
    case 3:
      return 'Economics'
    case 4:
      return 'Education'
    case 5:
      return 'Engineering'
    case 6:
      return 'Environment'
    case 7:
      return 'Geography'
    case 8:
      return 'History'
    case 9:
      return 'Laws'
    case 10:
      return 'LifeSciences'
    case 11:
      return 'Literature'
    case 12:
      return 'Biomedicine'
    case 13:
      return 'BusinessandManagement'
    case 14:
      return 'EarthSciences'
    case 15:
      return 'MaterialsScience'
    case 16:
      return 'Mathematics'
    case 17:
      return 'MedicineAndPublicHealth'
    case 18:
      return 'Philosophy'
    case 19:
      return 'Physics'
    case 20:
      return 'PoliticalScienceAndInternationalRelations'
    case 21:
      return 'Psychology'
    case 22:
      return 'Statistics'
    default:
      return ''
  }
}

export const categoryList = {
  'ComputerScience': 1,
  'SocialSciences': 2,
  'Economics': 3,
  'Education': 4,
  'Engineering': 5,
  'Environment': 6,
  'Geography': 7,
  'History': 8,
  'Laws': 9,
  'LifeSciences': 10,
  'Literature': 11,
  'Biomedicine': 12,
  'BusinessandManagement': 13,
  'EarthSciences': 14,
  'MaterialsScience': 15,
  'Mathematics': 16,
  'MedicineAndPublicHealth': 17,
  'Philosophy': 18,
  'Physics': 19,
  'PoliticalScienceAndInternationalRelations': 20,
  'Psychology': 21,
  'Statistics': 22
}
