/**
 * Created by admin on 2018/3/28.
 */

import http from "../http"
import {toBodyString} from "../../utils"

export const userlogin = (body = {}) => {

};

export const getUserInfo = (body={})=>{
  let query = toBodyString(body);
  return http.get(`/user/info?${query}`)
}



