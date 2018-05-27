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
                <div style=" font-size: 0.14rem;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;">{{p.name}}</div>
                <div style=" position: absolute; bottom: 0; font-size: 0.14rem; color: red;">￥{{p.price}}</div>
              </div>

            </div>

          </van-pull-refresh>

        </div>

        <div class="paymoney">
          <div style="flex: 2;">共计{{total}}元</div>
          <div style="flex: 1; background: red; color: #fff;" @click="getpayorder()">付款</div>
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
              userInfo:{}
            }
        },
        computed: {},
        mounted(){
          this.getList();
        },
        methods: {
          ...mapActions([
              'projectlist_',
              'getorders_',
              'bycourse_'
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
          getpayorder(){

            if(this.total<=0){
              Toast('支付金额不能小于0元!')
                return
            }
            this.getorders_({money:this.total}).then(res=>{
              if(res.result == 200){
                this.userInfo = res.data;
                this.paymoney()
              }
            })
          },

          weixinpay(data,cb,errorCb){
            let appId = data.appId;
            let timestamp = data.timeStamp;
            let nonceStr = data.nonceStr;
            let packages = data.package;
            let paySign = data.paySign;

            wx.config({
              debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: appId, // 必填，公众号的唯一标识
              timestamp: timestamp, // 必填，生成签名的时间戳
              nonceStr: nonceStr, // 必填，生成签名的随机串
              jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            })

            wx.ready(()=>{
              wx.chooseWXPay({
                timestamp: timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                nonceStr: nonceStr, // 支付签名随机串，不长于 32 位
                package: packages, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                paySign: paySign, // 支付签名
                success: (res)=>{
                  // 支付成功后的回调函数
                  cb(res);
                },
                fail:(res)=>{
                  errorCb(res);
                }
              });
            })

            wx.error(function(res) {
              // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
              /*alert("config信息验证失败");*/
            });
          },

          paymoney(){
            this.weixinpay(this.userInfo,(success)=>{
              const result = [];
              this.projectLists.forEach(item =>{
                if(item.checked){
                  result.push(item.id)
                }
              })
              this.bycourse_(
                {
                  firstId:this.id,
                  secondIds:result.join(",")
                }
              ).then(()=>{
                this.$router.push({name:'mine'});
              })
            },(err)=>{
              //alert(err)
            })
          },

        }
    }
</script>
<style>
  @import "../assets/css/list.css";
</style>
