$(function(){
	
	//二级导航
	$('#header .n_haeder .nav li ').hover(function () {
            $(this).find('.drop').stop(true).slideDown();
            $(this).siblings().find('a').removeClass('act');
            $(this).children('a').addClass('act');
        }, function () {
            $(this).find('.drop').stop(true).slideUp();
        });

	//about
	$(document).ready(function(){
			$('.ab_cur_icon').find('li').hover(function(){
				$('.ab_cur_icon').find('img').stop().eq($(this).index()).fadeIn(0).siblings().fadeOut(0);
				$(this).find('img').addClass('act');
				$(this).find('h7').stop().fadeOut(0);
				$(this).find('.bb_txt').stop().fadeIn(0);
			},function(){
				$(this).find('img').removeClass();
				$(this).find('h7').stop().fadeIn();
				$(this).find('.bb_txt').stop().fadeOut(0);
			})
		})

	
	//i_news
	var new_w=$('.hide_bar li').width();
	
	
		$('.new_bar').hover(function() {
			
			$(this).find('.hide_bar')
				.stop(true)
				.animate({height:170},500);
				
		},function(){
			
			 $(this).find('.hide_bar')
				.stop(true)
				.animate({height:0},500);
			
		});
	
	
	
		$('.hide_bar .new_num span').hover(function() {
			var index=$(this).index();
			
				$(this).addClass('on')
					.siblings()
					.removeClass('on');
					
				$(this).parent()
					.next('ul')
					.stop(true)
					 .animate({marginLeft:-index*new_w},500);
		});
	
	//tabs
	$('.tab_name li').hover(function() {
		var index=$(this).index();
			$(this).addClass('on').siblings().removeClass('on');
			$(this).parents('.tabs').find('.tab_box .list').eq(index).stop(true).slideDown();
			$(this).parents('.tabs').find('.tab_box .list').eq(index).siblings().slideUp();
	});
	
	//map
	$('.maps img').hover(function() {
        var name=$(this).attr('class');
			$('div[data-name='+name+']').stop(true).fadeIn();
			$('div[data-name='+name+']').siblings().fadeOut();
    },function(){
		    $('.maps .hide').fadeOut();
	});
	
	$('#footer .left li:last').css('background','none');
	
	//解决方案
	$('.flex-left .list:first').css({'width':204,'padding':0},500);
	$('.flex-left .list:first').siblings().css('width',18);
	
	$('.flex-left .list').hover(function() {
		$(this).stop(true).animate({width:204},300);
		$(this).siblings().stop(true).animate({width:18},300);
    });
	
	
	//banner
	var $in_banner = $('.n_baner'),
			li_size    = $('.n_baner li').length,
			num        = 0,
			bannerroll = setInterval(move,4000);
	
			
			//定时器运行的函数
			function move(){
				var w_width = $(window).width();
					num<li_size-1?num++:num=0;
					
					$('.n_banner .num a').eq(num).addClass('on')
					.siblings().removeClass('on');
					
			};
			$(".banner .next").click(function(){
		      nextscroll();
	       });
	      function nextscroll(){
		  var $bul=$(".banner .n_baner ul");
		  var offset=($(".banner .n_baner ul  li").outerWidth(true))* -1;
		
		  $bul.stop().animate({'marginLeft':offset},"slow",function(){
			$(this).css('margin-left',0);
			$(".banner .n_baner ul  li:first").appendTo(".banner .n_baner ul");
		  });
	  }
	
	//pc左右箭标
	      $(".banner .prev").click(function(){
		 var $bul=$(".banner .n_baner ul");
		 var offset=($(".banner .n_baner ul  li").outerWidth(true))* -1;
		 $(".banner .n_baner ul  li:last").prependTo(".banner .n_baner ul");
		 $bul.css("margin-left", offset);
		 $bul.stop().animate({'marginLeft':0},"slow");
		
	  });
	
	   var bTimer=setInterval(nextscroll,5000);
	   $(".banner .next,.banner .prev").hover(function(){
		 clearInterval(bTimer);
	   },function(){
		bTimer=setInterval(nextscroll,5000);
	   });

			//点击指示点，banner运行相应的图片
			$('.n_banner .num a').click(function() {
				var index   = $(this).index(),
					w_width = $(window).width();
					
					$(this).addClass('on')
					.siblings().removeClass('on');
					
					num=index;
					if(w_width>999){
						$in_banner.find('ul').stop()
						.animate({marginLeft:-num*1920},8000)
					}else{
						$in_banner.find('ul').stop()
						.animate({marginLeft:-num*w_width},8000);
					}
            });
			
			//鼠标经过banner清除定时，离开继续
			$in_banner.hover(function() {
                clearInterval(bannerroll) 
            },function(){
				bannerroll=setInterval(move,3000);
			});
			//根据窗口大小判断加载不同的尺寸的图片
			function change(){
				var w_width=$(window).width();
				
					$in_banner.width(w_width);
					$in_banner.find('li').width(w_width);
					
					$('.banner ul li img').each(function() {
						if(w_width>999){
							$(this).attr('src',$(this).attr('data-1920'));
							$in_banner.width(1920);
							$in_banner.find('li').width(1920);
						}
						else if(w_width<=999&&w_width>640){
							$(this).attr('src',$(this).attr('data-990'));
						}
						else if(w_width<=640){
							$(this).attr('src',$(this).attr('data-640'));
						}
					})
			}
			
			//移动端手滑
	function touchright(){
		var w_width=$(window).width(),
			Istrue=$('.n_baner').find('ul').is(':animated');
			if(!Istrue){
				num<$('.n_baner li').length-1?num++:num=0;
				$('.n_baner .num a')
				.eq(num)
				.addClass('on')
				.siblings()
				.removeClass('on');
				
				$('.n_baner').find('ul')
				.stop()
				.animate({marginLeft:-num*w_width},800);
			}
	};
				
    function touchleft(){
		var w_width=$(window).width(),
			Istrue=$('.n_baner').find('ul').is(':animated');
			if(!Istrue){
				num>0?num--:num=$('.n_baner li').length-1;
				$('.n_baner .num a')
				.eq(num)
				.addClass('on')
				.siblings()
				.removeClass('on');
				
				$('.n_baner').find('ul')
				.stop()
				.animate({marginLeft:-num*w_width},800);
			}
	 }	
			
	var startX, startY, moveEndX, moveEndY, X, Y;
	$('.n_baner').find('li').on('touchstart',function(e){
		e.preventDefault();
		clearInterval(bannerroll);
		startX = e.originalEvent.changedTouches[0].pageX,
		startY = e.originalEvent.changedTouches[0].pageY;
		
	});
		
	$('.n_baner').find('li').on('touchmove',function(e){
		e.preventDefault();
		moveEndX = e.originalEvent.changedTouches[0].pageX,
		moveEndY = e.originalEvent.changedTouches[0].pageY,
		X = moveEndX - startX,
		Y = moveEndY - startY;
		if (Math.abs(X) > Math.abs(Y)) {
			if(X>20){
				touchleft()
			}else if(X<0) {
				touchright()
			}
		}
	});
		
	$('.n_baner').find('li').on('touchend',function(e){
		e.preventDefault();
		moveEndX = e.originalEvent.changedTouches[0].pageX,
		moveEndY = e.originalEvent.changedTouches[0].pageY,
		X = moveEndX - startX,
		Y = moveEndY - startY;
		if(X==0&&Y==0){
			var _link=$(this).children('a').attr('href');
			window.open(_link)
		};
		bannerroll=setInterval(move,4000);
	});	
	
			
			//页面加载
			$(window).load(function() {
				change()
			});
			
			//窗口变化
			$(window).resize(function() {
				var w_width=$(window).width();
					change()
					if(w_width>999){
						$in_banner.find('ul').stop()
						.animate({marginLeft:-num*1920},800);
					}else{
						$in_banner.find('ul').stop()
						.animate({marginLeft:-num*w_width},800);
					}
			});
			
			//头部导航
		$(".collapse").click(function(){
		$(".m_nav").slideToggle(500);
		$(this).toggleClass("active");
	});
	//面包屑		
	try{
		var srollh=$('.main_box_1').offset().top;
		$(window).scroll(function() {
				if($(this).scrollTop()>srollh){
					$('.main_box_1').css({
						'position':'fixed',
						'top':0,
						'left':0,
						'width':'100%',
						'z-index':'8'
						
					});
				}else{
					$('.main_box_1').removeAttr('style');
				}
		});
	}catch(err){}
	
	/*try{
		var srollh=$('.cont_top').offset().top;
		$(window).scroll(function() {
				if($(this).scrollTop()>srollh){
					$('.cont_top').css({
						'position':'fixed',
						'top':0,
						'left':0,
						'width':'1000px',
						'z-index':'8',
						'border-bottom':'1px solid #ccc',
						
					});
				}else{
					$('.cont_top').removeAttr('style');
				}
		});
	}catch(err){}*/
	/*人才体系*/
	 var sem_num = 0,
  auto_sem = setInterval(sem_switch, 2000),
  sem_size = $('.google_sem .box .l span').length;
  function sem_switch() {
    sem_num < sem_size - 1 ? sem_num++:sem_num = 0;
    $('.google_sem .l span').eq(sem_num).addClass('act').siblings().removeClass('act');
    $('.google_sem .list_txt').eq(sem_num).show().siblings().hide();
  }
  $('.google_sem .l span').hover(function() {
    clearInterval(auto_sem);
  },
  function() {
    auto_sem = setInterval(sem_switch, 2000)
  });
  $('.google_sem .l span').hover(function() {
    var index = $(this).index();
    sem_num = index;
    $(this).addClass('act').siblings().removeClass('act');
    $('.google_sem .list_txt').eq(sem_num).show().siblings().hide();
  });
  
  //产品详细图片滚动
        var $para_roll = $('.parameter_show .small_rool');
        var $para_roll_pre = $para_roll.find('.pre');
        var $para_roll_next = $para_roll.find('.next');
        var $para_rol_ul = $para_roll.find('ul');
        var $para_rol_ul_li = $para_rol_ul.find('li');
        var para_size = $para_rol_ul_li.length;
        var para_num = 0;
        var para_h = $para_rol_ul_li.outerHeight(true);
        $para_roll_pre.on('click', function () {
            $para_rol_ul.find('li:first').animate({
                marginTop: -para_h
            }, 500, function () {
                $(this).appendTo($para_rol_ul).css('margin-top', 0);
                $para_rol_ul_li.removeClass('on');
                $para_rol_ul.find('li:first').addClass('on');
                $('.big_img img').attr('src', $para_rol_ul.find('li:first').find('img').attr('src'));
            })
        });
        $para_roll_next.on('click', function () {
            $para_rol_ul.find('li:last').prependTo($para_rol_ul).css('margin-top', -para_h);
            $para_rol_ul.find('li:first').animate({
                marginTop: 0
            }, 500);
            $para_rol_ul_li.removeClass('on');
            $para_rol_ul.find('li:nth-child(4)').addClass('on');
            $('.big_img img').attr('src', $para_rol_ul.find('li:nth-child(4)').find('img').attr('src'));
        });
        $para_rol_ul_li.find('img').on('click', function () {
            $para_rol_ul_li.removeClass('on');
            $(this).parent().addClass('on');
            $('.big_img img').attr('src', $(this).attr('src'));
        });
	/*tab切换*/
	$(function(){
			$('.tab_name li').hover(function() {
				
                $(this).find('a')
					.addClass('on')
					.end()
					.siblings()
					.find('a')
					.removeClass('on');
				
				var index = $(this).index();
					$('.tab_content .list_pro').eq(index).show().siblings().hide();
				
            });
		})
		
	//点击下拉
	$(document).ready(function(){
       $(".list_box li ").click(function() {														  
          $(this).parent().toggleClass("on");
    });	
  });
  
  //人力资源
  var $hr_list=$('.hr .list');
	var $hr_date=$hr_list.find('a.date');
	var $hr_apply=$hr_list.find('a.icon_apply');
	var $zoom=$('.zoom');
	$hr_date.on('click',function(){
		$(this).parent().parent().parent().siblings().find('a.date').removeClass('on');
		$(this).parent().parent().parent().siblings().find('.detail').slideUp();
		$(this).addClass('on');
		$(this).parent().parent().next().slideDown();
	});
	$hr_apply.on('click',function(){
		$zoom.fadeIn();
		$('#jobs_id').val($(this).attr('jobs_id'));
		$('#jobs_name').val($(this).attr('jobs_name'));
		//$('#jobs_name').attr("disabled",true); 
	});
	$zoom.find('a.close').on('click',function(){
		$zoom.fadeOut();
	});
	
	   
	
	
	//面包屑右侧点击显示和隐藏
	$(document).ready(function(){
      $(".curenr_more img").click(function(){
      $(".more_pub").fadeIn();
      $(".more_pub .img").click(function(){
      $(".more_pub").fadeOut();
  });
  });
});
//online
	$('.online li.back_top').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 500);
    });
	
	$('.online li.wx').hover(function() {
       $(this).find('.ewm').show();
    },function(){
		$(this).find('.ewm').hide();
	});
	
	//tabs
	$('.tab_name li').hover(function() {
		
		$(this).find('a')
			.addClass('on')
			.end()
			.siblings()
			.find('a')
			.removeClass('on');
			
		var index = $(this).index();
			$('.tab_content .list').eq(index).show().siblings().hide();
	});
	//解决详情页-bannergeng更换
	$('.ban_list ul li a').click(function(){
		$('.detail_ban .detail_img img').attr('src',$(this).children('img').attr('src'));
	});
	
	//表单
	
	$('.acid li,.acid li input,#i_massge textarea').focus(function() {
        $(this).css({'background':'#f6f6f6','color':'#333','border':'none'});
    });
	
	$('.acid li input,#i_massge textarea').blur(function() {
        $(this).removeAttr('style');
    });
	

	  var emailReg = /^[-._A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/; 
	  var mobileReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;  
	  var telReg = /^(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/;
	  var zipReg = /^[1-9]\d{5}$/;  
	  var zj;
	  
	  $('.submit').on('click',function(){
		
				var $form=$(this).parents("form");
				var require=$form.find(".required");
				var istrue=true;
				//判断必填
				if(require){
					require.each(function(index, element) {
						if($(this).val()==""){
							istrue = false;
							$(this).next("span").show().addClass("red");
						}
					});	
				}
				zj=istrue;
				if(istrue){
					layer.load();
				}
				return istrue;
			
	  });
	  
	  
	  
	  $('form input:not(:submit),form textarea').blur(function() {
			if($(this).val()==''){
				
				$(this)
				.next("span")
				.show()
				.addClass("red");
				
			}else{
				$(this).next("span").hide();
			};
     });
	 
	 $('form .f_phone').blur(function() {
        if(!telReg.test($(this).val())||!mobileReg.test($(this).val())){
			
			$(this).val('');
			$(this).next("span")
			.show().addClass("red");
		}
    });
	
	$('form .f_eamil').blur(function() {
        if(!emailReg.test($(this).val())){
			$(this).val('');
			$(this).next("span").show().addClass("red");
		}
    });
	
	$('form .f_zip').blur(function() {
        if(!zipReg.test($(this).val())){
			$(this).val('');
			$(this).next("span")
			.show().addClass("red");
		}
    });
	
	

	
			   
	$('#about5 .ajax a').on('click',function(){
		var obj = $(this);
		var num = $('.honor_us .page_content_1 ul li:last').find('img:eq(1)').attr('data-num');
		
		$.get(APP+'/form/get_more', {
			publicids: obj.attr('publicids'),
			model_id: obj.attr('model_id'),
			status: obj.attr('status'),
			p: obj.attr('p'),
			_order: obj.parent(".sort_page").attr('order'),
			_sort: obj.parent(".sort_page").attr('sort')
		}, function (data) {
			var html='';
			if(data != null){
				for (var i = 0; i < data.length; i++) {
					html +='<li><div class="hide"><p>'+data[i]['title']+'</p>';		
					html +=' <i><img src="/Public/Images/home/radiantpv/zh-cn/honor_more.png" width="43" height="43"></i>';			    
					html +='</div><img src="/Uploads/image/'+data[i]['image']+'" data-num="'+(parseInt(num)+i)+'" alt="'+data[i]['title']+'">';
					html +='</li>';
				}         
				obj.attr('p', parseInt(obj.attr('p'))+1);       
			}else{
				obj.addClass('none').html('最后一页');
			}
			
			$('.honor_us .page_content_1 ul').append(html);
		});
});

/****************************
		       on_line
	***************************/
	var h=$(window).width();
	
	$('.online li').hover(function() {
        $(this).find('span')
		.stop()
		.animate({ width:128},500)
    },function(){
		$(this).find('span')
		.stop()
		.animate({ width:0},500)
	});
	
	$(window).scroll(function() {
        if($(this).scrollTop()>200){
			$('.online').fadeIn();
		}else{
			$('.online').fadeOut();
		}
    });
	
	$('.online li.b_top').on('click',function(){
		$('body,html').animate({scrollTop:0},500)
	});

});
	

