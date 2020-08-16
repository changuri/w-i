<template>
    <div class="gallery">
       <span class="title">웨딩 사진</span>
       <div class="photo-area flex-sb-st" @click="showImgModal = true">
           <div class="item">
                <div class=""
                    v-for="item in photo1" :key="item"> 
                    <img :src="require(`@/assets/img/img_${item}.jpg`)" alt="img">
                </div>
           </div>
           <div class="item">
                <div class=""
                    v-for="item in photo2" :key="item"> 
                    <img :src="require(`@/assets/img/img_${item}.jpg`)" alt="img">
                </div>
           </div>
       </div>
       <img-modal
            v-show="showImgModal"
            @close="close"
       ></img-modal>
    </div>

</template>

<script>
import ImgModal from '@/components/ImgModal' 

export default {
    components:{
        ImgModal,
    },
    data(){
        return{
            showImgModal: false,
            photo1: [
                '01','03','05','07','09',
                '11','13','15','17','19',
                '21','23','25','27','29',
                '31','33','34'
            ],
            photo2: [
                '02','04','06','08','10',
                '12','14','16','18','20',
                '22','24','26','28','30',
                '32',
            ],
            
        }
    },
    methods:{
        close(){
            this.showImgModal = false;
            console.log('close', close);
        }
    }   
}
</script>

<style scoped lang="scss">
    .gallery{
        padding: 55px 15px 75px;
        position: relative;
        .photo-area{
            padding: 20px 0;
            width: 100%;   
            .item{
                width: 50%;
                display: flex;
                flex-direction: column;
                div{
                    padding: 4px;
                    box-sizing: border-box;
                    width: 100%;
                    img{
                        width: 100%;
                        display: block;
                        border-radius: 8px;
                    }
                }
            }
        }
    }
</style>