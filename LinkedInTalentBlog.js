
document.getElementById("td.rssdog").style.fontFamily = "Arial";
document.getElementById("td.rssdog").style.fontSize = "larger";
document.getElementById("td.rssdog").style.color = "black";
document.getElementById("a.rssdog:link").style.color = "blue";
document.getElementById("div.rssdog").style.marginTop = "10px";
document.getElementById("div.rssdog").style.marginBottom = "20px";


https://www.rssdog.com/index.php?url=http%3A%2F%2Ffeeds.feedblitz.com%2Ftalentblog%26x%3D1&amp;mode=javascript&amp;showonly=&amp;maxitems=5&amp;showdescs=1&amp;desctrim=0&amp;descmax=0&amp;tabwidth=100%25&amp;linktarget=_blank&amp;textsize=medium&amp;bordercol=%23d4d0c8&amp;headbgcol=%23999999&amp;headtxtcol=%23ffffff&amp;titlebgcol=%23f1eded&amp;titletxtcol=%23000000&amp;itembgcol=%23ffffff&amp;itemtxtcol=%23000000&amp;ctl=0

(function(){
	var elements = document.getElementsByTagName( 'td.rssdog' );
	element = elements[ 0 ];

	// Specific old IE
	if ( document.all ) {
		element.style.setAttribute( 'cssText', 'color: blue !important' );

	// Modern browser
	} else {
		element.setAttribute( 'style', 'color: blue !important' );
	}
})();

