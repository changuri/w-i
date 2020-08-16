<template>
    <div class="comments">
        <span class="title">축하 메세지 남기기</span>
        <form class="comments-area" ref="form">
            <input type="text" placeholder="이름" v-model="name">
            <textarea v-model="msg"  cols="30" rows="5" placeholder="축하메세지를 남겨주세요."></textarea>
            <button type="submit" @click="submit">축하메세지 남기기</button>
        </form>

        <span class="title">축하 메세지</span>
        <ul class="msg-area flex-col-reverse">
            <li v-for="comment in comments" :key="comment.name">
                <div class="flex-sb name-area">
                    <h4>{{comment.name}}</h4>
                    <span class="font-14-g text-right">{{comment.create_date}}</span>
                </div>
                <div class="msg">
                    {{comment.msg}}
                </div>
            </li>
        </ul>
        

    </div>
</template>

<script>
import db from '@/fb'


export default {

    data(){
        return{
            name:'',
            msg:'',
            create_date:'',

            comments:[]
        }
    },
    methods:{
        submit(){
                const today = new Date();
                const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                const dateTime = date +' '+ time;
                this.create_date = dateTime;

                const comment = {
                    name: this.name,
                    msg: this.msg,
                    create_date: this.create_date
                }

                db.collection('comments').add(comment).then(() => {
                    console.log('added to db');
                    this.reset();
                })
                // this.$router.go($router.currentRoute);
                this.$router.replace('/comments').catch(()=>{});
            
        },
    },
    created(){
        db.collection('comments').onSnapshot( res => {
            const changes = res.docChanges()

            changes.forEach(change => {
                if(change.type === 'added'){
                    this.comments.push({
                        ...change.doc.data(),
                        id: change.doc.id
                    })
                }
            })
        })
        this.$router.replace('/comments').catch(()=>{});
    }
 
}
</script>

<style scoped lang="scss">
.comments{
    padding: 55px 20px 75px;
    input{
        width: 100%;
        margin: 20px 0 10px;
        padding: 10px 12px;
        box-sizing: border-box;
        font-size: 16px;
        background: #fafafa;
        border: none;
        font-size: 14px;
        &::placeholder{
            color: #999;

        }
    }
    textarea{
        width: 100%;
        padding: 10px 12px;
        box-sizing: border-box;
        font-size: 16px;
        background: #fafafa;
        border: none;
        font-size: 14px;
         &::placeholder{
            color: #999;
            
        }
    }
    button{
        width: 100%;
        padding: 12px 12px;
        box-sizing: border-box;
        font-size: 14px;
        background: #ebb8be;
        color: #fff;
        margin: 10px 0 30px;
    }
    .msg-area{
        // margin: 10px;
        color: #999;
        font-size: 14px;
        li{
            margin: 10px 0;
            padding: 15px 10px;
            // box-shadow: 0px 2px 15px 1px rgba(0, 0, 0, 0.08);
            border-bottom: 1px solid #f2f2f2;
            .name-area{
                margin-bottom: 6px;
                h4{
                    color: #555;
                }
            }
        }
    }
}
</style>