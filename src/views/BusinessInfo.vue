<template>
	<div class="wrapper">
		<!-- header部分 -->
		<header>
			<p>商家信息</p>
		</header>
		
		
		<!-- 商家logo部分 -->
		<div class="business-logo">
			<!-- <img src="img/sj01.png"/> -->
			<img :src="business.businessImg">
		</div>
		
		<!-- 商家信息部分 -->
		<div class="business-info">
			<h1>{{business.businessName}}</h1>
			<p>&#165;{{business.starPrice}}起送 &#165;{{business.deliveryPrice}}配送</p>
			<p>{{business.businessExplain}}</p>
		</div>
		
		<!-- 食品列表部分 -->
		<ul class="food">
			<li v-for="(item,index) in foodArr">
				<div class="food-left">
					<img :src="item.foodImg">
					<div class="food-left-info">
						<h3>{{item.foodName}}</h3>
						<p>{{item.foodExplain}}</p>
						<p>&#165;{{item.foodPrice}}</p>
					</div>
				</div>
				<div class="food-right">
					<!-- 为了保证有3块，布局能对齐，用div装i标签 -->
					<div>
						<i class="fa fa-minus-circle" v-show="item.quantity!=0"></i>
					</div>
					<p><span v-show="item.quantity!=0">{{item.quantity}}</span></p>
					<div>
						<i class="fa fa-plus-circle" @click="add(index)"></i>
					</div>
				</div>
			</li>
			
		</ul>
		
		<!-- 购物车部分 -->
		<div class="cart">
			<div class="cart-left">
				<div class="cart-left-icon">
					<i class="fa fa-shopping-cart"></i>
					<div class="cart-left-icon-quantity">3</div>
				</div>
				<div class="cart-left-info">
					<p>&#165;12.88</p>
					<p>另需配送费3元</p>
				</div>
			</div>
			<div class="cart-right">
				<!-- 显示二选一： --><!-- 做的时候可以先注释掉一个 -->
				<!-- 不够起送费 -->
				<!-- <div class="cart-right-item">&#165;15起送</div> -->
				<!-- 达到起送费，可以跳转结账 -->
				<div class="cart-right-item" onclick="location.href='order.html'">
					去结算
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'BusinessInfo',
		data() {
			return {
				businessId: this.$route.query.businessId,
				business:{},
				foodArr:[],
				user:{}
			}
		},
		created() {
			this.user = this.$getSessionStorage('user');
			
			// 根据businessId查询商家信息
			this.$axios.post('BusinessController/getBusinessById', this.$qs.stringify({
				businessId: this.businessId
			})).then(responsee => {
				this.business = response.data;
			}).catch(error => {
				console.error(error);
			});
			
			// 根据businessId查询所属食品信息
			this.$axios.post('FoodController/listFoodByBusinessId', this.$qs.stringify({
				businessId: this.businessId
			})).then(responsee => {
				this.foodArr = response.data;
				for(let i=0;i<this.foodArr.length;i++){
					this.foodArr[i].quantity=0;
				}
			}).catch(error => {
				console.error(error);
			});
		},
		methods:{
			add(index){
				// 首先登录验证
				if(this.user==null){
					this.$router.push({path:'/login'});
					return;
				}
				
				console.log('向购物车表中添加一条记录');
			}
		}
	}
</script>

