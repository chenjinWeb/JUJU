/**
 * Created by admin on 2018/3/28.
 */

import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

import mutations from "./mutations"
import global from "./modules/global"
import indexModule from "./modules/indexModule";

const state={

}

const getters={

}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  modules:{
    $global: global,
    $indexModule: indexModule
  }
})

export default store
