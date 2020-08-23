<template>
  <div id="app">
    <router-view/>

    <!-- <div class="toolbar">
      <ul class="flex-sb">
        <li v-for="(item, i) in menu" :key="item.id"
          :class="{selected: i == activeItem}"  @click="selectItem(i)">
          <button @click="goToRoute(item.name)"
           :class="{selected: i == activeItem}">
            <img :src="require(`@/assets/icon/${$route.name == item.name ? item.imgA : item.img}.png`)" alt="item.alt" class="icon-24">
          </button>
        </li>
      </ul>
     
    </div> -->
    <div class="footer">
      Copyright @CHAE HYEON. All Rights Reserved
    </div>
  </div>
</template>

<script>


export default {
  
  components: {
   
  },
  data(){
    return{
      activeItem: 0,
      menu:[
        { name:'홈', route:'/', img:'home', imgA: 'home-w', alt: 'home' },
        { name:'초대장', route:'/invitation', img:'invitation-02', imgA: 'invitation-w', alt: 'invitation' },
        { name:'전화', route:'/call', img:'call', imgA: 'call-w', alt: 'call' },
        { name:'갤러리', route:'/gallery', img:'gallery-01', imgA: 'gallery-w', alt: 'gallery' },
        { name:'위치', route:'/location', img:'location', imgA: 'location-w', alt: 'location' },
        { name:'메세지', route:'/comments', img:'comment', imgA: 'comment-w', alt: 'comment' },
      ]
    }
  },
  methods: {
    selectItem(i) {
        this.activeItem = i;
    },
    goToRoute(name) {
          if(name != this.$route.name){
              this.$router.push({name}).catch(()=>{});
          }
      },
  },


}
</script>


<style lang="scss">

@import './scss/style.scss';

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  color: #222;
  position: relative;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.toolbar{
  z-index: 1000;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  // background:#ebb8be;
  border-radius: 16px 16px 0 0;
  box-shadow: 2px 4px 17px 2px rgba(0,0,0, .2);
  ul{
    padding: 7px 20px;
    // padding: 5px 20px;
    button{
      // padding: 10px;
      padding: 9px 9px 6px;
      // padding: 10px 10px 7px;
      // background: #ebb8bf;
      background: #fff;
      border-radius: 22px;
    &.selected{
        background: #fff;
        background: #ebb8bf;
        border-radius: 22px;
        transition: .4s;
      }
    }
  }
}
.footer{
  font-size: 11px;
  width: 100%;
  padding: 12px 0;
  text-align: center;
  background: #f5f5f5;
  color: #999;
}
</style>