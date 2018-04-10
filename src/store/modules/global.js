/**
 * Created by admin on 2018/3/28.
 */

import {
  commitData,
  getWordsTest
} from "../server/global-server"

const state={

}

const getters={

}

const actions = {
  async getWordsTest_({commit,state},body={}){
    return await getWordsTest(body)
  },

  async commitData_({commit,state},body){
    return await commitData(body)
  }
}


const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}









