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

          <div class="mine" @click="goPage(1)">

            <div class="mine_list">直播</div>
            <div class="mine_menu">
              <p>少儿发育</p>
              <p>每周一到五</p>
            </div>

          </div>

          <div class="mine" @click="goPage(2)">
            <div class="mine_list">课程</div>
            <div class="mine_menu">
              <p>老外教书</p>
              <p>共30节</p>
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
    export default {
      name: '',
        data () {
            return {
                msg: ''
            }
        },
        computed: {},
        methods: {
          goback(){
              this.$router.push({name:'mine'})
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
