<template>
	<div class="wrapper">
		<!-- header部分 -->
		<header>
			<p>充值</p>
		</header>
		<!-- 充值方式 -->
		<div class="recharge-method">
			<div class="title">充值方式</div>
			<div class="bank-card" @click="toUserBankCard">
				<p>{{bankCardArr!=null?bankCardArr.bankName:'请选择银行卡'}}</p>
				<i class="fa fa-angle-right"></i>
			</div>
		</div>
		<!-- 充值金额 -->
		<div class="recharge-amount">
			<div class="title">充值金额</div>
			<div class="amount">
				<p>&#165;</p>
				<input type="amount" v-model="amount" placeholder="请输入金额">
				<button @click="recharge">确认</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Recharge',
		data(){
			return{
				amount: '',
				walletId: this.$route.query.walletId,
				bankCardArr: []
			}
		},
		created(){
			this.user = this.$getSessionStorage('user');
			this.bankCardArr = this.$getLocalStorage(this.WalletId);
		},
		methods:{
			recharge(){
				if(this.bankCardArr == null){
					alert('请选择银行卡！');
					return;
				}
				if (this.amount == '') {
				  alert('金额不能为空！');
				  return;
				}
				var re = /^(([1-9]{1}\d*)|(0{1}))(\.\d{1,2})?$/
				if(!re.test(this.amount)){
					alert('请输入正确的金额!');
					return;
				}
				
				this.$axios.post('VirtualWallet/ToWalletId',this.$qs.stringify({
					walletId: 10010,
					amount: this.amount
				})).then(response => {
					if(response.data == 1){
						alert('充值成功！');
					}
					if(response.data == 0){
						alert('充值失败！');
					}
				}).catch(error => {
					console.error(error);
				});
			},
			toUserBankCard(){
				this.$router.push({
				  path: '/userBankCard',
				  query: {
				    WalletId: this.WalletId
				  }
				});
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
	/* 充值方式 */
	.wrapper .recharge-method{
		width: 100%;
		/* margin-top: 12vw; */
		background-color: #f5f5f5;
		border-radius: 15px;
		box-sizing: border-box;
		padding: 18vw 5vw 3vw 5vw;
		display: flex;
		align-content: center;
		justify-content: space-between;
	}
	.wrapper .recharge-method .title{
		width: 30%;
		display: flex;
		box-sizing: border-box;
		padding-left: 4vw;
		font-size: 4vw;
	}
	.wrapper .recharge-method .bank-card{
		width: 70%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding-left: 10vw;
		font-size: 4.1vw;
	}

	/* 充值金额 */
	.wrapper .recharge-amount{
		width: 100%;
		box-sizing: border-box;
		padding: 8vw 8vw 0 8vw;
	}
	.wrapper .recharge-amount .title{
		font-size: 4vw;
		margin-bottom: 6vw;
	}
	.wrapper .recharge-amount .amount{
		width: 100%;
		display: flex;
		font-size: 10vw;
		font-weight: 600;
	}
	.wrapper .recharge-amount .amount p{
		margin-right: 4vw;
	}
	.wrapper .recharge-amount .amount input{
		width: 65%;
		border: none;
		outline: none;
		font-size: 7vw;
	}
	.wrapper .recharge-amount .amount button{
		border: none;
		outline: none;
		border-radius: 4px;
		background-color: #38CA73;
		color: #fff;
		font-size: 5vw;
		font-weight: 500;
	}
</style>