<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<!-- 共通样式，不加scope -->
<style>
	html,
	body,
	div,
	span,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	ul,
	ol,
	li,
	p {
		margin: 0;
		padding: 0;
	}
	
	/* 加上id选择器#app */
	html,
	body,
	#app {
		width: 100%;
		/* 移动端宽高都设100% */
		height: 100%;
		font-family: "微软雅黑";
		/* 运行时若没有,则采用本机默认字体 */
	}
	
	ul,
	ol {
		list-style: none;
		/* 列表的样式去掉 */
	}
	
	a {
		text-decoration: none;
		/* 超链接的下划线去掉 */
	}
</style>
