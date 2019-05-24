var host = "http://192.168.1.124:8085";  //本地测试地址
// var host = "http://175.168.154.250:8085"; //映射地址
 
 module.exports = {
	host: host,
	userReg: host + "/index.php/api/user/reg", // 用户注册  完
	userLogin: host + "/index.php/api/user/login", //用户登陆   完
	getArticleInfo: host + "/index.php/api/index/getArticleInfo",//获取官宣  完 
	getequipment: host + "/index.php/api/index/getequipment", //获取装备   完
	getuseroverequipment: host + "/index.php/api/index/getuseroverequipment", //过期装备   完
	getuserequipment: host + "/index.php/api/index/getuserequipment", //我的装备   完
	getskin: host + "/index.php/api/index/getskin", //皮肤列表 完
	getuserskin: host + "/index.php/api/index/getuserskin", //我的皮肤  完
	getArticleDetails: host + "/index.php/api/index/getArticleDetails", //获取文章  完
	getUserLevel: host + "/index.php/api/user/getUserLevel", //获取会员等级列表
	forgetPassword: host + "/index.php/api/user/forgetPassword", // 忘记密码   完
	password: host + "/index.php/api/user/updatepassword",//修改登陆密码   完
	userInfo: host + "/index.php/api/user/userInfo", //获取用户信息  完
	fileUploads: host + "/index.php/api/user/fileUploads",  // 图片上传地址  完
	updateUserInfo: host + "/index.php/api/user/updateUserInfo",  // 修改个人信息   完
	goodsCategoryList: host + "/index.php/api/Goods/goodsCategoryList",  //一级分类  完 
	getCategoryTwoList: host + "/index.php/api/Goods/getCategoryTwoList",   //二级分类   完
	recommendGoodsList: host +　"/index.php/api/goods/recommendGoodsList",　　//获取所有商品列表 完
	goodsInfo: host + "/index.php/api/Goods/goodsInfo",    //商品详情
	getAddressList: host +　"/index.php/api/user/getAddressList",　　//获取地址列表   完
	setDefaultAddress:　host + "/index.php/api/user/setDefaultAddress",  //设置默认地址   完
	getAdListInfo: host + "/index.php/api/index/getAdListInfo",   //商城轮播图   完
	goodsList: host + "/index.php/api/Goods/goodsList",  //商品列表 带参+++++++++++ id(三级分类ID)  完
	addAddress: host + "/index.php/api/user/addAddress",  //添加、修改地址   完
	del_address: host + "/index.php/api/user/del_address",  //删除地址  完
 }