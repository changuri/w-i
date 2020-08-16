<template>
    <div class="location">
        <span class="title">오시는 길</span>
        <div class="weddingsqure-area">
            <h3>웨딩스퀘어_강변점 아모르홀</h3>
            <div class="addr-area flex-sb-st">
                <div class="addr-copy flex-sb">
                    <textarea type="text" id="addrVal" value="서울특별시 광진구 광나루로56길 85 강변테크노마트 3, 4층" readonly >서울특별시 광진구 광나루로56길 85 강변테크노마트 3, 4층
                    </textarea>
                    <button @click="textCopy">주소복사</button>
                </div>
            </div>
            <div class="flex-sb">
                <span class="tel">02-3424-7000</span>
                <a href="tel:02-3424-7000">전화걸기</a>
            </div>
        </div>

        <!-- map area -->
        <div class="map-wapper">
            <div id="map"> </div>
            <a href="https://map.daum.net/link/to/강변 테크노마트,37.535207,127.095788" target="_blank">카카오맵으로 보기</a>
        </div>

        <div class="coming-way">
            <h4>지하철 이용시</h4>
            <span class="">2호선 강변역 하차 <br>(테크노마트 판매동 지하 1층과 직접 연결)</span>
            <h4>버스 이용시</h4>
            <div class="flex-start-st">
                <div class="width-25">
                    서울버스
                </div>
                <div class="width-75">
                    지선버스 : 2224, 3212, 3214 <br>
                    마을버스 : 강동01, 광진01, 광진03, 광진04
                </div>
            </div>
            <div class="flex-start-st">
                <div class="width-25">
                    경기버스
                </div>
                <div class="width-75">
                    일반버스 : 1, 1-1, 1-2, 9, 9-1, 13, 13-2, 15, 91, 92, 93, 95, 96, 97, 112, 112-1, 2000-1, 2000-3, 2000-4 <br>
                    직행버스 : 11, 1112, 1113, 1113-1, 1113-2, 1117, 1650, 1660, 5600, 5700 <br>
                    공항버스 : 6705
                </div>
            </div>
            <h4>주차안내</h4>
            <span class="">강변 테크노마트 지하주차장 이용</span>
            <h4>테크노마트 내 이동시</h4>
            <span class="">엘리베이터가 혼잡하므로, 에스컬레이터를 이용하시면 더욱 편리합니다.</span>

        </div>

    </div>

</template>

<script>
export default {
    data(){
        return{
        }
    },
    mounted() {
         window.kakao && window.kakao.maps ? this.initMap() : this.addScript(); 
    }, 
    methods : { 
        textCopy(){
            var textToCopy = document.getElementById('addrVal');
            textToCopy.select();
            textToCopy.setSelectionRange(0, 9999); 
            document.execCommand("copy");
        },
        initMap() { 
            var container = document.getElementById('map'); 
            var options = { center: new kakao.maps.LatLng(37.535344, 127.095805), level: 4 }; 
            var map = new kakao.maps.Map(container, options); 
            //마커추가하려면 객체를 아래와 같이 하나 만든다. 
            var marker = new kakao.maps.Marker({ 
                position: map.getCenter() 
            }); 
            marker.setMap(map); 

            var zoomControl = new kakao.maps.ZoomControl();
            map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
        }, 
        addScript() { 
            const script = document.createElement('script');
            /* global kakao */ 
            script.onload = () => kakao.maps.load(this.initMap); 
            script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=39276f27d4001ea3e8b989ea0b22b8c5'; 
            document.head.appendChild(script); } 
        },

}
</script>

<style scoped lang="scss">
    .location{
        padding: 55px 20px 80px;
        .weddingsqure-area{
            padding: 15px 0px 15px 10px;
            .addr-area{
                padding: 6px 0;
                .addr-copy{
                    width: 100%;
                    textarea{
                        font-size: 14px;
                        margin: 3px 0;
                        width: 80%;
                    }
                    button{
                        color: #7abaff;
                        font-size: 13px;
                    }
                }
            }
            .tel{
                font-size: 14px;
                color: #999;
            }
            a{
                color: #7abaff;
                font-size: 13px;
                margin-left: 10px;
            }
        }
        .map-wapper{
            position: relative;
            #map{
                width: 100%;
                height: 300px;
            }
            a{
                display: block;
                position: absolute;
                bottom: 0;
                width: 100%;
                background: rgba(0, 0, 0, .5);
                // background: #fed041;
                z-index: 100;
                color: #fff;
                text-align: center;
                padding: 10px;
                font-size: 13px;
                box-sizing: border-box;
            }
        }
        .coming-way{
            padding: 10px 0px 10px 10px;
            font-size: 14px;
            color: #999;
            h4{
                margin: 10px 0 5px;
                color: #292929;
            }
        }   
    }
</style>