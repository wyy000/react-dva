import { fetchExcel } from '../services/excel'

export default {

  namespace: 'excel',

  state: {
    streamCache: {},
    fileCache: {},
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line

    },
    *fetchExcel({ payload }, { call, put }) {
      const res = yield call(fetchExcel)
      yield put({
        type: 'saveStream',
        payload: {
          one: res,
        },
      })
    },
  },

  reducers: {
    save (state, action) {
      return { ...state, ...action.payload }
    },
    saveStream (state, action) {
      const streamCache = state.streamCache
      Object.entries(action.payload).forEach(it => streamCache[it[0]] = it[1])
      return { ...state, streamCache }
    },
    saveFile (state, action) {
      const fileCache = state.fileCache
      Object.entries(action.payload).forEach(it => fileCache[it[0]] = it[1])
      return { ...state, fileCache }
    },
  },
}
