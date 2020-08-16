<template>
    <div class="img-modal-area">
        <div class="bg"></div>
        <div class="comtents">
            <div class="header-area">
                <button @click="$emit('close')">
                    닫기
                    <!-- <img src="@/assets/icon/close-w.svg" alt="닫기" class="icon-24"> -->
                </button>
            </div>
            <!-- <div class="swiper-container" ref="mySwiper"
                v-swiper:mySwiper="swiperOptions">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"
                        v-for="item in photo" :key="item">
                        <img :src="require(`@/assets/img/img_${item}.jpg`)" alt="img">
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div> -->
        </div>
     
  </div>
</template>

<script>
export default {
    props:{
        //  show: Boolean,
    },
    data(){
        return{
            // swiperOptions:{
            //     slidesPerView: '1',
            //     centeredSlides: true,
            //     centeredSlidesBounds: true,
            //     // loop: true,
            //     // pagination: {
            //     //     el: '.swiper-pagination',
            //     //     type: 'fraction',
            //     // },
            //     // navigation: {
            //     //     nextEl: '.swiper-button-next',
            //     //     prevEl: '.swiper-button-prev',
            //     // },
            // },
            photo: [
                '01','02','03','04','05','06','07','08','09','10',
                '11','12','13','14','15','16','17','18','19','20',
                '21','22','23','24','25','26','27','28','29','30',
                '31','32','33','34'
            ]
       
        }
    },
    computed: {
        // swiper() {
        //     return this.$refs.mySwiper.$swiper
        // }
    },
    mounted(){
        // this.swiper.slideTo(3, 1000, false)
    },
}
</script>

<style scoped lang="scss">
.img-modal-area{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    .bg{
        position: fixed;
        left: 0;
        top: 0;
        background: rgba(0,0,0, .7);
        width: 100%;
        height: 100%;
    }
    .comtents{
        // background: #fff;
        position: absolute;
      
        .header-area{
            padding: 12px 20px;
            button{
                color: #fff;
            }
        }
        .swiper-container{
            // min-height: 300px;
            //  position: absolute;
            //  left: 50%;
            //  right: 50%;
            //  transform: translate(-50%, -50%);
            .swiper-wrapper{
                width: 100%;
                 overflow: hidden;
                .swiper-slide{
                    width: 100%;
                   
                    img{
                        width: 100%;
                        display: block;
                        
                    }
                }
            }
        }
    }
}
</style>