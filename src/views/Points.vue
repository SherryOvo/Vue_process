<template>
	<div class="wrapper">
		<!-- header部分 -->
		<header>
		  <p>积分明细</p>
		</header>
		
			<ul class = "list">
				<li v-for="(item,index) in Arrcredit">
					<div  class = "first">
					<div>{{isType(item.channelType)}}积分 &nbsp</div>
					<div>积分变化：{{item.num}} &nbsp</div>
					<!-- <hr /> -->
					<div> 开始时间：{{item.createTime}} &nbsp &nbsp
					  到期时间：{{item.expiredTime == null ? '无' : item.expiredTime}} </div>
					</div>
				</li>
			</ul>
		
		
	</div>
</template>

<script>


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
		isType(type){
			if(type == 0)
			return '增加';
			else if(type == 1)
			return '减少';
			else
			return;
		}
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
	margin-top: 12vw;
	color: blue;
	font-size: 4.8vw;
	
}
.wrapper .list li .first{
	margin-top: 2vw;
	height:20vw;
	background-color: navajowhite;
	color: green;
	font-size: 3.6vw;
	border-radius: 2.5vw;
	justify-content: center;
	display:inline-block ,flex;
	
}


	
</style>