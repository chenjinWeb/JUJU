/**
 * Created by admin on 2018/3/28.
 */

import {
  commitData, courselist,
  getWordsTest, listInfo, projectlist
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
  },

  async projectlist_({commit,state},body){
    return await projectlist(body)
  },

  async courselist_({commit,state},body){
    return await courselist(body)
  },

  async listInfo_({commit,state},body){
    return await listInfo(body)
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









