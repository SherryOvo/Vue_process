<template>
	<ul class="footer">
		<li onclick="location.href='index.html'">
			<i class="fa fa-home"></i>
			<p>首页</p>
		</li>
		<li>
			<i class="fa fa-compass"></i>
			<p>发现</p>
		</li>
		<li onclick="location.href='orderList.html'">
			<i class="fa fa-file-text-o"></i>
			<p>订单</p>
		</li>
		<li>
			<i class="fa fa-user-o"></i>
			<p>我的</p>
		</li>
	</ul>
</template>

<script>
</script>

<style>
	.wrapper .footer {
		width: 100%;
		height: 14vw;
		border-top: solid 1px #ddd;
		background-color: #fff;

		position: fixed;
		/* 固定定位 */
		/* 就脱离文档流,可以设坐标 */
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
