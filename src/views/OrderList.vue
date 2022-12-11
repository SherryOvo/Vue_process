<template>
  <div class="wrapper">

    <!-- header部分 -->
    <header>
      <p>我的订单</p>
    </header>

    <!-- 订单列表部分 -->
    <h3>未支付订单信息：</h3>
    <ul class="order">
      <li v-for="item in orderArr" v-if="item.orderState==0">
        <div class="order-info">
          <p>
            {{item.business.businessName}}
            <i class="fa fa-caret-down" @click="detailetShow(item)"></i>
          </p>
          <div class="order-info-right">
            <p>&#165;{{(item.orderTotal-(totalpoints * 0.1 > item.orderTotal ? orderId.orderTotal : totalpoints *
          0.1)).toFixed(1)}}</p>
            <div class="order-info-right-icon" @click="toPayment(item)">去支付</div>
          </div>
        </div>
        <ul class="order-detailet" v-show="item.isShowDetailet">
          <li v-for="odItem in item.list">
            <p>{{odItem.food.foodName}} x {{odItem.quantity}}</p>
            <p>&#165;{{(odItem.food.foodPrice*odItem.quantity).toFixed(1)}}</p>
          </li>
          <li>
            <p>配送费</p>
            <p>&#165;{{item.business.deliveryPrice}}</p>
          </li>
		  <li>
		    <p>积分抵扣</p>
		    <p>&#165;{{-(totalpoints * 0.1 > orders.orderTotal ? orderId.orderTotal : totalpoints * 0.1).toFixed(1)}}</p>
		  </li>
        </ul>
      </li>
    </ul>

    <h3>已支付订单信息：</h3>
    <ul class="order">
      <li v-for="item in orderArr" v-if="item.orderState==1">
        <div class="order-info">
          <p>
            {{item.business.businessName}}
            <i class="fa fa-caret-down" @click="detailetShow(item)"></i>
          </p>
          <div class="order-info-right">
            <p>&#165;{{item.orderTotal}}</p>
          </div>
        </div>
        <ul class="order-detailet" v-show="item.isShowDetailet">
          <li v-for="odItem in item.list">
            <p>{{odItem.food.foodName}} x {{odItem.quantity}}</p>
            <p>&#165;{{(odItem.food.foodPrice*odItem.quantity).toFixed(1)}}</p>
          </li>
          <li>
            <p>配送费</p>
            <p>&#165;{{item.business.deliveryPrice}}</p>
          </li>
        </ul>
      </li>
    </ul>

    <!-- 底部菜单部分 -->
    <Footer></Footer>

  </div>
</template>

<script>
import Footer from '../components/Footer.vue';

export default {
  name: 'OrderList',
  data() {
    return {
	  orderId: this.$route.query.orderId,	
	  orders: {
	    business: {}
	  },
      orderArr: [],
      user: {},
	  totalpoints:0
    }
  },
  created() {
    this.user = this.$getSessionStorage('user');

    this.$axios.get('Orders/UserId', {
      params: {
        userId: this.user.userId
      }
    }).then(response => {
      let result = response.data;
      for (let orders of result) {
        orders.isShowDetailet = false;
      }
      this.orderArr = result;
    }).catch(error => {
      console.error(error);
    });
	
	this.user = this.$getSessionStorage('user');
	this.$axios.get('Orders/OrdersId', {
	  params: {
	    orderId: this.orderId
	  }
	}).then(response => {
	  this.orders = response.data;
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
  methods: {
    detailetShow(orders) {
      orders.isShowDetailet = !orders.isShowDetailet;
    },
    toPayment(orders) {
      // 创建订单
      let orderId = orders.orderId;
      if (orderId > 0) {
        this.$router.push({
          path: '/payment',
          query: {
            orderId: orderId
          }
        });
      }
    }
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

/****************** 历史订单列表部分 ******************/
.wrapper h3 {
  margin-top: 12vw;
  box-sizing: border-box;
  padding: 4vw;
  font-size: 4vw;
  font-weight: 300;
  color: #999;
}

.wrapper .order {
  width: 100%;
}

.wrapper .order li {
  width: 100%;
}

.wrapper .order li .order-info {
  box-sizing: border-box;
  padding: 2vw 4vw;
  font-size: 4vw;
  color: #666;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wrapper .order li .order-info .order-info-right {
  display: flex;
}

.wrapper .order li .order-info .order-info-right .order-info-right-icon {
  background-color: #f90;
  color: #fff;
  border-radius: 3px;
  margin-left: 2vw;
  user-select: none;
  cursor: pointer;
}

.wrapper .order li .order-detailet {
  width: 100%;
}

.wrapper .order li .order-detailet li {
  width: 100%;
  box-sizing: border-box;
  padding: 1vw 4vw;
  color: #666;
  font-size: 3vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
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
