<template>
	<!-- 总容器，第三个项目方便改 -->
	<div class="wrapper">

		<!-- 头部 -->
		<header>
			<div class="icon-location-box">
				<div class="icon-location"></div>
			</div>
			<div class="location-text">天津大学北洋园校区
				<i class="fa fa-caret-down"></i>
			</div>
		</header>

		<!-- 搜索框 -->
		<!-- 呈现流畅向上滑动，并且搜索框保留 -->
		<div class="search">
			<!-- 最外层不脱离文档流 -->
			<!-- 避免跳上去 -->
			<div class="search-fixed-top" ref="fixedBox">
				<!-- 这个以内脱离文档流 -->
				<div class="search-box">
					<i class="fa fa-search"></i>搜索饿了么商家、商品名称
				</div>
			</div>
		</div>

		<!-- 点餐分类部分 -->
		<!-- 做一组元素用数组 -->
		<ul class="foodtype">
			<!-- ：！！！！！！！！！！！！！！！这里也可以改改 -->
			<!-- <li onclick="location.href='businessList.html'"> -->
			<li @click="toBusinessList(1)">
				<img src="../assets/dcfl01.png" />
				<p>美食</p><!-- 一段文字用p标签 -->
			</li>
			<li @click="toBusinessList(2)">
				<img src="../assets/dcfl02.png" />
				<p>早餐</p>
			</li>
			<li @click="toBusinessList(3)">
				<img src="../assets/dcfl03.png" />
				<p>跑腿代购</p>
			</li>
			<li @click="toBusinessList(4)">
				<img src="../assets/dcfl04.png" />
				<p>汉堡披萨</p>
			</li>
			<li @click="toBusinessList(5)">
				<img src="../assets/dcfl05.png" />
				<p>甜品饮品</p>
			</li>
			<li @click="toBusinessList(6)">
				<img src="../assets/dcfl06.png" />
				<p>速食简餐</p>
			</li>
			<li @click="toBusinessList(7)">
				<img src="../assets/dcfl07.png" />
				<p>地方小吃</p>
			</li>
			<li @click="toBusinessList(8)">
				<img src="../assets/dcfl08.png" />
				<p>米粉面馆</p>
			</li>
			<li @click="toBusinessList(9)">
				<img src="../assets/dcfl09.png" />
				<p>包子粥铺</p>
			</li>
			<li @click="toBusinessList(10)">
				<img src="../assets/dcfl10.png" />
				<p>炸鸡炸串</p>
			</li>
		</ul>

		<!-- 横幅广告部分 -->
		<div class="banner">
			<!-- 标题用h标签 -->
			<h3>品质套餐</h3>
			<!-- 一段文字 -->
			<p>搭配齐全吃的好</p>
			<!-- 超链接用a标签 -->
			<a>立即抢购 &gt;</a><!-- 箭头用转义字符 -->
			<!-- 一个空格可以直接空，多个空格要用转义字符 -->
		</div>

		<!-- 超级会员部分 -->
		<div class="supermember">
			<div class="left">
				<img src="../assets/super_member.png" />
				<h3>超级会员</h3>
				<p>&#8226; 每月享超值权益</p>
			</div>
			<div class="right">
				立即开通 &gt;
				<!-- 点击部分不一定非要a标签 -->
			</div>
		</div>

		<!-- 推荐商家部分 -->
		<div class="recommend">
			<div class="recommend-line"></div>
			<p>推荐商家</p>
			<div class="recommend-line"></div>
		</div>

		<!-- 推荐方式部分 -->
		<ul class="recommendtype">
			<li>综合排序<i class="fa fa-caret-down"></i></li>
			<li>距离最近</li>
			<li>销量最高</li>
			<li>筛选<i class="fa fa-filter"></i></li>
		</ul>

		<!-- 推荐商家列表部分 -->
		<ul class="business">
			<li>
				<img src="../assets/sj01.png">
				<div class="business-info">
					<div class="business-info-h">
						<h3>万家饺子（软件园E18店）</h3>
						<div class="business-info-like">&#8226;</div><!-- ：不喜欢这个符号 -->
					</div>
					<div class="business-info-star">
						<div class="business-info-star-left">
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<p>4.9 月售345单</p>
						</div>
						<div class="business-info-star-right">
							蜂鸟专送
						</div>
					</div>
					<div class="business-info-delivery">
						<p>&#165;15起送 | &#165;3配送</p>
						<p>3.22km | 30分钟</p>
					</div>
					<div class="business-info-explain">
						<div>各种饺子</div>
					</div>
					<div class="business-info-promotion-i">
						<div class="business-info-promotion-left">
							<div class="business-info-promotion-left-icon">新</div>
							<p>饿了么新用户首单立减9元</p>
						</div>
						<div class="business-info-promotion-right">
							<p>2个活动</p>
							<i class="fa fa-caret-down"></i>
						</div>
					</div>
					<div class="business-info-promotion-ii">
						<div class="business-info-promotion-left">
							<div class="business-info-promotion-left-icon">特</div><!-- 可以设行类样式 -->
							<!-- style="background-color: #f1884f"加在class之后 -->
							<p>特价商品5元起</p>
						</div>
					</div>
				</div>
			</li>
			<li>
				<img src="../assets/sj02.png">
				<div class="business-info">
					<div class="business-info-h">
						<h3>小锅饭豆腐馆（全运店）</h3>
						<div class="business-info-like">&#8226;</div><!-- ：不喜欢这个符号 -->
					</div>
					<div class="business-info-star">
						<div class="business-info-star-left">
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<p>4.9 月售345单</p>
						</div>
						<div class="business-info-star-right">
							蜂鸟专送
						</div>
					</div>
					<div class="business-info-delivery">
						<p>&#165;15起送 | &#165;3配送</p>
						<p>3.22km | 30分钟</p>
					</div>
					<div class="business-info-explain">
						<div>各种饺子</div>
					</div>
					<div class="business-info-promotion-i">
						<div class="business-info-promotion-left">
							<div class="business-info-promotion-left-icon">新</div>
							<p>饿了么新用户首单立减9元</p>
						</div>
						<div class="business-info-promotion-right">
							<p>2个活动</p>
							<i class="fa fa-caret-down"></i>
						</div>
					</div>
					<div class="business-info-promotion-ii">
						<div class="business-info-promotion-left">
							<div class="business-info-promotion-left-icon">特</div>
							<p>特价商品5元起</p>
						</div>
					</div>
				</div>
			</li>
			<li>
				<img src="../assets/sj03.png">
				<div class="business-info">
					<div class="business-info-h">
						<h3>麦当劳麦乐送（全运路店）</h3>
						<div class="business-info-like">&#8226;</div><!-- ：不喜欢这个符号 -->
					</div>
					<div class="business-info-star">
						<div class="business-info-star-left">
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<p>4.9 月售345单</p>
						</div>
						<div class="business-info-star-right">
							蜂鸟专送
						</div>
					</div>
					<div class="business-info-delivery">
						<p>&#165;15起送 | &#165;3配送</p>
						<p>3.22km | 30分钟</p>
					</div>
					<div class="business-info-explain">
						<div>各种饺子</div>
					</div>
					<div class="business-info-promotion-i">
						<div class="business-info-promotion-left">
							<div class="business-info-promotion-left-icon">新</div>
							<p>饿了么新用户首单立减9元</p>
						</div>
						<div class="business-info-promotion-right">
							<p>2个活动</p>
							<i class="fa fa-caret-down"></i>
						</div>
					</div>
					<div class="business-info-promotion-ii">
						<div class="business-info-promotion-left">
							<div class="business-info-promotion-left-icon">特</div>
							<p>特价商品5元起</p>
						</div>
					</div>
				</div>
			</li>
			<li>
				<img src="../assets/sj04.png">
				<div class="business-info">
					<div class="business-info-h">
						<h3>米村拌饭（浑南店）</h3>
						<div class="business-info-like">&#8226;</div><!-- ：不喜欢这个符号 -->
					</div>
					<div class="business-info-star">
						<div class="business-info-star-left">
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<p>4.9 月售345单</p>
						</div>
						<div class="business-info-star-right">
							蜂鸟专送
						</div>
					</div>
					<div class="business-info-delivery">
						<p>&#165;15起送 | &#165;3配送</p>
						<p>3.22km | 30分钟</p>
					</div>
					<div class="business-info-explain">
						<div>各种饺子</div>
					</div>
					<div class="business-info-promotion-i">
						<div class="business-info-promotion-left">
							<div class="business-info-promotion-left-icon">新</div>
							<p>饿了么新用户首单立减9元</p>
						</div>
						<div class="business-info-promotion-right">
							<p>2个活动</p>
							<i class="fa fa-caret-down"></i>
						</div>
					</div>
					<div class="business-info-promotion-ii">
						<div class="business-info-promotion-left">
							<div class="business-info-promotion-left-icon">特</div>
							<p>特价商品5元起</p>
						</div>
					</div>
				</div>
			</li>
			<li>
				<img src="../assets/sj05.png">
				<div class="business-info">
					<div class="business-info-h">
						<h3>申记串道（中海康城店）</h3>
						<div class="business-info-like">&#8226;</div><!-- ：不喜欢这个符号 -->
					</div>
					<div class="business-info-star">
						<div class="business-info-star-left">
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<p>4.9 月售345单</p>
						</div>
						<div class="business-info-star-right">
							蜂鸟专送
						</div>
					</div>
					<div class="business-info-delivery">
						<p>&#165;15起送 | &#165;3配送</p>
						<p>3.22km | 30分钟</p>
					</div>
					<div class="business-info-explain">
						<div>各种饺子</div>
					</div>
					<div class="business-info-promotion-i">
						<div class="business-info-promotion-left">
							<div class="business-info-promotion-left-icon">新</div>
							<p>饿了么新用户首单立减9元</p>
						</div>
						<div class="business-info-promotion-right">
							<p>2个活动</p>
							<i class="fa fa-caret-down"></i>
						</div>
					</div>
					<div class="business-info-promotion-ii">
						<div class="business-info-promotion-left">
							<div class="business-info-promotion-left-icon">特</div>
							<p>特价商品5元起</p>
						</div>
					</div>
				</div>
			</li>
			<li>
				<img src="../assets/sj06.png">
				<div class="business-info">
					<div class="business-info-h">
						<h3>半亩良田排骨米饭</h3>
						<div class="business-info-like">&#8226;</div><!-- ：不喜欢这个符号 -->
					</div>
					<div class="business-info-star">
						<div class="business-info-star-left">
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<p>4.9 月售345单</p>
						</div>
						<div class="business-info-star-right">
							蜂鸟专送
						</div>
					</div>
					<div class="business-info-delivery">
						<p>&#165;15起送 | &#165;3配送</p>
						<p>3.22km | 30分钟</p>
					</div>
					<div class="business-info-explain">
						<div>各种饺子</div>
					</div>
					<div class="business-info-promotion-i">
						<div class="business-info-promotion-left">
							<div class="business-info-promotion-left-icon">新</div>
							<p>饿了么新用户首单立减9元</p>
						</div>
						<div class="business-info-promotion-right">
							<p>2个活动</p>
							<i class="fa fa-caret-down"></i>
						</div>
					</div>
					<div class="business-info-promotion-ii">
						<div class="business-info-promotion-left">
							<div class="business-info-promotion-left-icon">特</div>
							<p>特价商品5元起</p>
						</div>
					</div>
				</div>
			</li>
			<li>
				<img src="../assets/sj07.png">
				<div class="business-info">
					<div class="business-info-h">
						<h3>茶兮鲜果饮品（国际软件园店）</h3>
						<div class="business-info-like">&#8226;</div><!-- ：不喜欢这个符号 -->
					</div>
					<div class="business-info-star">
						<div class="business-info-star-left">
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<p>4.9 月售345单</p>
						</div>
						<div class="business-info-star-right">
							蜂鸟专送
						</div>
					</div>
					<div class="business-info-delivery">
						<p>&#165;15起送 | &#165;3配送</p>
						<p>3.22km | 30分钟</p>
					</div>
					<div class="business-info-explain">
						<div>各种饺子</div>
					</div>
					<div class="business-info-promotion-i">
						<div class="business-info-promotion-left">
							<div class="business-info-promotion-left-icon">新</div>
							<p>饿了么新用户首单立减9元</p>
						</div>
						<div class="business-info-promotion-right">
							<p>2个活动</p>
							<i class="fa fa-caret-down"></i>
						</div>
					</div>
					<div class="business-info-promotion-ii">
						<div class="business-info-promotion-left">
							<div class="business-info-promotion-left-icon">特</div>
							<p>特价商品5元起</p>
						</div>
					</div>
				</div>
			</li>
			<li>
				<img src="../assets/sj08.png">
				<div class="business-info">
					<div class="business-info-h">
						<h3>唯一水果捞（软件园E18店）</h3>
						<div class="business-info-like">&#8226;</div><!-- ：不喜欢这个符号 -->
					</div>
					<div class="business-info-star">
						<div class="business-info-star-left">
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<p>4.9 月售345单</p>
						</div>
						<div class="business-info-star-right">
							蜂鸟专送
						</div>
					</div>
					<div class="business-info-delivery">
						<p>&#165;15起送 | &#165;3配送</p>
						<p>3.22km | 30分钟</p>
					</div>
					<div class="business-info-explain">
						<div>各种饺子</div>
					</div>
					<div class="business-info-promotion-i">
						<div class="business-info-promotion-left">
							<div class="business-info-promotion-left-icon">新</div>
							<p>饿了么新用户首单立减9元</p>
						</div>
						<div class="business-info-promotion-right">
							<p>2个活动</p>
							<i class="fa fa-caret-down"></i>
						</div>
					</div>
					<div class="business-info-promotion-ii">
						<div class="business-info-promotion-left">
							<div class="business-info-promotion-left-icon">特</div>
							<p>特价商品5元起</p>
						</div>
					</div>
				</div>
			</li>
			<li>
				<img src="../assets/sj09.png">
				<div class="business-info">
					<div class="business-info-h">
						<h3>满园春饼（全运路店）</h3>
						<div class="business-info-like">&#8226;</div><!-- ：不喜欢这个符号 -->
					</div>
					<div class="business-info-star">
						<div class="business-info-star-left">
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<p>4.9 月售345单</p>
						</div>
						<div class="business-info-star-right">
							蜂鸟专送
						</div>
					</div>
					<div class="business-info-delivery">
						<p>&#165;15起送 | &#165;3配送</p>
						<p>3.22km | 30分钟</p>
					</div>
					<div class="business-info-explain">
						<div>各种饺子</div>
					</div>
					<div class="business-info-promotion-i">
						<div class="business-info-promotion-left">
							<div class="business-info-promotion-left-icon">新</div>
							<p>饿了么新用户首单立减9元</p>
						</div>
						<div class="business-info-promotion-right">
							<p>2个活动</p>
							<i class="fa fa-caret-down"></i>
						</div>
					</div>
					<div class="business-info-promotion-ii">
						<div class="business-info-promotion-left">
							<div class="business-info-promotion-left-icon">特</div>
							<p>特价商品5元起</p>
						</div>
					</div>
				</div>
			</li>
		</ul>

		<!-- 底部菜单 -->
		<Footer></Footer>
	</div>
