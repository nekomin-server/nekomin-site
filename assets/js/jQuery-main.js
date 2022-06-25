$(function() {
	var ref = document.referrer;             // リファラ情報を得る
	var hereHost = window.location.hostname; // 現在ページのホスト(ドメイン)名を得る
	 
	// ホスト名が含まれるか探す正規表現を作る(大文字・小文字を区別しない)
	var sStr = "^https?://" + hereHost;
	var rExp = new RegExp( sStr, "i" );
	 
	// リファラ文字列を判別
	if( ref.length == 0 ) {
		// リファラなしの場合
		setInterval(function() {
			$('.loading-page').fadeOut('fast');
		},1000)
		setInterval(function() {
			$('#main-page').fadeIn('fast').css('display', 'grid');
		},1500)
	}
	else if( ref.match( rExp ) ) {
		$('.loading-page').css('display', 'none');
		$('#main-page').show().css('display', 'grid');
	}
	else {
		// マッチしない場合＝アクセス元がサイト外の場合
		setInterval(function() {
			$('.loading-page').fadeOut('fast');
		},1000)
		setInterval(function() {
			$('#main-page').fadeIn('fast').css('display', 'grid');
		},1500)
	}
})

$(function(){
	if(window.matchMedia("(max-width: 768px)").matches){
		$('.header-nav').css('display', 'none');
		$('.hamburger').show();
		$('main').css('grid-template-columns','100%');
		$('.main-card').css('margin-left', '15px');
		$('aside').css('display', 'none');
		let visButton = false;
	}else{
		$('.header-nav').show();
		$('.hamburger').css('display','none');
		$('aside').show(0);
	}
})

jQuery(function() {
    var pagetop = $('#page_top');   
    pagetop.hide();
	if (visButton = !false){
		$(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
	}
    
});

$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        } 
      
    });
});
//メニュー内を閉じておく
$(function() {
    $('.globalMenuSp a[href]').click(function() {
        $('.globalMenuSp').removeClass('active');
       $('.hamburger').removeClass('active');

    });
  });