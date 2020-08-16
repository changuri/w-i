<template >
    <div class="modal-bg" >
        <div class="">
            <header></header>
            <!-- <button>close</button> -->
        </div>
        <form class="comments-area" ref="form">
            <input type="text" placeholder="이름" v-model="name">
            <textarea v-model="msg"  cols="30" rows="5" placeholder="축하메세지를 남겨주세요."></textarea>
            <button type="submit" @click="submit">축하메세지 남기기</button>
        </form>
    </div>

</template>

<script>
import db from '@/fb'

export default {
    data(){
        return{
            name:'',
            msg:'',
         

            // comments:[]
        }
    },
    methods:{
         submit(){
            
                
            const comment = {
                name: this.name,
                msg: this.msg,
            }
            console.log('name', this.name);
            console.log('msg', this.msg);

            db.collection('comments').add(comment).then(() => {
                console.log('added to db');
                // this.reset();
            })
            // .catch((error)=>{
            //     console.error('error', error)
            // })
        }
    }
}
</script>

<style scoped lang="scss">
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
</style>