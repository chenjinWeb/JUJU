/**
 * Created by admin on 2018/3/28.
 */

import {
  getWordsTest
} from "../server/global-server"

const state={

}

const getters={

}

const actions = {
  async getWordsTest_({commit,state},body={}){
    return await getWordsTest(body)
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









