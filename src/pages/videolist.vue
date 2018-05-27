<template>

    <div class="content-modal">

      <y-header title="视频列表" router="-1"></y-header>

      <div class="content">

        <div class="scroll-content scroll_div" style="padding-top: 0.45rem; background: #fff;">

          <van-pull-refresh v-model="isLoading" @refresh="getList">

            <div class="list_type check_div" style=" height: 0.4rem; line-height: 0.4rem; display: flex; text-align: left; font-size: 0.14rem; border-bottom: 1px solid #e5e5e5; text-indent: 12px;" v-for="p in projectLists">

              <div style="flex: 3;">{{p.name}}</div>
              <a style=" display: inline-block; flex: 1;" :href="p.url" v-if="p.url">
                <i class="icon" style="font-size: 0.2rem;">&#xe61d;</i>
              </a>
              <router-link style=" display: inline-block; flex: 1;" :to="{ path: 'videolist/video',query:{url:p.video_url,content:p.content}}" v-if="p.video_url">
                <i class="icon" style="font-size: 0.2rem;">&#xe61d;</i>
              </router-link>
            </div>

          </van-pull-refresh>

        </div>

        <transition name="custom-classes-transition" enter-active-class="animated nav-open" leave-active-class="animated nav-close">
          <router-view></router-view>
        </transition>

      </div>

    </div>

</template>

<script>

  import wxApi from '../wxapi'

  import {mapActions} from "vuex"

    export default {
        name: "videolist",
        data() {
            return {
              id:this.$route.query.id,
              projectLists:[],
              total:0,
              isLoading:false,
            }
        },
        computed: {},
        methods: {
          ...mapActions([
            'listInfo_'
          ]),
          getList(){
            this.listInfo_({id:this.id}).then((res)=>{
              if(res.result==200){
                this.projectLists = res.data;
                this.isLoading=false;
              }
            })
          },
        },
        mounted() {
          this.getList();
        }

    }

</script>

<style scoped>


</style>
