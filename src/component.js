/**
 * Created by admin on 2018/5/8.
 */
import header from './components/header.vue';

import {Loadmore} from 'mint-ui';

export default function (Vue) {
  Vue.component(header.name, header);
  Vue.component(Loadmore.name, Loadmore);
}




