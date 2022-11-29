<template>
	<div class="wrapper">
		<!-- header部分 -->
		<header>
			<p>添加银行卡</p>
		</header>
		<!-- 表单部分 -->
		<div class="title">添加银行卡</div>
		<div class="input-box">
			<input type="bankName" v-model="bankCard.bankName" placeholder="银行">
			<input type="cardId" v-model.number="bankCard.cardId" placeholder="卡号">
			<input type="userName" v-model="bankCard.userName" placeholder="持卡人姓名">
		</div>
		<div class="button-add">
			<button @click="addBankCard">保存</button>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'AddBankCard',
		data(){
			return{
				// walletId: this.$route.query.walletId,
				walletId: 10010,
				bankCard: {
					cardId: '',
					userName: '',
					bankName:''
				}
			}
		},
		created(){
			this.user = this.$getSessionStorage('user');
		},
		methods:{
			addBankCard(){
				if (this.bankCard.bankName == '') {
				  alert('请填写所属银行！');
				  return;
				}
				if (this.bankCard.cardId == '') {
				  alert('银行卡号不能为空！');
				  return;
				}
				if (this.bankCard.userName == '') {
				  alert('持卡人姓名不能为空！');
				  return;
				}
				this.$axios.post('BankCard/CardId',this.$qs.stringify({
					cardId: this.bankCard.cardId,
					userName: this.bankCard.userName,
					bankName:this.bankCard.bankName,
					walletId: this.walletId
				})).then(response => {
					if(response.data > 0){
						this.$router.push({
							path: '/userBankCard',
							query: {
								walletId: this.walletId,
							}
						});
					} else{
						alert('添加银行卡失败！')
					}
				}).catch(error => {
					console.error(error);
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
.wrapper .title{
	width: 100%;
	margin-top: 16vw;
	box-sizing: border-box;
	padding-left: 5vw;
	font-size: 4vw;
	color: #888888;
}
.wrapper .input-box{
	width: 100%;
	margin-top: 5vw;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	box-sizing: border-box;
	padding-left: 12vw;
	padding-right: 12vw;
}
.wrapper .input-box input{
	width: 70vw;
	font-size: 5vw;
	margin-top: 0.5vw;
}
.wrapper .button-add{
	width: 100%;
	margin-top: 5vw;
	display: flex;
	justify-content: center;
	align-content: center;
}
.wrapper .button-add button{
	border: none;
	outline: none;
	border-radius: 4px;
	background-color: #38CA73;
	color: #fff;
	font-size: 5vw;
	font-weight: 500;
}
</style>