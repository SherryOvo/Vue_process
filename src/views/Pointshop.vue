<template>
	<div class="wrapper">
		<!-- header部分 -->
		<header>
		  <p>积分商城</p>
		</header>
		<div class="photo">
			<img src="../assets/ji.png">
			<div>只因未来公仔 &nbsp 10积分</div>
			<button @click="getGoods">点击兑换</button>
			
		</div>
		
		<div class="photo">
			<img src="../assets/fifa.png">
			<div>世界杯比赛用球 &nbsp 1000积分</div>
			<button>点击兑换</button>
		</div>
			
		<div class="photolast">
			<img src="../assets/eggs.png">
			<div>一筐鸡蛋 &nbsp 100积分</div>
			<button>点击兑换</button>
		</div>
		<!-- 底部菜单部分 -->
		<Footer></Footer>
	</div>
</template>

<script>
import Footer from '../components/Footer.vue';	

export default{
	name:'Points',
	data(){
		return{
			Arrcredit:[]
		}
	},
	
	created(){
		this.user = this.$getSessionStorage('user');
		this.$axios.get('Credit/userId', {
		  params: {
		    userId: this.user.userId
		  }
		}).then(response => {
		  this.Arrcredit = response.data;
		}).catch(error => {
		  console.error(error);
		});
	},
	methods:{
		getGoods(){
			var test = 0;
			this.user = this.$getSessionStorage('user');
			this.$axios.get('Credit/userId', {
			  params: {
			    userId: this.user.userId,
				channelType:1,
				num: -10
			  }
			}).then(response => {
			   this.test = response.data;
			   if(test == 1){
				   alert('兑换成功');
			   }else{
				   alert('兑换失败');
			   }
			}).catch(error => {
			  console.error(error);
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
	
.wrapper .photo{
	height: auto; 
	width: auto\9; 
	width:100%;
	margin-top: 12vw;
	border-radius: 2.5vw;
	font-size: 5.5vw;
	justify-content: center;
	display:inline-block;
	Text-align: center;

}	

.wrapper .photolast{
	height: auto; 
	width: auto\9; 
	width:100%;
	margin-top: 12vw;
	border-radius: 2.5vw;
	font-size: 5.5vw;
	justify-content: center;
	display:inline-block;
	Text-align: center;
	margin-bottom: 15vw
}		
	
	
	
	
	
/****************** 底部菜单部分 ******************/
.wrapper .footer {
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

.wrapper .footer li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #999;
  user-select: none;
  cursor: pointer;
}

.wrapper .footer li p {
  font-size: 2.8vw;
}

.wrapper .footer li i {
  font-size: 5vw;
}	
</style>