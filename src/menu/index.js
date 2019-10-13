import {
  faUsers,
  faTags,
  faFileAlt,
  faHome,
} from '@fortawesome/free-solid-svg-icons'

const MENU_ITEM_TEAMS = 'teams'
const MENU_ITEM_CATEGORIES = 'categories'
const MENU_ITEM_ENTRIES = 'entries'
const MENU_ITEM_HOME = 'home'

const menuItems = [
  {
    id: MENU_ITEM_HOME,
    label: 'Home',
    path: '',
    icon: faHome,
  },
  {
    id: MENU_ITEM_TEAMS,
    label: 'Teams',
    path: 'teams',
    icon: faUsers,
  },
  {
    id: MENU_ITEM_CATEGORIES,
    label: 'Categories',
    path: 'categories',
    icon: faTags,
  },
  {
    id: MENU_ITEM_ENTRIES,
    label: 'Entries',
    path: 'entries',
    icon: faFileAlt,
  },
]

export const getMenuItems = () => {
  return menuItems.slice(0)
}
