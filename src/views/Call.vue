<template>
    <div class="call">
       <div class="we-area">
            <span class="title">축하 연락</span>
            <div class="wrap flex-sb">
               <div class="flex-start">
                    <span class="info">신랑</span>
                    <h3>김건수</h3>
               </div>
               <div class="icon-area flex-sb">
                   <a href="tel:010-5097-3434">
                        <img src="@/assets/icon/call-round.png" target="_blank" alt="전화걸기" class="icon-32">
                   </a>
                   <a href="sms:010-5097-3434">
                        <img src="@/assets/icon/msg-round.png" target="_blank" alt="메세지 보내기" class="icon-32">
                   </a>
               </div>
           </div>
           <div class="wrap flex-sb">
               <div class="flex-start">
                    <span class="info">신부</span>
                    <h3>채현</h3>
               </div>
               <div class="icon-area flex-sb">
                   <a href="tel:010-3181-7072">
                        <img src="@/assets/icon/call-round.png" target="_blank" alt="전화걸기" class="icon-32">
                   </a>
                   <a href="sms:010-3181-7072">
                        <img src="@/assets/icon/msg-round.png" target="_blank" alt="메세지 보내기" class="icon-32">
                   </a>
               </div>
           </div>
       </div>
       <div class="parants-area">
            <span class="title">혼주에게 연락하기</span>
            <div class="parants">
                <div class="flex-sb">
                    <h4>신부측</h4>
                    <!-- <button class="plus" @click="plusAccount1 = !plusAccount1">마음 전하실 곳</button> -->
                </div>
                <!-- <transition name="fade">
                    <div v-show="plusAccount1" class="flex-col-center plus-area">
                        <span>우리은행. 1002-529-645527</span>
                        <span>계좌주. 배병숙</span>
                    </div>
                </transition> -->
                <div class="">
                    <div class="wrap flex-sb">
                        <div class="flex-sb">
                            <span class="info">아버지</span>
                            <h3>채수길</h3>
                        </div>
                        <div class=" icon-area flex-sb">
                           <a href="tel:010-7307-7072">
                                <img src="@/assets/icon/call-round-g.png" target="_blank" alt="전화걸기" class="icon-32">
                            </a>
                            <a href="sms:010-7307-7072">
                                <img src="@/assets/icon/msg-round-g.png" target="_blank" alt="메세지 보내기" class="icon-32">
                            </a>
                        </div>
                    </div>
                    <div class="wrap flex-sb">
                        <div class="flex-sb">
                            <span class="info">어머니</span>
                            <h3>배병숙</h3>
                        </div>
                        <div class="icon-area flex-sb">
                            <a href="tel:010-2422-7072">
                                <img src="@/assets/icon/call-round-g.png" target="_blank" alt="전화걸기" class="icon-32">
                            </a>
                            <a href="sms:010-2422-7072">
                                <img src="@/assets/icon/msg-round-g.png" target="_blank" alt="메세지 보내기" class="icon-32">
                            </a>
                        </div>
                   </div>
                </div>
           </div>
           <div class="parants">
                <div class="flex-sb">
                    <h4>신랑측</h4>
                    <!-- <span class="plus" @click="plusAccount2 = !plusAccount2">마음 전하실 곳</span> -->
                </div>
                <!-- <transition name="fade">
                    <div v-show="plusAccount2" class="flex-col-center plus-area">
                        <span>국민은행. 689501-01-352960</span>
                        <span>계좌주. 김영모</span>
                    </div>
                </transition> -->
                <div class="">
                    <div class="wrap flex-sb">
                        <div class="flex-sb">
                            <span class="info">아버지</span>
                            <h3>김영모</h3>
                        </div>
                        <div class="icon-area flex-sb">
                           <a href="tel:010-5417-3400">
                                <img src="@/assets/icon/call-round-g.png" target="_blank" alt="전화걸기" class="icon-32">
                            </a>
                            <a href="sms:010-5417-3400">
                                <img src="@/assets/icon/msg-round-g.png" target="_blank" alt="메세지 보내기" class="icon-32">
                            </a>
                        </div>
                    </div>
                   <div class="wrap flex-sb">
                        <div class="flex-sb">
                            <span class="info">어머니</span>
                            <h3>문순자</h3>
                        </div>
                        <div class="icon-area flex-sb">
                            <a href="tel:010-2304-5505">
                                <img src="@/assets/icon/call-round-g.png" target="_blank" alt="전화걸기" class="icon-32">
                            </a>
                            <a href="sms:010-2304-5505">
                                <img src="@/assets/icon/msg-round-g.png" target="_blank" alt="메세지 보내기" class="icon-32">
                            </a>
                        </div>
                   </div>
                </div>
           </div>
           
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            plusAccount1: false,
            plusAccount2: false
        }
    }, methods:{
        // plusAccount1(){
        //     this.plus1 = !this.plus1;

        // }
    }
}
</script>

<style scoped lang="scss">
.call{
    padding: 30px 0px;
    .info{
        font-size: 14px;
        font-weight: 300;
        margin-right: 16px;
    }
    .plus{
        font-size: 13px;
        // color: #097fff;
        color: #7abaff;
    }
    .wrap {
        padding: 20px 0px 5px 15px;
    }

    .icon-area{
        a{
            display: block;
            &:last-child{
                margin-left: 20px;
            }
        }
    }
    .we-area{
        padding: 24px 30px 24px;
    }
    .plus-area{
        font-size: 14px;
        color: #999;
        padding: 5px 0;
        background: #fafafa;
        margin: 15px 0 0;
        span{
            margin: 3px 0;
        }
    }
    .parants-area{
        padding: 32px 30px 80px;
        background: #f5f5f5;
        .parants{
            padding: 25px 0 5px;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: .4s;
        opacity: 1;
        height: 56px;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        height: 0;
    }
}
</style>