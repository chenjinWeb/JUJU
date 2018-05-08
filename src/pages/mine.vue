<template>
    <div class="">

      <y-header title="我的课程" :isshow="true" seticon="&#xe671;" @goback="goback()"></y-header>

      <div class="mine_btn">

        <router-link to="/mine/list">aaa</router-link>


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
          }
        },
        props: []
    }
</script>
<style>
  @import "../assets/css/mine.css";

</style>
