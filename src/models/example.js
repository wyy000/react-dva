import {query} from "../services/example"

export default {

  namespace: 'example',

  state: {
    stream: null,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const res = yield call(query)
      yield put({ type: 'save', payload: { stream: res } });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    },
  },

};
