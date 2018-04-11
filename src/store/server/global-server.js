/**
 * Created by admin on 2018/3/28.
 */

import http from "../http"
import {toBodyString} from "../../utils"

export const getWordsTest = (body = {}) => {
  let query = toBodyString(body);
  return http.get(`Test/getWordsTest?${query}`)
};

export const commitData=(body={})=>{
  let query = toBodyString(body);
  return http.post(`/Test/getWordsTestResult`, query, {headers: {"Content-Type": "application/x-www-form-urlencoded;charset=utf-8"}});
}



