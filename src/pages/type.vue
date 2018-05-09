<template>

  <div class="content-modal">

    <div class="content">

      <div class="scroll-content">

        <div class="index_bg">

          <div v-for="c in courseLists" @click="checkDetail(c.id)">
            <div class="type_btn">{{c.name}}</div>
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

  import {mapActions}  from "vuex"

    export default {
        name: "type",
        data() {
            return {
              courseLists:[]
            }
        },
        computed: {},
        methods: {
          ...mapActions([
            'courselist_'
          ]),
          getCourse(){
            this.courselist_().then((res)=>{
              if(res.result == 200){
                this.courseLists = res.data;
              }
            })
          },
          checkDetail(id){
            this.$router.push({name:'list',query:{id:id}})
          }
        },
        mounted() {
          this.getCourse();
        }

    }

</script>

<style>

  .index_bg{  background: url("../assets/img/index_bg.png") 100% 100% no-repeat; background-size: cover; width: 100%; height: 100%; padding-top: 1.0rem;}
  .type_btn{width: 30%; margin: 0 auto; border-top: 2px solid #000; border-bottom: 2px solid #000; height: 0.4rem; line-height: 0.4rem; font-size: 0.16rem; margin-bottom: 0.6rem;}
</style>