</template>

<script>
	// 导入共通组件
	import Footer from '../components/Footer.vue';
	
	export default {
		name: 'Index',
		// vue对象创建后
		// created() {

		// },
		// dom挂载后
		mounted() {
			// document.onscroll = function() {
			document.onscroll = ()=> {
				// 获取滚动条位置
				let s1 = document.documentElement.scrollTop;
				let s2 = document.body.scrollTop;
				let scroll = s1 == 0 ? s2 : s1;
				// 获取视口宽度
				let width = document.documentElement.clientWidth;
				// 获取顶部固定块
				// let search = document.getElementById('fixedBox');
				let search = this.$refs.fixedBox;
				// 用箭头函数
				
				// 判断滚动条超过视口的12%时，搜索块变固定定位
				if (scroll > width * 0.12) {
					search.style.position = 'fixed'; // css怎么写这里就怎么写
					search.style.left = '0';
					search.style.top = '0';
				} else {
					search.style.position = 'static';
				}
			}
		},
		// 组件卸载后的生命周期
		destroyed() {
			// 切换到其他组件,把document事件（向上划固定搜索栏）取消
			document.onscroll = null;
		},
		components:{
			Footer
		},
		methods:{
			toBusinessList(orderTypeId){
				this.$router.push({path:'/businessList',query:{orderTypeId:orderTypeId}});
			}
		}
	}
