<template>

    <div class="content-modal">

      <y-header title="视频列表" router="-1"></y-header>

      <div class="content">

        <div class="scroll-content scroll_div" style="padding-top: 0.45rem; background: #fff;">

          <van-pull-refresh v-model="isLoading" @refresh="getList">

            <div class="list_type check_div" style=" height: 0.4rem; line-height: 0.4rem; display: flex; text-align: left; font-size: 0.14rem; border-bottom: 1px solid #e5e5e5; text-indent: 12px;" v-for="p in projectLists">

              <div style="flex: 3;">{{p.name}}</div>
              <a style=" display: inline-block; flex: 1;" :href="p.video_url">
                <i class="icon" style="font-size: 0.2rem;">&#xe61d;</i>
              </a>
            </div>

          </van-pull-refresh>

        </div>

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
              projectLists:[
                {
                  name:'课程1',
                  video_url:'http://pc.v.k.360kan.com/vod-xinxiliu-tv-q4-bj/124170505_1-1526295068-e960cd29-d1d1-319e.mp4?time=1526364216&sign=c1c2fca59c375d289ec7e3d76cb88e2e&from=haoindex_from_2176288707'
                },
                {
                  name:'课程2',
                  video_url:'http://pc.v.k.360kan.com/vod-xinxiliu-tv-q3-bj/119635841_0-1525299439-0667975c-c391-6d69.mp4?time=1526364268&sign=afc2cf192e066180b0d1ce1c43570a93&from=haoindex_from_3920984358'
                }
              ],
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
              }
            })
          },
        },
        mounted() {
          console.info(wxApi.isWeixin())
          console.info(wxApi.maxArr([1,2,3,4,4,52321,12]))
          wxApi.wxRegister(()=>{
            console.info(1)
          })
          this.getList();
        }

    }

</script>

<style scoped>


</style>
