<template>
    <div class="word">

      <div class="word_number">
          <p>单选题</p>
        <span>{{number}}/{{length}}</span>
      </div>

      <div v-for="(l,index) in lists" v-if="number==(index+1)">
        <div class="word_text">
          <span>{{number}}.{{l.word}}？</span>
        </div>

        <div class="word_answer">
          <div class="word_answer_item" v-for="(s,indexes) in l.select" @click="getAnswer(index,s.id)">
            <em>{{indexes==0? 'A': indexes==1? "B" : indexes==2? "C" : "D"}}</em>
            <span>{{s.mean}}</span>
            <i></i>
          </div>
        </div>
      </div>

      <div class="word_next">
        <div class="word_next_btn" @click="nextItem()"></div>
      </div>

    </div>
</template>

<script>
  import {mapActions} from "vuex"
  import {Toast} from "mint-ui"
    export default {
        name: '',
        data () {
            return {
                lists:[],
                number:1,
                length:0,
                answer:[]
            }
        },
        computed: {},
        methods: {
          ...mapActions([
              "getWordsTest_"
          ]),
          getLists(){
            this.getWordsTest_({level:1}).then((res)=>{
                if(res.result==200){
                  this.lists = res.data;
                  this.length = res.data.length;
                }
            })
          },
          //点击答案
          getAnswer(index,id){
              this.answer[index] = id;
              console.info(this.answer)
          },
          //下一题
          nextItem(){
              if(this.number != this.answer.length){
                  Toast("请选择答案")
                  return
              }
              this.number++
          }
        },
        props: [],
        mounted(){
          this.getLists();
        }
    }
</script>
<style>
  .word{ background: url("../assets/img/word_bg.png") 100%; background-size: cover; width: 100%; height: 100%; padding-top: 0.4rem;}
  .word_number{ width: 0.8rem; height: 0.8rem; border-radius: 50%; border: 2px solid #501318; background: #fff; position: absolute; margin: 0 auto; top: -0.4rem; left: 50%; margin-left: -0.4rem; color: #4f1416; padding-top: 0.4rem;}
  .word_text{ background: url("../assets/img/text_bg.png") no-repeat center; background-size: contain; width: 100%; height: 2.2rem; position: relative;}
  .word_text span{ position: absolute;top: 1.35rem; left: 0.45rem; font-size: 0.14rem; max-width: 70%; text-align: left;}
  .word_answer{ margin-top: 0.2rem;}
  .word_answer_item{ background: url("../assets/img/answer_bg.png") no-repeat center; background-size: contain; width: 90%; height: 0.5rem; margin: 0.2rem auto; position: relative;}
  .word_answer_item em{ position: absolute; line-height: 0.45rem; color: #fff; font-size: 0.16rem;left: 0.18rem;  width:0.4rem;
    text-align: center;}
  .word_answer_item span{ position: absolute; line-height: 0.45rem; color: #000; font-size: 0.16rem; left: 0.71rem;}
  .word_answer_item i{ position: absolute; line-height: 0.45rem; color: #000; font-size: 0.16rem; right: 0.41rem; top: 0.05rem; background: url("../assets/img/right.png") no-repeat; background-size: contain; width: 0.4rem; height: 0.4rem;}
  .word_next{ text-align: center; margin-top: 0.4rem;}
  .word_next .word_next_btn{ background: url("../assets/img/btn.png") no-repeat; width: 1.5rem; height: 0.6rem; background-size: contain; margin: 0 auto;}

</style>
