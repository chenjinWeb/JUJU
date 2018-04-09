<template>
    <div class="index_bg">
      <div class="index_img">
        <img src="../assets/img/logo.png" width="220"/>
      </div>
      <div class="index_btn" @click="goPage()">
        <img src="../assets/img/word.png" width="200"/>
      </div>
      <div class="index_btn">
        <img src="../assets/img/listen.png" width="200"/>
      </div>
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
          goPage(){
              this.$router.push({name:"word"})
          }
        },
        props: []
    }
</script>
<style scoped>

  .index_bg{  background: url("../assets/img/index_bg.png") 100%; background-size: cover; width: 100%; height: 100%; padding-top: 1.0rem;}
  .index_btn{ margin-top: 0.8rem;}

</style>
