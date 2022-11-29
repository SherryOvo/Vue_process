<template>
	<!-- 总容器 -->
	<div class="wrapper">
		<!-- header部分 -->
		<header>
			<p>钱包明细</p>
		</header>
		<ul class="detail">
			<li v-for="item in transactionArr">
				<div class="detail-left">
					<p>订单号： {{item.transactionId}}</p>
					<p>{{item.createTime}}</p>
				</div>
				<div class="detail-right">
					<p>{{item.status}} {{item.amount}}元</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'WalletDetail',
		data() {
			return {
				walletId: 10010,
				user: {},
				transactionArr: []
			}
		},
		created() {
			this.user = this.$getSessionStorage('user');
			// 根据walletId查流水
			this.$axios.get('VirtualWalletTransaction/WalletId', {
				params: {
					walletId: this.walletId
				}
			}).then(response => {
				this.transactionArr = response.data;
			}).catch(error => {
				console.error(error);
			});
		},
		methods: {
			listTransaction() {

				this.$axios.get('VirtualWallet/WalletId', {
					params: {
						walletId: this.walletId
					}
				}).then(response => {
					this.transactionArr = response.data;
				}).catch(error => {
					console.error(error);
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

	/* 头 */
	.wrapper header {
		width: 100%;
		height: 12vw;
		background-color: #00abf5;
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

	/* 明细列表 */
	.wrapper .detail {
		width: 100%;
		margin-top: 12vw;
	}

	.wrapper .detail li {
		width: 100%;
		box-sizing: border-box;
		padding: 3vw;
		user-select: none;
		background-color: #f5f5f5;
		margin-bottom: 0.3vw;
		font-size: 3.2vw;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
