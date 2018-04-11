<template>
    <div class="word">

      <div class="word_number">
          <p>单选题</p>
          <span>{{number}}/{{length}}</span>
      </div>

      <div v-for="(l,index) in lists" v-if="number==(index+1)">
        <div class="word_text">
          <span>{{number}}.{{l.word}}</span>
        </div>

        <div class="word_answer">
          <div class="word_answer_item" v-for="(s,indexes) in l.select" @click="getAnswer(index,s,l.select)">
            <em>{{indexes==0? 'A': indexes==1? "B" : indexes==2? "C" : "D"}}</em>
            <span>{{s.mean}}</span>
            <i v-if="s.checked"></i>
          </div>
        </div>
      </div>

      <div class="word_next" v-if="number != length">
        <div class="word_next_btn" @click="nextItem()"></div>
      </div>

      <div class="word_next" v-if="number == length">
        <div class="word_commit_btn" @click="commitData()"></div>
      </div>

    </div>
</template>

<script>



/*const data = [
  {
    id:1,
    select:[
        {id: 1, mean: "沿着", true: false,checked:false},
        {id: 2, mean: "在…之间", true: false,checked:false},
        {id: 3, mean: "在…之间", true: false,checked:false},
        {id: 4, mean: "在…之间", true: false,checked:false}
      ],
    word:"alone1"
  },
  {
    id:1,
    select:[
      {id: 5, mean: "沿着", true: false,checked:false},
      {id: 6, mean: "在…之间", true: false,checked:false},
      {id: 7, mean: "在…之间", true: false,checked:false},
      {id: 8, mean: "在…之间", true: false,checked:false}
    ],
    word:"alone2"
  },
  {
    id:1,
    select:[
      {id: 9, mean: "沿着", true: false,checked:false},
      {id: 10, mean: "在…之间", true: false,checked:false},
      {id: 11, mean: "在…之间", true: false,checked:false},
      {id: 12, mean: "在…之间", true: false,checked:false}
    ],
    word:"alone3"
  },
  {
    id:1,
    select:[
      {id: 13, mean: "沿着", true: false,checked:false},
      {id: 14, mean: "在…之间", true: false,checked:false},
      {id: 15, mean: "在…之间", true: false,checked:false},
      {id: 16, mean: "在…之间", true: false,checked:false}
    ],
    word:"alone4"
  },
  {
    id:1,
    select:[
      {id: 17, mean: "沿着", true: false,checked:false},
      {id: 18, mean: "在…之间", true: false,checked:false},
      {id: 19, mean: "在…之间", true: false,checked:false},
      {id: 20, mean: "在…之间", true: false,checked:false}
    ],
    word:"alone5"
  }
]*/


  import {mapActions} from "vuex"
  import {Toast,MessageBox} from "mint-ui"
    export default {
        name: '',
        data () {
            return {
                lists:[],
                number:1,
                length:0,
                answer:[],
                level:this.$route.query.level
            }
        },
        computed: {},
        methods: {
          ...mapActions([
              "getWordsTest_",
              "commitData_"
          ]),
          getLists(){
            this.getWordsTest_({level:this.level}).then((res)=>{
                if(res.result==200){
                  res.data.forEach((item)=>{
                    item.select.forEach((itemes)=>{
                      itemes.checked=false;
                    })
                  })
                  this.lists = res.data;
                  this.length = res.data.length;
                }
            })
          },
          //点击答案
          getAnswer(index,item,parentItem){
            this.answer[index] = item.id;
            parentItem.forEach((itemed)=>{
              itemed.checked=false;
            })
            item.checked=true;
          },
          //下一题
          nextItem(){
              if(this.number != this.answer.length){
                Toast("请选择答案")
                return
              }
              this.number++
          },
          //提交答案
          commitData(){
              if(this.number != this.answer.length){
                Toast("请选择答案")
                return
              }
              let body={
                  level:this.level,
                  data:this.answer
              }
              this.commitData_({json:JSON.stringify(body)}).then((res)=>{
                  if(res.result == 200){
                    MessageBox.alert(`你的得分是${res.data.words},建议您学习课程${res.data.course}`).then((res)=>{
                      //跳到课程页面
                      console.info(1111)
                    })
                  }
              })
          }
        },
        props: [],
        mounted(){
          this.getLists();
        }
    }
</script>
<style>
  .word{ background: url("../assets/img/word_bg.png") 100% 100% no-repeat; background-size: cover; width: 100%; height: 100%; padding-top: 0.4rem;}
  .word_number{ width: 0.9rem; height: 0.9rem; border-radius: 50%; border: 2px solid #501318; background: #fff; position: absolute; margin: 0 auto; top: -0.45rem; left: 50%; margin-left: -0.45rem; color: #4f1416; padding-top: 0.45rem;}
  .word_number span{  font-size: 0.12rem;}
  .word_text{ background: url("../assets/img/text_bg.png") 100% 100% no-repeat; background-size: cover; width: 90%; margin: 0 auto; height: 2.0rem; position: relative;}
  .word_text span{ position: absolute;top: 1.15rem; left: 0.35rem; font-size: 0.14rem; max-width: 70%; text-align: left;}
  .word_answer{ margin-top: 0.1rem;}
  .word_answer_item{ background: url("../assets/img/answer_bg.png") no-repeat center; background-size: contain; width: 90%; height: 0.5rem; margin: 0.2rem auto; position: relative;}
  .word_answer_item em{ position: absolute; line-height: 0.45rem; color: #fff; font-size: 0.16rem;left: 0.18rem;  width:0.4rem;
    text-align: center;}
  .word_answer_item span{ position: absolute; line-height: 0.45rem; color: #000; font-size: 0.16rem; left: 0.71rem;}
  .word_answer_item i{ position: absolute; line-height: 0.45rem; color: #000; font-size: 0.16rem; right: 0.41rem; top: 0.05rem; background: url("../assets/img/right.png") no-repeat; background-size: contain; width: 0.4rem; height: 0.4rem;}
  .word_next{ text-align: center; margin-top: 0.2rem;}
  .word_next .word_next_btn{ background: url("../assets/img/btn.png") no-repeat; width: 1.5rem; height: 0.6rem; background-size: contain; margin: 0 auto;}
  .word_commit_btn{ background: url("../assets/img/commit.png") no-repeat; width: 1.5rem; height: 0.6rem; background-size: contain; margin: 0 auto;}

</style>
