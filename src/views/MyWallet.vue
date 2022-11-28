<template>
	<!-- 总容器 -->
	<div class="wrapper">
		<!-- header部分 -->
		<header>
			<p class="left">我的钱包</p>
			<div class="right" @click="toWalletDetail">
				<i class="fa fa-list-ul"></i>
				明细
			</div>
		</header>
		<div class="wallet-box">
			<!-- 钱包内容 -->
			<div class="wallet">
				<!-- ！！！！！！！！可以整个睁眼闭眼的效果 -->
				<!-- 显示余额 -->
				<div class="balance-box">
					<h3>余额(元)</h3>
					<p>{{balance}}</p>
				</div>
				<div class="rechargeAndWithdraw">
					<!-- 充值 -->
					<button class="recharge" @click="toRecharge">
						充值
					</button>
					<!-- 提现 -->
					<button class="withdraw" @click="toWithdraw">
						提现
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'MyWallet',
		data() {
			return {
				walletId: 0,
				user: {},
				balance: 0
			}
		},
		created() {
			this.user = this.$getSessionStorage('user');
			// 根据userId查询balance
			this.$axios.get('VirtualWallet/UserId', {
				params: {
					userId: this.user.userId
				}
			}).then(response => {
				//判断是否登录
				if (this.user != null) {
					this.walletId = response.data.walletId;
					this.balance = response.data.balance;
				}
			}).catch(error => {
				console.error(error);
			});
		},
		methods: {
			toWalletDetail(){
				this.$router.push({
					path: '/walletDetail'
				});
			},
			toRecharge(walletId){
				this.$router.push({
					path: '/recharge',
					query:{walletId:walletId}
				});
			},
			toWithdraw(walletId){
				this.$router.push({
					path: '/withdraw',
					query:{walletId:walletId}
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
		background-color: #f5f5f5;
	}

	/* 头部 */
	.wrapper header {
		width: 100%;
		height: 12vw;
		background-color: #00abf5;
		color: #fff;


		position: fixed;
		left: 0;
		top: 0;
		z-index: 1000;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.wrapper header .left {
		flex: 3;
		margin-left: 8vw;
		font-size: 4.8vw;
	}

	.wrapper header .right {
		margin-right: 4vw;
		font-size: 2.5vw;
	}

	.wrapper header .right .fa-list-ul {
		margin-right: 1vw;
	}

	/* 钱包内容 */
	.wrapper .wallet-box {
		width: 90%;
		height: 50vw;
		margin: 12vw 4vw 0 4vw;
		background-color: #f5f5f5;
		padding-top: 6vw;
	}

	.wrapper .wallet-box .wallet {
		width: 100%;
		height: 100%;
		background-color: #fff;
		border-radius: 15px;
		box-sizing: border-box;
		padding: 2vw 4vw;
		display: flex;
		flex-direction: column;
	}

	.wrapper .wallet-box .wallet .balance-box h3 {
		margin: 3vw 0 5vw 0;

		font-size: 4.5vw;
		font-weight: 400;
		color: #7f7f7f;
	}

	.wrapper .wallet-box .wallet .balance-box p {
		margin-bottom: 5vw;
		font-size: 8vw;
		font-weight: 600;
	}

	.wrapper .wallet-box .wallet .rechargeAndWithdraw {
		margin: 4vw 2vw;
		display: flex;
		align-content: center;
		justify-content: center;
		box-sizing: border-box;
	}

	.wrapper .wallet-box .wallet .rechargeAndWithdraw .recharge {
		width: 45%;
		height: 10vw;
		border: none;
		outline: none;
		border-radius: 6px;
		font-size: 4.5vw;
		font-weight: 500;
		background-color: #00abf5;
		color: #fff;
		margin-right: 4vw;
	}

	.wrapper .wallet-box .wallet .rechargeAndWithdraw .withdraw {
		width: 45%;
		height: 10vw;
		border: none;
		outline: none;
		border-radius: 6px;
		font-size: 4.5vw;
		font-weight: 500;
		background-color: #00abf5;
		color: #fff;
		margin-left: 4vw;
	}
</style>
