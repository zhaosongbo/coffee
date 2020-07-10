$(function(){
	// 展开菜单
	$('.menu-btn').click(function(){
		$('#openMenu').addClass('active')
		$('#login').fadeOut()
		$('#sing').fadeOut()
	})
	// 关闭菜单
	$('.closeMenu,#openMenu a').click(function(){
		$('#openMenu').removeClass('active')
	})
	
	// 登录按钮
	$('.login-btn').click(function(){
		$('#login').fadeIn()
		$('#sing').fadeOut()
	})
	// 关闭登录
	$('.closeLogin').click(function(){
		$('#login').fadeOut()
	})
	// 注册按钮
	$('.sing-btn').click(function(){
		$('#sing').fadeIn()
		$('#login').fadeOut()
	})
	$('.closeSing').click(function(){
		$('#sing').fadeOut()
	})
	
	// 返回顶部
	$(window).scroll(function(){
		if($(window).scrollTop()>1000){
			$('#scrollTop').css('display','block')
		}else{
			$('#scrollTop').css('display','none')
		}
	})
	
	$('#scrollTop').click(function(){
		$('body,html').animate({
			scrollTop: 0
		},500)
	})
	
	// 流畅导航
	$('#openMenu').singlePageNav({
	   offset: 70
	});
	
	// 新建一个动画曲线
	var staggeringOptione = {
		reset: true,
		delay: 300,  //延迟300ms后出现		delay(滚动到该内容时延迟出现)
		distance: "50px",//从下到上50px		distance(长度)
		duration: 500, //动画执行500ms   		duration(动画执行时间)
		easing: "ease-in-out", //动画函数	    easing(动画曲线)
		origin: "bottom" //从下到上出现   		origin(出现的位置)
	}
	
	
	
	
	ScrollReveal().reveal('.about-item',{ ...staggeringOptione, interval: 350})
	
	
})


	