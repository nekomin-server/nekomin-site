$(function() {
	var ref = document.referrer;             // リファラ情報を得る
var hereHost = window.location.hostname; // 現在ページのホスト(ドメイン)名を得る
 
// ホスト名が含まれるか探す正規表現を作る(大文字・小文字を区別しない)
var sStr = "^https?://" + hereHost;
var rExp = new RegExp( sStr, "i" );
 
// リファラ文字列を判別
	if( ref.length == 0 ) {
		setInterval(function() {
			$('.loading-page').fadeOut('fast');
		},1000)
		setInterval(function() {
			$('.main-page').fadeIn('fast');
		},1500)
	}
	else if( ref.match( rExp ) ) {
		$('.loading-page').css('display', 'none');
		$('.main-page').show();
	}
	else {
		setInterval(function() {
			$('.loading-page').fadeOut('fast');
		},1000)
		setInterval(function() {
			$('.main-page').fadeIn('fast');
		},1500)
	}
})