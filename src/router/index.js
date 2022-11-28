import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import Index from '../views/Index.vue'
import BusinessList from '../views/BusinessList.vue'
import BusinessInfo from '../views/BusinessInfo.vue'
import Login from '../views/Login.vue'
import Orders from '../views/Orders.vue'
import UserAddress from '../views/UserAddress.vue'
import Payment from '../views/Payment.vue'
import OrderList from '../views/OrderList.vue'
import AddUserAddress from '../views/AddUserAddress.vue'
import EditUserAddress from '../views/EditUserAddress.vue'
import Register from '../views/Register.vue'
import Mypoints from '../views/Mypoints.vue'
import Mine from '../views/Mine.vue'
import Points from '../views/Points.vue'
import MyWallet from '../views/MyWallet.vue'
import WalletDetail from '../views/WalletDetail.vue'
import Recharge from '../views/Recharge.vue'
import Withdraw from '../views/Withdraw.vue'
import UserBankCard from '../views/UserBankCard.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: Index
	},
	{
		path: '/index',
		name: 'Index',
		component: Index
	},
	{
		path: '/businessList',
		name: 'BusinessList',
		component: BusinessList
	},
	{
		path: '/businessInfo',
		name: 'BusinessInfo',
		component: BusinessInfo
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/orders',
		name: 'Orders',
		component: Orders
	},
	{
		path: '/userAddress',
		name: 'UserAddress',
		component: UserAddress
	}, 
	{
		path: '/payment',
		name: 'Payment',
		component: Payment
	}, 
	{
		path: '/orderList',
		name: 'OrderList',
		component: OrderList
	}, 
	{
		path: '/addUserAddress',
		name: 'AddUserAddress',
		component: AddUserAddress
	}, 
	{
		path: '/editUserAddress',
		name: 'EditUserAddress',
		component: EditUserAddress
	}, 
	{
		path: '/register',
		name: 'Register',
		component: Register
	},
	{
		path: '/mypoints',
		name: 'Mypoints',
		component: Mypoints
	},
	{
		path: '/mine',
		name: 'Mine',
		component: Mine
	},
	{
		path: '/points',
		name: 'Points',
		component: Points
	},
	{
		path: '/myWallet',
		name: 'Mywallet',
		component: MyWallet
	},
	{
		path: '/walletDetail',
		name: 'WalletDetail',
		component: WalletDetail
	},
	{
		path: '/recharge',
		name: 'Recharge',
		component: Recharge
	},
	{
		path: '/withdraw',
		name: 'Withdraw',
		component: Withdraw
	},
	{
		path: '/userBankCard',
		name: 'UserBankCard',
		component: UserBankCard
	}
]

// 解决重复路由报异常问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
