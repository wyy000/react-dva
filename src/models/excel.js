export default {

  namespace: 'excel',

  state: {
    streamCache: {},
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line

    },
    *fetchExcel({ payload }, { call, put }) {

    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    },
    saveStream(state, action) {
      const streamCache = state.streamCache
      Object.entries(action.payload).forEach(it => streamCache[it[0]] = it[1])
      return { ...state, streamCache }
    },
  },
}