<style scoped>
	/* 总容器 */
	.wrapper{
		width: 100%;
		height: 100%;
	}
	
	/* header部分 */
	.wrapper header{
		width: 100%;
		height: 12vw;
		background-color: #0097ff;
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
	
	/* 商家logo部分 */
	.wrapper .business-logo{
		width: 100%;
		height: 35vw;
		margin-top: 12vw;
		
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.wrapper .business-logo img{
		width: 40vw;
		height: 30vw;
		border-radius: 5px;
	}
	
	/* 商家信息 */
	.wrapper .business-info{
		width: 100%;
		height: 20vw;
		
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.wrapper .business-info h1{
		font-size: 5vw;
	}
	.wrapper .business-info p{
		font-size: 3vw;
		color: #666;
		margin-top: 1vw;
	}
	
	/* 食品列表部分 */
	.wrapper .food{
		width: 100%;
		/* margin-bottom: 14vw; */
		padding-bottom: 14vw;
	}
	.wrapper .food li{
		width: 100%;
		box-sizing: border-box;
		padding: 2.5vw;
		user-select: none;
		
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.wrapper .food li .food-left{
		display: flex;
		align-items: center;
	}
	.wrapper .food li .food-left img{
		width: 20vw;
		height: 20vw;
	}
	.wrapper .food li .food-left .food-left-info{
		margin-left: 3vw;
	}
	.wrapper .food li .food-left .food-left-info h3{
		font-size: 3.8vw;
		color: #555;
	}
	.wrapper .food li .food-left .food-left-info p{
		font-size: 3vw;
		color: #888;
		margin-top: 2vw;
	}
	.wrapper .food li .food-right{
		width: 16vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.wrapper .food li .food-right .fa-minus-circle{
		font-size: 5.5vw;
		color: #999;
		cursor: pointer;
	}
	.wrapper .food li .food-right p{
		font-size: 3.6vw;
		color: #333;
	}
	.wrapper .food li .food-right .fa-plus-circle{
		font-size: 5.5vw;
		color: #0097ef;
		cursor: pointer;
	}
	
	/* 购物车部分 */
	.wrapper .cart{
		width: 100%;
		height: 14vw;
		
		position: fixed;
		left: 0;
		bottom: 0;
		
		display: flex;
	}
	.wrapper .cart .cart-left{
		flex: 2;
		background-color: #505051;
		
		display: flex;
	}
	.wrapper .cart .cart-left .cart-left-icon{
		width: 16vw;
		height: 16vw;
		box-sizing: border-box;
		border: solid 1.6vw #444;
		border-radius: 8vw;
		background-color: #3190e8;
		font-size: 7vw;
		color: #fff;
		
		display: flex;
		justify-content: center;
		align-items: center;
		
		margin-top: -4vw;
		margin-left: 3vw;
		
		/* 相对定位,小红点的父容器 */
		position: relative;
	}
	.wrapper .cart .cart-left .cart-left-icon-quantity{
		width: 5vw;
		height: 5vw;
		border-radius: 2.5vw;
		background-color: red;
		color: #fff;
		font-size: 3.6vw;
		
		display: flex;
		justify-content: center;
		align-items: center;
		
		position: absolute;
		right: -1.5vw;
		top: -1.5vw;
	}
	/* 伪类选择器,可以选择一组相同元素的第一个或最后一个元素 */
	.wrapper .cart .cart-left .cart-left-info p:first-child{
		font-size: 4.5vw;
		color: #fff;
		margin-top: 1vw;
	}
	.wrapper .cart .cart-left .cart-left-info p:last-child{
		font-size: 2.8vw;
		color: #aaa;
	}
	.wrapper .cart .cart-right{
		flex: 1;
		/* 达到，去结算 */
		/* background-color: #38ca73; */
	}
	/* 达到起送费时的样式 */
	.wrapper .cart .cart-right .cart-right-item{
		width: 100%;
		height: 100%;
		background-color: #38ca73;
		color: #fff;
		font-size: 4.5vw;
		font-weight: 700;
		user-select: none;
		cursor: pointer;
		
		display: flex;
		justify-content: center;
		align-items: center;
	}
	/* 未到起送费 */
	/* .wrapper .cart .cart-right .cart-right-item{
		width: 100%;
		height: 100%;
		background-color: #535356;
		color: #fff;
		font-size: 4.5vw;
		font-weight: 700;
		user-select: none;
		
		display: flex;
		justify-content: center;
		align-items: center;
	} */
	
</style>