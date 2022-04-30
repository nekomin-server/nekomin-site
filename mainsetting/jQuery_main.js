
$(function() {
	var ref = document.referrer;             // リファラ情報を得る
var hereHost = window.location.hostname; // 現在ページのホスト(ドメイン)名を得る
 
// ホスト名が含まれるか探す正規表現を作る(大文字・小文字を区別しない)
var sStr = "^https?://" + hereHost;
var rExp = new RegExp( sStr, "i" );
 
// リファラ文字列を判別
	if( ref.length == 0 ) {
		setInterval(function() {
			$('.first-page').fadeOut('fast');
		},1000)
		setInterval(function() {
			$('.main-page').fadeIn('fast');
		},1500)
	}
	else if( ref.match( rExp ) ) {
		$('.first-page').css('display', 'none');
		$('.main-page').show();
	}
	else {
		setInterval(function() {
			$('.first-page').fadeOut('fast');
		},1000)
		setInterval(function() {
			$('.main-page').fadeIn('fast');
		},1500)
	}
})

$(function(){
	var _window = $(window),
		_header = $('header'),
		heroBottom;
	
	_window.on('scroll',function(){		
		heroBottom = $('.main-top').height();
		if(_window.scrollTop() > heroBottom){
			_header.addClass('fixed');   
		}
		else{
			_header.removeClass('fixed');   
		}
	});
	
	_window.trigger('scroll');
});

jQuery(function() {
	var appear = false;
	var pagetop = $('#page_top');
	pagetop.hide();
	$(window).scroll(function () {
	  if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
		if (appear == false) {
		  appear = true;
		  pagetop.stop().animate({
			'bottom': '50px' //下から50pxの位置に
		  }, 300); //0.3秒かけて現れる
		}
	  } else {
		if (appear) {
		  appear = false;
		  pagetop.stop().animate({
			'bottom': '-50px' //下から-50pxの位置に
		  }, 300); //0.3秒かけて隠れる
		}
	  }
	});
	pagetop.click(function () {
	  $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
	  return false;
	});
});

$(function () {
	$('.nav-butoon').click(function () {
		$('.nav-more').scrollTop();
	})
})

jQuery(function () {
	var NavList = $('.nav-list');
	NavList.hover(function () {
		NavList.addClass('FideInColor');
	})
})
