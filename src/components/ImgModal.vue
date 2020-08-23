<template>
    <div class="img-modal-area">
        <div class="bg"></div>
        <div class="photo-area">
            <div class="item"
                v-for="item in photo" :key="item"> 
                <img :src="require(`@/assets/img/img_${item}.jpg`)" alt="img">
            </div>
        </div>
        <button @click="$emit('close')" class="close">
            닫기
            <!-- <img src="@/assets/icon/close-w.svg" alt="닫기" class="icon-24"> -->
        </button>
     
  </div>
</template>

<script>
export default {
    props:{
        //  show: Boolean,
    },
    data(){
        return{
         
            photo: [
                 '21','22','23','24','25','26','27','28','29','30',
                '31','32','33','34','14','15','16','17','18','19','20',
                '02','03','04','05','06','07','08','09','10',
                '11','12','13','01','42','43','41','40',
            ]
       
        }
    },
    computed: {
  
    },
    mounted(){
        
    },
}
</script>

<style scoped lang="scss">
.img-modal-area{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 100vh;
    .bg{
        position: fixed;
        left: 0;
        top: 0;
        background: rgba(0,0,0, .7);
        width: 100%;
        height: 100vh;
    }
    .photo-area{
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX( -50%);
            overflow-x: scroll;
            padding: 65px 0;  
            height: 100%;
            overflow-y: scroll;
            margin: auto;
            box-sizing: border-box;
            width: calc(100% - 40px);
            .item{
                padding: 6px 0;
                // width: calc(100% - 10px);
                margin: auto;
                img{
                    width: 100%;
                    display: block;
                    border-radius: 8px;
                }
            }
            
        }
    .close{
        position: fixed;
        top: 15px;
        right: 10px;
        background: #ebb8beab;
        width: 40px;
        height: 40px;
        color: #fff;
        border-radius: 20px;
    }
}
</style>