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

          <div style="position: relative; width: 2.0rem; height: 0.6rem; border-radius: 0.6rem; margin: 0 auto;  margin-top: 0.5rem; border: 1px solid #e5e5e5;">

            <div style="width: 1.0rem; text-align: center; line-height: 0.6rem; font-size: 0.18rem; color: #333; border-radius: 0.6rem; height: 100%; border-right: 1px solid #e5e5e5;">直播</div>
            <div style="position: absolute; height: 100%; width: 1.0rem; left: 1.0rem; top: 0; font-size: 0.14rem; display: flex; justify-content: center; flex-direction: column;">
              <p>少儿发育</p>
              <p>每周一到五</p>
            </div>

          </div>

          <div style="position: relative; width: 2.0rem; height: 0.6rem; border-radius: 0.6rem; margin: 0 auto;  margin-top: 0.5rem; border: 1px solid #e5e5e5;">
            <div style="width: 1.0rem; text-align: center; line-height: 0.6rem; font-size: 0.18rem; color: #333; border-radius: 0.6rem; height: 100%; border-right: 1px solid #e5e5e5;">课程</div>
            <div style="position: absolute; height: 100%; width: 1.0rem; left: 1.0rem; top: 0; font-size: 0.14rem; display: flex; justify-content: center; flex-direction: column;">
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
          }
        }
    }
</script>
<style>
  @import "../assets/css/mine.css";

</style>
