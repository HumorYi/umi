import { getProductData } from '../services/product'

export default {
  namespace: 'more',

  state: {
    data: [],
    pageSize: 10,
    current: 1,
    total: 0,
  },

  effects: {
    *getProductData({ payload }, { call, put }) {
      const {data: {data}} = yield call(getProductData, payload)
      // yield put({ type: 'productData', payload: data })

      return {total: data.length, data}
    },
  },

  reducers: {
    productData(state, {payload: {data}}) {
      return {...state, total: data.length, data}
    },
  },
}
