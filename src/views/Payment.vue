<template>
  <div class="wrapper">

    <!-- header部分 -->
    <header>
      <p>在线支付</p>
    </header>

    <!-- 订单信息部分 -->
    <h3>订单信息：</h3>
    <div class="order-info">
      <p>
        {{ orders.business.businessName }}
        <i class="fa fa-caret-down" @click="detailetShow"></i>
      </p>
      <p>&#165;{{ (orders.orderTotal - (totalpoints * 0.1 > orders.orderTotal ? orderId.orderTotal : totalpoints *
          0.1)).toFixed(1)
      }}</p>
    </div>

    <!-- 订单明细部分 -->
    <ul class="order-detailet" v-show="isShowDetailet">
      <li v-for="item in orders.list">
        <p>{{ item.food.foodName }} x {{ item.quantity }}</p>
        <p>&#165;{{ item.food.foodPrice * item.quantity }}</p>
      </li>
      <li>
        <p>配送费</p>
        <p>&#165;{{ orders.business.deliveryPrice }}</p>
      </li>
      <li>
        <p>积分抵扣</p>
        <p>&#165;{{-(totalpoints * 0.1 > orders.orderTotal ? orderId.orderTotal : totalpoints * 0.1).toFixed(1)}}</p>
      </li>
    </ul>

    <!-- 支付方式部分 -->
    <ul class="payment-type">
      <li>
        <!-- <img src=""> -->
        钱包
        <i class="fa fa-check-circle"></i>
      </li>
      <li>
        <img src="../assets/alipay.png">
        <!-- <i class="fa fa-check-circle"></i> -->
      </li>
      <li>
        <img src="../assets/wechat.png">
      </li>
    </ul>
    <div class="payment-button">
      <button @click="pay">确认支付</button>
    </div>

    <!-- 底部菜单部分 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';

