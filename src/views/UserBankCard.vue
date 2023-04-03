<template>
	<div class="wrapper">
		<!-- header部分 -->
		<header>
			<p>银行卡管理</p>
		</header>
		<!-- 银行卡列表 -->
		<ul class="bankCardList">
			<li v-for="item in bankCardArr">
				<div class="bankCardList-left" @click="setBankCard(item)">
					<p>{{item.bankName}}</p>
					<p>{{item.cardId}}</p>
				</div>
				<div class="bankCardList-right">
					<i class="fa fa-remove"></i>
				</div>
			</li>
		</ul>
		<!-- 新增银行卡部分 -->
		<div class="addnew" @click="toAddBankCard">
			<i class="fa fa-plus-circle"></i>
			<p>添加银行卡</p>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'UserBankCard',
		data(){
			return{
				walletId: this.$route.query.walletId,
				bankCardArr: []
			}
		},
		created() {
			this.user = this.$getSessionStorage('user');
			this.listUserBankCard();
		},
		methods:{
			listUserBankCard(){
				// 根据walletId查银行卡
				this.$axios.get('BankCard/WalletId', {
					params: {
						walletId: 10010
					}
				}).then(response => {
					this.bankCardArr = response.data.result;
				}).catch(error => {
					console.error(error);
				});
			},
			setBankCard(bankCard){
				this.$setLocalStorage(this.walletId, bankCard);
				// this.$router.push({
				// 	path: '/withdraw',
				// 	query: {
				// 		walletId: this.walletId
				// 	}
				// });
				// ！！！！！！！！！！！！！这里实际需要整个返回上一页
				this.$router.go(-1);
				// alert('已选择');
			},
			// removeBankCard(cardId){
			// 	if (!confirm('确认要删除此银行卡吗？')) {
			// 		return;
			// 	}
			// },
			toAddBankCard(){
				this.$router.push({
					path: '/addBankCard',
					query: {
						walletId: this.walletId
					}
				});
			}
		}
	}
</script>

<style scoped>
	/*************** 总容器 ***************/
	.wrapper {
		width: 100%;
		height: 100%;
		background-color: #F5F5F5;
	}
	
	/*************** header ***************/
	.wrapper header {
		width: 100%;
		height: 12vw;
		background-color: #00abf5;
		display: flex;
		justify-content: space-around;
		align-items: center;
		color: #fff;
		font-size: 4.8vw;
		position: fixed;
		left: 0;
		top: 0;
		/*保证在最上层*/
		z-index: 1000;
	}
	
	.wrapper .bankCardList {
		width: 100%;
		margin-top: 12vw;
		background-color: #fff;
	}
	
	.wrapper .bankCardList li {
		width: 100%;
		box-sizing: border-box;
		border-bottom: solid 1px #DDD;
		padding: 3vw;
	
		display: flex;
	}
	
	.wrapper .bankCardList li .bankCardList-left {
		flex: 5;
		/*左边这块区域是可以点击的*/
		user-select: none;
		cursor: pointer;
	}
	
	.wrapper .bankCardList li .bankCardList-left p {
		font-size: 4vw;
		color: #666;
	}
	
	.wrapper .bankCardList li .bankCardList-right {
		flex: 1;
		font-size: 5.6vw;
		color: #999;
		cursor: pointer;
	
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	
	.wrapper .addnew {
		width: 100%;
		height: 14vw;
		border-top: solid 1px #DDD;
		border-bottom: solid 1px #DDD;
		background-color: #fff;
		margin-top: 4vw;
	
		display: flex;
		justify-content: center;
		align-items: center;
	
		font-size: 4.5vw;
		color: #00abf5;
		user-select: none;
		cursor: pointer;
	}
	
	.wrapper .addnew p {
		margin-left: 2vw;
	}
	
</style>