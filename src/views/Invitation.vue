<template>
    <div class="invitation">
        <span class="title">모시는 글</span>
        <div class="text-area-k text-center">
            저희 두 사람 소중한 분들 앞에서 <br>
            평생 함께할 것을 약속하고자 합니다. <br><br>

            부부의 연을 맺는 출발점에 여러분을 초대하오니 <br>
            귀한 걸음하시어 축복해주신다면 <br>
            더없는 기쁨으로 간직하겠습니다.<br><br>

            부디 오셔서 많은 축하와 격려 부탁드리겠습니다.<br>
            <div class="people-area">
                <div class="people">
                    김영모<span class="mid-dot-after"></span>문순자 <span class="info">장남</span>  건수
                </div>
                <div class="people">
                    채수길<span class="mid-dot-after"></span>배병숙 <span class="info">장녀</span>  현
                </div>
            </div>
        </div>
        <!-- <div class="text-center">
            <span class="divide"></span>
        </div> -->
        <div class="text-area-e text-center">
            <div class="inner">
                luckily, <br>
                We have found each other's soul mates <br>to be with every moment. <br><br>
                We are in love and<br>  we're going to start our adventure.<br><br>

                We would like to invite you<br> to celebarte this specail day.<br><br>
                Please watch the first step of<br> combining two people have lived different lives.<br>
                and the first day in our new life together. <br><br>

                The honor of your presence is requested<br>
                at the marriage of<br> <br> 
                <p>
                    CHAE HYEON and KIM GUN SU<br>
                </p><br> 
                <span>
                    Saturday. October. 17th. 2020 at 11am
                </span> 
            </div>

        </div>


    </div>

</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    .invitation{
        font-size: 16px ;
        color: #292929;
        padding: 55px 0px 40px;
        .title{
            margin: 0 20px;
        }
        .text-area-k{
            padding: 40px 20px 35px;
            .people-area{
                padding-top: 30px;
                width: 185px;
                margin: 0 auto;
                text-align: left;
                font-weight: bold;
                font-size: 16px;
                .people{
                    margin: 3px 0;
                    .info{
                        font-size: 14px;
                        color: #999;
                        padding: 0 8px;
                    }
                }
            }
        }
        .text-area-e{
            font-size: 14px ;
            padding: 40px 0 80px;
            color: #666;
            // background: #ffeff0;
            background: #f5f5f5;;
            .inner{
                padding: 0 20px;
            }
            p{
                font-weight: bold;
                font-size: 16px;
            }
            span{
                font-weight: bold;
            }
        }
    }
</style>