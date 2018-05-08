<template>
    <div>

      <y-header title="课程列表" router="-1"></y-header>

      <div style=" position: absolute; top: 0.45rem; left: 0; bottom: 0; right: 0; overflow: scroll;">

        <div style="height: 0.6rem; display: flex; padding: 0.05rem; border-bottom: 1px solid #e5e5e5;" v-for="p in projectLists">

          <el-checkbox style="line-height: 0.5rem; margin-right: 0.1rem;" v-model="p.checked" @change="checkMoney()"></el-checkbox>

            <div style="flex: 1;">
              <img :src="p.picture_url" width="100%" height="100%"/>
            </div>

            <div style="flex: 3; text-align: left; margin-left: 0.1rem; position: relative;">
              <div style=" font-size: 0.14rem;">{{p.name}}</div>
              <div style=" position: absolute; bottom: 0; font-size: 0.14rem; color: red;">￥{{p.price}}</div>
            </div>

        </div>

        <div style="position: fixed; bottom: 0; height: 0.4rem; background: #333; display: flex; width: 100%; line-height: 0.4rem; font-size: 0.14rem; color: #fff;">
          <div style="flex: 2;">共计{{total}}元</div>
          <div style="flex: 1; background: red; color: #fff;">付款</div>

        </div>


      </div>

    </div>
</template>

<script>

  import {mapActions} from "vuex"

    export default {
      name: 'list',
        data () {
            return {
              projectLists:[],
              total:0
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
              this.projectlist_({id:1}).then((res)=>{
                  if(res.result==200){
                    res.data.forEach(item=>{
                        item.checked=false;
                    })
                    this.projectLists = res.data;
                  }
              })
          },

        },
        props: []
    }
</script>
<style>
  .el-checkbox__inner{ width: 20px !important; height: 20px !important;}
  .el-checkbox__inner::after{ height: 10px; left: 6px; top: 2px; width: 5px;}
</style>