export default {
  name: 'Payment',
  data() {
    return {
      orderId: this.$route.query.orderId,
      orders: {
        business: {}
      },
      isShowDetailet: false,
      fromWalletId: 0,
      toWalletId: 0,
      balance: '',
      totalpoints: 0
    }
  },
  created() {
    this.user = this.$getSessionStorage('user');
    // this.$axios.post('OrdersController/getOrdersById',this.$qs.stringify({
    //     orderId:this.orderId
    // })).then(response=>{
    this.$axios.get('Orders/OrdersId', {
      params: {
        orderId: this.orderId
      }
    }).then(response => {
      this.orders = response.data;
    }).catch(error => {
      console.error(error);
    });
    // 查余额
    this.$axios.get('VirtualWallet/WalletId', {
      params: {
        walletId: 10010
      }
    }).then(response => {
      //判断是否登录
      if (this.user != null) {
        this.balance = response.data;
      }
      // alert(this.balance);
    }).catch(error => {
      console.error(error);
    });
    this.$axios.get('Credit/totalNum', {
      params: {
        userId: this.user.userId
      }
    }).then(response => {
      this.totalpoints = response.data;
    }).catch(error => {
      console.error(error);
    });
  },
  mounted() {
    //这里的代码是实现：一旦路由到在线支付组件，就不能回到订单确认组件。
    //先将当前url添加到history对象中
    history.pushState(null, null, document.URL);
    //popstate事件能够监听history对象的变化
    window.onpopstate = () => {
      this.$router.push({
        path: '/index',
        query: {}
      });
    }
  },
  destroyed() {
    window.onpopstate = null;
  },
  methods: {
    detailetShow() {
      this.isShowDetailet = !this.isShowDetailet;
    },
    // toPaymentResult(){
    // 	this.$router.push({
    // 	  path: '/paymentResult'
    // 	});
    // },
    pay() {
      // 根据商家id查商家钱包id
      this.$axios.get('BVirtualWallet/BusinessId', {
        params: {
          businessId: this.orders.business.businessId
        }
      }).then(response => {
        this.toWalletId = response.data.walletId;
      }).catch(error => {
        console.error(error);
      });
      // 自己的钱包id
      this.$axios.get('VirtualWallet/UserId', {
        params: {
          userId: this.user.userId
        }
      }).then(response => {
        this.fromWalletId = response.data.walletId;
      }).catch(error => {
        console.error(error);
      });
      // // 查余额
      // this.$axios.get('VirtualWallet/WalletId', {
      // 	params: {
      // 		walletId: 10010
      // 	}
      // }).then(response => {
      // 	//判断是否登录
      // 	if (this.user != null) {
      // 		this.balance = response.data.balance;
      // 	}
      // }).catch(error => {
      // 	console.error(error);
      // });
      // 如果钱够跳转
      if (this.balance >= this.orders.orderTotal) {
        this.$axios.post('VirtualWallet/WalletId', this.$qs.stringify({
          // fromWalletId: this.fromWalletId,
          fromWalletId: 10010,
          // toWalletId: this.toWalletId,
          toWalletId: 10012,
          amount: (this.orders.orderTotal - (this.totalpoints * 0.1 > this.orders.orderTotal ? orderId.orderTotal : this.totalpoints *
          0.1)).toFixed(1),
          orderId: this.orderId
        })).then(response => {
          if (response.data == 1) {
            this.$axios.post('Credit/userId', this.$qs.stringify({
              userId: this.user.userId,
              channelType: 0,
              num: Math.ceil(this.orders.orderTotal - (this.totalpoints * 0.1 > this.orders.orderTotal ? orderId.orderTotal : this.totalpoints *
          0.1))
            })).then(response => {

            }).catch(error => {
              console.error(error);
            });
			this.$axios.post('Credit/userId', this.$qs.stringify({
			    userId: this.user.userId,
			    channelType: 1,
			    num: -Math.ceil(this.totalpoints * 0.1 > this.orders.orderTotal ? orderId.orderTotal*10 : this.totalpoints)
			  })).then(response => {
			
			  }).catch(error => {
			    console.error(error);
			  });
            alert('支付成功！');
            this.$router.push({
              path: '/index',
            });
          }
          if (response.data == 0) {
            alert('支付失败！');
          }
        }).catch(error => {
          console.error(error);
        });
      } else {
        alert('余额不足支付失败！');
      }
    },
  },
  components: {
    Footer
  }
}
</script>

<style scoped>
/****************** 总容器 ******************/
.wrapper {
  width: 100%;
  height: 100%;
}

/****************** header部分 ******************/
.wrapper header {
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

/****************** 订单信息部分 ******************/
.wrapper h3 {
  margin-top: 12vw;
  box-sizing: border-box;
  padding: 4vw 4vw 0;

  font-size: 4vw;
  font-weight: 300;
  color: #999;
}

.wrapper .order-info {
  box-sizing: border-box;
  padding: 4vw;
  font-size: 4vw;
  color: #666;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wrapper .order-info p:last-child {
  color: orangered;
}

/****************** 订单明细部分 ******************/
.wrapper .order-detailet {
  width: 100%;
}

.wrapper .order-detailet li {
  width: 100%;
  box-sizing: border-box;
  padding: 1vw 4vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wrapper .order-detailet li p {
  font-size: 3vw;
  color: #666;
}

/****************** 支付方式部分 ******************/
.wrapper .payment-type {
  width: 100%;
}

.wrapper .payment-type li {
  width: 100%;
  box-sizing: border-box;
  padding: 4vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
}

.wrapper .payment-type li img {
  width: 33vw;
  height: 8.9vw;
}

.wrapper .payment-type li .fa-check-circle {
  font-size: 5vw;
  color: #38CA73;
}

.wrapper .payment-button {
  width: 100%;
  box-sizing: border-box;
  padding: 4vw;
}

.wrapper .payment-button button {
  width: 100%;
  height: 10vw;
  border: none;
  /*去掉外轮廓线*/
  outline: none;
  border-radius: 4px;
  background-color: #38CA73;
  color: #fff;
}
</style>
