import { MenuItem } from '../types/menu'
// import { UserInfo } from '../types/users'

interface UserState {
  allAuth: Array<string> | [],
  allMenu: Array<MenuItem>,
  tabList: Array<string> | [],
}

const state: UserState = {
  allAuth: [], //权限
  allMenu: [], //菜单
  tabList: [], //tab
}

export default {
  namespace: 'global',

  state,

  subscriptions: {

  },

  effects: {

  },

  reduces: {

  },
}
