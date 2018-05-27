<template>

    <div class="content-modal">

      <div class="content">

        <y-header title="我的课程" :isshow="true" seticon="&#xe671;" @goback="goback()"></y-header>

        <div class="scroll-content" style="margin-top: 0.45rem; background: #fff;">

          <!--<button class="button yellow">
            <div class="title">少儿发育,每周三-五</div>
            <div class="price">直播</div>
          </button>

          <button class="button green">
            <div class="title">老外教书共30节</div>
            <div class="price">课程</div>
          </button>-->

          <div class="mine" @click="goPage(c.id)" v-for="c in courseLists">

            <div class="mine_list">{{c.firstName}}</div>
            <div class="mine_menu">
              <p>{{c.secondName}}</p>
            </div>

          </div>

        </div>

      </div>

      <transition name="custom-classes-transition" enter-active-class="animated nav-open" leave-active-class="animated nav-close">
        <router-view></router-view>
      </transition>

    </div>
</template>

<script>
  import {mapActions} from "vuex"
    export default {
      name: '',
        data () {
            return {
                courseLists:[]
            }
        },
        computed: {},
        mounted(){
          this.getCourse();
        },
        methods: {
          ...mapActions([
            'getmycourse_'
          ]),
          //获取课程列表
          getCourse(){
              this.getmycourse_().then((res)=>{
                  if(res.result == 200){
                    this.courseLists = res.data;
                  }
              })
          },
          goback(){
              this.$router.push({name:'user'})
          },
          goPage(id){
            this.$router.push({name:'videolist',query:{id:id}})
          }
        }
    }
</script>
<style>
  @import "../assets/css/mine.css";

</style>
