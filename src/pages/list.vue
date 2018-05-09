<template>

    <div class="content-modal">

      <y-header title="课程列表" router="-1"></y-header>

      <div class="content">

        <div class="scroll-content scroll_div">

          <van-pull-refresh v-model="isLoading" @refresh="getList">

            <div class="list_type check_div" style="" v-for="p in projectLists">

              <el-checkbox style="line-height: 0.5rem; margin-right: 0.1rem;" v-model="p.checked" @change="checkMoney()"></el-checkbox>

              <div style="flex: 1;">
                <img :src="p.picture_url" width="100%" height="100%"/>
              </div>

              <div style="flex: 3; text-align: left; margin-left: 0.1rem; position: relative;">
                <div style=" font-size: 0.14rem;">{{p.name}}</div>
                <div style=" position: absolute; bottom: 0; font-size: 0.14rem; color: red;">￥{{p.price}}</div>
              </div>

            </div>

          </van-pull-refresh>

        </div>

        <div class="paymoney">
          <div style="flex: 2;">共计{{total}}元</div>
          <div style="flex: 1; background: red; color: #fff;">付款</div>
        </div>

      </div>

    </div>

</template>

<script>

  import Vue from "vue"

  import { PullRefresh } from 'vant';

  Vue.use(PullRefresh);

  import {mapActions} from "vuex"

  import {Toast} from "mint-ui"

    export default {
      name: 'list',
        data () {
            return {
              id:this.$route.query.id,
              projectLists:[],
              total:0,
              isLoading:false,

            }
        },
        computed: {},
        mounted(){
          this.getList();
        },
        methods: {
          ...mapActions([
              'projectlist_'
          ]),
          //点击是否选中
          checkMoney(){
            this.total=0;
            this.projectLists.forEach(item =>{
                if(item.checked){
                    this.total+=item.price;
                }
            })
          },
          getList(){
            this.projectlist_({id:this.id}).then((res)=>{
              if(res.result==200){
                res.data.forEach(item=>{
                    item.checked=false;
                })
                this.isLoading = false;
                this.projectLists = res.data;
              }
            })
          },
        }
    }
</script>
<style>
  @import "../assets/css/list.css";
</style>
