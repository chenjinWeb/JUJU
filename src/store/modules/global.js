/**
 * Created by admin on 2018/3/28.
 */

import {
  bycourse,
  commitData, courselist, getmycourse, getorders, getshareinfo,
  getWordsTest, listInfo, projectlist, userinfo
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

  async getorders_({commit,state},body){
    return await getorders(body)
  },

  async courselist_({commit,state},body){
    return await courselist(body)
  },

  async listInfo_({commit,state},body){
    return await listInfo(body)
  },

  async bycourse_({commit,state},body){
    return await bycourse(body)
  },

  async userinfo_({commit,state},body){
    return await userinfo(body)
  },

  async getmycourse_({commit,state},body){
    return await getmycourse(body)
  },

  async getshareinfo_({commit,state},body){
    return await getshareinfo(body)
  },



}


const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}









