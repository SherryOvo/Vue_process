<template>
	<div class="wrapper">
		<!-- header部分 -->
		<header>
		  <p>我的积分</p>
		</header>
		
		<!-- 表单部分 -->
		        <ul class="form-box">
		           
		        </ul>
		        
		        <div class="button-points">
		            <button>我的积分：
					{{this.pointsnum}}
					</button>
					
		        </div>
		        <div class="button-select">
		            <button @click="toPoints">查询积分流水</button>
		        </div>
				<div class="button-shop">
				    <button>积分商城</button>
				</div>
				
		        <!-- 底部菜单部分 -->
		     <Footer></Footer>
		    </div>  
</template>

<script>
import Footer from '../components/Footer.vue';

export default {
  name: 'MyPoints',
  data() {
    return {
	  pointsnum:0
    }
  },

    created(){
      this.user = this.$getSessionStorage('user');
      this.$axios.get('Credit/totalNum', {
      params: {
        userId: this.user.userId
      }
    }).then(response => {
        this.pointsnum = response.data;
      }).catch(error => {
        console.error(error);
      });
    },
   methods:{
	   toPoints(){
	   	this.$router.push({
	   		path: '/points'
	   	});
	   }
   },
  components: {
    Footer
  }
}
</script>

<style scoped>
/****************** 总容器 ******************/
.wrapper{
    width: 100%;
    height: 100%;
}
 
/****************** header部分 ******************/
.wrapper header{
    width: 100%;
    height: 12vw;
    background-color: #0097FF;
    color: #fff;
    font-size: 4.8vw;
    
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    
    display: flex;
    justify-content: center;
    align-items: center;
}
 
/****************** 表单部分 ******************/
.wrapper .form-box{
    width: 100%;
    margin-top: 12vw;
}
.wrapper .form-box li{
    box-sizing: border-box;
    padding: 4vw 3vw 0 3vw;
    display: flex;
    align-items: center;
}
.wrapper .form-box li .title{
    flex: 0 0 18vw;
    font-size: 3vw;
    font-weight: 700;
    color: #666;
}
.wrapper .form-box li .content{
    flex: 1;
}
.wrapper .form-box li .content input{
    border: none;
    outline: none;
    width: 100%;
    height: 4vw;
    font-size: 3vw;
}
.wrapper .button-points{
    width: 100%;
    box-sizing: border-box;
    padding: 4vw 3vw 0 3vw;
}
.wrapper .button-points button{
    width: 100%;
    height: 10vw;
    font-size: 3.8vw;
    font-weight: 700;
    color: #fff;
    background-color: #38CA73;
    border-radius: 4px;
    
    border: none;
    outline: none;
}
.wrapper .button-select{
    width: 100%;
    box-sizing: border-box;
    padding: 4vw 3vw 0 3vw;
}
.wrapper .button-select button{
    width: 100%;
    height: 10vw;
    font-size: 3.8vw;
    font-weight: 700;
    /*与上面登陆按钮不同的只有颜色、背景色、边框不同*/
    color: #666;
    background-color: #EEE;
    border: solid 1px #DDD;
    border-radius: 4px;
    
    border: none;
    outline: none;
}

.wrapper .button-shop{
    width: 100%;
    box-sizing: border-box;
    padding: 4vw 3vw 0 3vw;
}
.wrapper .button-shop button{
    width: 100%;
    height: 10vw;
    font-size: 3.8vw;
    font-weight: 700;
    /*与上面登陆按钮不同的只有颜色、背景色、边框不同*/
    color: #FFFFFF;
    background-color: #777799;
    border: solid 1px #AAA;
    border-radius: 4px;
    
    border: none;
    outline: none;
}
/****************** 底部菜单部分 ******************/
.wrapper .footer{
    width: 100%;
    height: 14vw;
    border-top: solid 1px #DDD;
    background-color: #fff;
    
    position: fixed;
    left: 0;
    bottom: 0;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.wrapper .footer li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    color: #999;
    user-select: none;
    cursor: pointer;
}
.wrapper .footer li p{
    font-size: 2.8vw;
}
.wrapper .footer li i{
    font-size: 5vw;
}	
	
	
	
	
	
</style>