</script>

<style scoped>
	/* scoped表示样式是私有的 */
	/* 总容器 */
	.wrapper {
		width: 100%;
		height: 100%;
	}

	/* 头部 */
	.wrapper header {
		width: 100%;
		height: 12vw;
		background-color: #0097ff;
		/* ：！！！这个条颜色好像要再浅一点，是这个#00abf5,而且好像有点渐变 */

		display: flex;
		align-items: center;
	}

	.wrapper header .icon-location-box {
		width: 3.5vw;
		height: 3.5vw;
		margin: 0 1vw 0 3vw;
		/* 上右下左 */
	}

	.wrapper header .location-text {
		font-size: 4.5vw;
		font-weight: 700;
		/* 粗细 */
		color: #fff;

		/* ：俺加了这俩 */
		user-select: none;
		cursor: pointer;
	}

	.wrapper header .location-text .fa-caret-down {
		/* margin-left: 1vw; */
		/* ：感觉html里换行了，这边就不需要这个呢 */
	}

	/* 搜索部分 */
	.wrapper .search {
		width: 100%;
		height: 13vw;
	}

	.wrapper .search .search-fixed-top {
		width: 100%;
		height: 13vw;
		background-color: #0097ff;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.wrapper .search .search-fixed-top .search-box {
		width: 90%;
		height: 9vw;
		background-color: #fff;
		border-radius: 2px;
		/* 圆角 */

		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 3.5vw;
		color: #aeaeae;
		font-family: "宋体";
		user-select: none;
		/* 设文本选中状态为无效,鼠标光标不能选文本 */
		cursor: pointer;
		/* ：俺加了这个 */
	}

	.wrapper .search .search-fixed-top .search-box .fa-search {
		margin-right: 1vw;
	}

	/* 点餐分类部分 */
	.wrapper .foodtype {
		/* 注意是ul */
		width: 100%;
		height: 48vw;

		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-content: center;
	}

	.wrapper .foodtype li {
		width: 18vw;
		height: 20vw;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		user-select: none;
		cursor: pointer;
	}

	.wrapper .foodtype li img {
		width: 12vw;
		height: 12vw;
	}

	.wrapper .foodtype li p {
		font-size: 3.2vw;
		color: #666;
	}

	/* 横幅广告 */
	.wrapper .banner {
		width: 95%;
		/* 背景颜色或图片会充满内边距，所以不能用内边距留白 */
		margin: 0 auto;
		/* 整个块水平方向居中 */
		height: 29vw;

		background-image: url(../assets/index_banner.png);
		/* ：！！！！！！！！！这里可不可以夹带私货！ */
		/* 使背景图片充满整个窗口 */
		background-repeat: no-repeat;
		background-size: cover;
		/* 背景图片成比例的充满整个窗口 */

		/* 边框盒子设置内边距 */
		box-sizing: border-box;
		padding: 2vw 6vw;
		/* 上下 左右 */
	}

	.wrapper .banner h3 {
		font-size: 4.2vw;
		margin-bottom: 1.2vw;
	}

	.wrapper .banner p {
		font-size: 3.4vw;
		color: #666;
		margin-bottom: 2.4vw;
	}

	.wrapper .banner a {
		font-size: 3vw;
		color: #C79060;
		font-weight: 700;
	}

	/* 超级会员部分 */
	.wrapper .supermember {
		width: 95%;
		margin: 0 auto;
		height: 11.5vw;
		background-color: #feedc1;
		margin-top: 1.3vw;
		border-radius: 2px;
		color: #644f1b;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.wrapper .supermember .left {
		display: flex;
		align-items: center;
		margin-left: 4vw;
		user-select: none;
	}

	.wrapper .supermember .left img {
		width: 6vw;
		height: 6vw;
		margin-right: 2vw;
	}

	.wrapper .supermember .left h3 {
		font-size: 4vw;
		margin-right: 2vw;
	}

	.wrapper .supermember .left p {
		font-size: 3vw;
	}

	.wrapper .supermember .right {
		font-size: 3vw;
		margin-right: 4vw;
		cursor: pointer;
	}

	/* 推荐商家部分 */
	.wrapper .recommend {
		width: 100%;
		height: 14vw;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.wrapper .recommend .recommend-line {
		width: 6vw;
		height: 0.2vw;
		background-color: #888;
	}

	.wrapper .recommend p {
		font-size: 4vw;
		margin: 0 4vw;
	}

	/* 推荐方式部分 */
	.wrapper .recommendtype {
		/* ：！！！！！！！！！！！！！！！！！可以做成划上去留在顶部的吧？ */
		width: 100%;
		height: 5vw;
		margin-bottom: 5vw;

		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.wrapper .recommendtype li {
		font-size: 3.5vw;
		color: #555;
	}

	/* 推荐商家列表 */
	.wrapper .business {
		width: 100%;
		/* 高度不定 */
		/* margin-bottom: 14vw; */
		/* 把底部菜单留出来 */
		/* ：怎么没顶起来呢 */
		padding-bottom: 14vw;
		/* ：这样顶起来了 */
	}

	.wrapper .business li {
		width: 100%;
		box-sizing: border-box;
		/* 用边框盒子使用内边距 */
		padding: 2.5vw;
		user-select: none;
		border-bottom: solid 1px #ddd;

		display: flex;
	}

	.wrapper .business li img {
		width: 18vw;
		height: 18vw;
	}

	.wrapper .business li .business-info {
		width: 100%;
		box-sizing: border-box;
		padding: 3vw;
	}

	.wrapper .business li .business-info .business-info-h {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2vw;
	}

	.wrapper .business li .business-info .business-info-h h3 {
		color: #333;
	}

	.wrapper .business li .business-info .business-info-h .business-info-like {
		width: 1.6vw;
		height: 3.4vw;
		background-color: #666;
		color: #fff;
		font-size: 4vw;
		margin-right: 4vw;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.wrapper .business li .business-info .business-info-star {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2vw;
		font-size: 3.1vw;
	}

	.wrapper .business li .business-info .business-info-star .business-info-star-left {
		display: flex;
		align-items: center;
	}

	.wrapper .business li .business-info .business-info-star .business-info-star-left .fa-star {
		color: #fec80e;
		margin-right: 0.5vw;
	}

	.wrapper .business li .business-info .business-info-star .business-info-star-left p {
		color: #666;
		margin-left: 1vw;
	}

	.wrapper .business li .business-info .business-info-star .business-info-star-right {
		background-color: #0097ff;
		color: #fff;
		font-size: 2.4vw;
		border-radius: 2px;
		padding: 0 0.6vw;
		/* 没设宽和高,就不用边框盒子 */
	}

	.wrapper .business li .business-info .business-info-delivery {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2vw;
		color: #666;
		font-size: 3.1vw;
	}

	.wrapper .business li .business-info .business-info-explain {
		display: flex;
		align-items: center;
		margin-bottom: 3vw;
	}

	.wrapper .business li .business-info .business-info-explain div {
		border: solid 1px #ddd;
		font-size: 2.8vw;
		color: #666;
		border-radius: 3px;
		padding: 0 0.1vw;
	}

	.wrapper .business li .business-info .business-info-promotion-i {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.8vw;
	}

	.wrapper .business li .business-info .business-info-promotion-i .business-info-promotion-left {
		display: flex;
		align-items: center;
	}

	.wrapper .business li .business-info .business-info-promotion-i .business-info-promotion-left .business-info-promotion-left-icon {
		width: 4vw;
		height: 4vw;
		background-color: #70bc46;
		font-size: 3vw;
		border-radius: 3px;
		color: #fff;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.wrapper .business li .business-info .business-info-promotion-i .business-info-promotion-left p {
		color: #666;
		font-size: 3vw;
		margin-left: 2vw;
	}

	.wrapper .business li .business-info .business-info-promotion-i .business-info-promotion-right {
		display: flex;
		align-items: center;
		font-size: 2.5vw;
		color: #999;
	}

	.wrapper .business li .business-info .business-info-promotion-i .business-info-promotion-right p {
		margin-right: 2vw;
	}

	.wrapper .business li .business-info .business-info-promotion-ii {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.8vw;
	}

	.wrapper .business li .business-info .business-info-promotion-ii .business-info-promotion-left {
		display: flex;
		align-items: center;
	}

	.wrapper .business li .business-info .business-info-promotion-ii .business-info-promotion-left .business-info-promotion-left-icon {
		width: 4vw;
		height: 4vw;
		background-color: #f1884f;
		font-size: 3vw;
		border-radius: 3px;
		color: #fff;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.wrapper .business li .business-info .business-info-promotion-ii .business-info-promotion-left p {
		color: #666;
		font-size: 3vw;
		margin-left: 2vw;
	}

	/* 底部菜单 */

</style>
