<template>
	<div class="wrapper">
		<!-- header部分 -->
		<header>
			<p>确认订单</p>
		</header>

		<!-- 订单信息部分 -->
		<div class="order-info">
			<h5>订单配送至：</h5>
			<div class="order-info-adress" @click="toUserAddress">
				<!-- 送货地址储存在前端的永久存储localstorage中 -->
				<p>{{deliveryaddress!=null?deliveryaddress.address:'请选择送货地址'}}</p>
				<i class="fa fa-angle-right"></i>
			</div>
			<p>{{user.userName}}{{user.userSex | sexFilter}} {{user.uerId}}</p>
		</div>

		<h3>{{business.businessName}}</h3>

		<!-- 订单明细部分 -->
		<ul class="order-detail">
			<li v-for="item in cartArr">
				<div class="order-detail-left">
					<img :src="item.food.foodImg" />
					<p>{{item.food.foodName}}） × {{item.quantity}}</p>
				</div>
				<p>&#165;{{item.food.foodPrice*item.quantity}}</p>
			</li>

		</ul>
		<div class="order-deliveryfee">
			<p>配送费</p>
			<p>&#165;{{business.deliveryPrice}}</p>
		</div>

		<!-- 底部合计部分 -->
		<div class="total">
			<div class="total-left">
				&#165;{{totalPrice}}
			</div>
			<div class="total-right" onclick="location.href='payment.html'">
				去支付
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Orders',
		data() {
			return {
				businessId: this.$route.query.businessId,
				business: {},
				user: {},
				cartArr: [],
				diliveryaddress: {}
			}
		},
		created() {
			this.user = this.$getSessionStorage('user');
			this.deliveryaddress = this.$getLocalStorage('this.user.userId');

			// 查询当前商家
			this.$axios.post('BusinessController/getBusinessById', this.$qs.stringify({
				businessId: this.businessId
			})).then(responsee => {
				this.business = response.data;
			}).catch(error => {
				console.error(error);
			});
			// 查询当前用户在购物车中的当前商家食品列表
			// this.$axios.post('CartController/listCart', this.$qs.stringify({
			// 	userId: this.user.userId,
			// 	businessId: this.businessId
			// })).then(responsee => {
			this.$axios.get('Cart/CartList', {
				params: {
					userId: this.user.userId,
					businessId: this.businessId
				}
			}).then(response => {
				this.cartArr = response.data;
			}).catch(error => {
				console.error(error);
			});
		},
		computed: {
			totalPrice() {
				let totalPrice = 0;
				for (let cartItem of this.cartArr) {
					totalPrice += cartItem.food.foodPrice * cartItem.quantity;
				}
				totalPrice += this.business.deliveryPrice;
				return totalPrice;
			}
		},
		filters: {
			sexFilter(value) {
				return value == 1 ? '先生' : '女士';
			}
		},
		methods: {
			toUserAddress() {
				this.$router.push({
					path: '/userAddress'
				});
			}
		}
	}
</script>

<style scoped>
	/* 总容器 */
	.wrapper {
		width: 100%;
		height: 100%;
	}

	/* header部分 */
	.wrapper header {
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

	/* 订单信息部分 */
	.wrapper .order-info {
		width: 100%;
		margin-top: 12vw;
		background-color: #0097ff;
		box-sizing: border-box;
		padding: 2vw;
		color: #fff;
	}

	.wrapper .order-info h5 {
		font-size: 3vw;
		font-weight: 300;
	}

	.wrapper .order-info .order-info-adress {
		width: 100%;

		display: flex;
		justify-content: space-between;
		align-items: center;

		font-weight: 700;
		user-select: none;
		cursor: pointer;
		margin: 1vw 0;
	}

	.wrapper .order-info .order-info-adress p {
		width: 90%;
		font-size: 5vw;
	}

	.wrapper .order-info .order-info-adress i {
		font-size: 6vw;
	}

	.wrapper .order-info p {
		font-size: 3vw;
	}

	.wrapper h3 {
		box-sizing: border-box;
		padding: 3vw;
		font-size: 4vw;
		color: #666;
		border-bottom: solid 1px #ddd;
	}

	/* 订单明细部分 */
	.wrapper .order-detail {
		width: 100%;
	}

	.wrapper .order-detail li {
		width: 100%;
		height: 16vw;
		box-sizing: border-box;
		padding: 3vw;
		color: #666;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.wrapper .order-detail li .order-detail-left {
		display: flex;
		align-items: center;
	}

	.wrapper .order-detail li .order-detail-left img {
		width: 10vw;
		height: 10vw;
	}

	.wrapper .order-detail li .order-detail-left p {
		font-size: 3.5vw;
		margin-left: 3vw;
	}

	.wrapper .order-detail li p {
		font-size: 3.5vw;
	}

	.wrapper .order-deliveryfee {
		width: 100%;
		height: 16vw;
		box-sizing: border-box;
		padding: 3vw;
		color: #666;
		font-size: 3.5vw;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	/* 订单合计部分 */
	.wrapper .total {
		width: 100%;
		height: 14vw;

		position: fixed;
		left: 0;
		bottom: 0;

		display: flex;
	}

	.wrapper .total .total-left {
		flex: 2;
		background-color: #505051;
		color: #fff;
		font-size: 4.5vw;
		font-weight: 700;
		user-select: none;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.wrapper .total .total-right {
		flex: 1;
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
</style>
