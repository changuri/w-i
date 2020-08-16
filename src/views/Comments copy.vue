<template>
    <div class="comments">
        <span class="title">축하 메세지 남기기</span>
        <!-- <form class="comments-area" ref="form">
            <input type="text" placeholder="이름" v-model="name">
            <textarea v-model="msg"  cols="30" rows="5" placeholder="축하메세지를 남겨주세요."></textarea>
            <button type="submit" @click="submit">축하메세지 남기기</button>
        </form> -->
        <msg-modal
            v-if="showMsgModal"
            @close="showMsgModal = false"
        ></msg-modal>
        
        <button type="submit" @click="showMsgModal = true ">축하메세지 남기기</button>

        <span class="title">축하 메세지</span>
        <ul class="msg-area">
            <li v-for="comment in comments" :key="comment.name">
                <h5>{{comment.name}}</h5>
                <div class="msg">
                    {{comment.msg}}
                </div>
            </li>
        </ul>
        

    </div>
</template>

<script>
import MsgModal from '@/components/MsgModal'
import db from '@/fb'

export default {
    components:{
        MsgModal
    },
    data(){
        return{
            // name:'',
            // msg:'',
            showMsgModal: false,

            comments:[]
        }
    },
    methods:{
        // submit(){
            
                
        //     const comment = {
        //         name: this.name,
        //         msg: this.msg,
        //     }
        //     // console.log('name', this.name);
        //     // console.log('msg', this.msg);

        //     db.collection('comments').add(comment).then(() => {
        //         console.log('added to db');
        //         // this.reset();
        //     })
        //     // .catch((error)=>{
        //     //     console.error('error', error)
        //     // })
        // }
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
        resize: none;
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
        margin: 10px;
        color: #999;
        font-size: 14px;
        li{
            margin: 20px 0;
            h5{
                color: #555;
            }
        }
    }
}
</style>