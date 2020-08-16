<template>
    <div class="gallery">
       <span class="title">웨딩 사진</span>
       <div class="photo-area" >
           <div class="item">
                <div class=""
                    v-for="item in photo" :key="item"> 
                    <img :src="require(`@/assets/img/img_${item}.jpg`)" alt="img">
                </div>
           </div>
       </div>
    </div>

</template>

<script>


export default {

    data(){
        return{
          
             photo: [
                '21','22','23','24','25','26','27','28','29','30',
                '31','32','33','34','14','15','16','17','18','19','20',
                '02','03','04','05','06','07','08','09','10',
                '11','12','13','01',
            ]
            
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
        padding: 55px 15px 80px;
        position: relative;
        .photo-area{
            padding: 20px 0;
            width: 100%;   
            .item{
                width: 100%;
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