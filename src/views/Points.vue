<template>
	<div class="wrapper">
		<!-- header部分 -->
		<header>
		  <p>积分明细</p>
		</header>
			<ul class = "list">
				<li v-for="(item,index) in Arrcredit">
					<div  class = "first">
					<p>{{item.channelType}}</p>
					<p>{{item.num}} </p>
					<p> {{item.createTime}} 
					  {{item.expiredTime == null ? '无' : item.expiredTime}} </p>
					</div>
				</li>
			</ul>
		

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
			Arrcredit:[],
			type:''
		}
	},
	
	created(){
		this.user = this.$getSessionStorage('user');
		this.$axios.get('Credit/userId', {
		  params: {
		    userId: this.userId
		  }
		}).then(response => {
		  this.Arrcredit = response.data;
		}).catch(error => {
		  console.error(error);
		});
	},
	computed:{
		isType(num){
			if(num == 0)
			return '增加';
			else if(num == 1)
			return '减少';
			else
			return;
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


.wrapper .list{
	width: 100%;
	height: 12vw;
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
.wrapper .list li .first{
	width: 5vw;
	height: 5vw;
	background-color: red;
	color: #fff;
	font-size: 3.6vw;
	border-radius: 2.5vw;
	display: flex;
	justify-content: center;
	align-items: center;
	/*设置成绝对定位，不占文档流空间*/
	position: absolute;
	right: -1.5vw;
	top: -1.5vw;
	
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