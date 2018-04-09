/**
 * Created by admin on 2018/4/8.
 */
import {getUserInfo} from "../server/global-server";

const state={
  name:'mcj'
}

const getters = {

}

const actions = {
  async getUserInfo_({commit,state},body){
    return await getUserInfo(body)
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
