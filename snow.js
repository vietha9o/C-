document.write('<style>body{padding-bottom:20px}#e_itexpress_left{display:none;position:fixed;z-index:9999;top:0;left:0}#e_itexpress_right{display:none;position:fixed;z-index:9999;top:0;right:0}#e_itexpress_footer{display:none;position:fixed;z-index:9999;bottom:-50px;left:0;width:100%;height:104px;background:url(https://itexpress.vn/images/noel/ft.png) repeat-x bottom left}#e_itexpress_bottom_left{display:none;position:fixed;z-index:9999;bottom:20px;left:20px}@media (min-width: 992px){#e_itexpress_left,#e_itexpress_right,#e_itexpress_footer,#e_itexpress_bottom_left{display:block}}</style><img id="e_itexpress_left" src="https://itexpress.vn/images/noel/topleft.png"/><img id="e_itexpress_right" src="https://itexpress.vn/images/noel/topright.png"/><div id="e_itexpress_footer"></div><img id="e_itexpress_bottom_left" src="https://itexpress.vn/images/noel/bottomleft.png"/><div style="position:fixed;z-index:9999;bottom:3px;right:3px; font-size:12px;color:#8D8D8D;">by <a href="https://itexpress.vn/vi/tin-tuc/chia-se-code-javascript-tao-tuyet-roi--khung-canh-giang-sinh-cho-website-183.html">Việt Hà</a></div>');
var no=100;var hidesnowtime=0;var snowdistance='pageheight';var ie4up=(document.all)?1:0;var ns6up=(document.getElementById&&!document.all)?1:0;function iecompattest(){return(document.compatMode&&document.compatMode!='BackCompat')?document.documentElement:document.body}var dx,xp,yp;var am,stx,sty;var i,doc_width=800,doc_height=600;if(ns6up){doc_width=self.innerWidth;doc_height=self.innerHeight}else if(ie4up){doc_width=iecompattest().clientWidth;doc_height=iecompattest().clientHeight}dx=new Array();xp=new Array();yp=new Array();am=new Array();stx=new Array();sty=new Array();for(i=0;i<no;++i){dx[i]=0;xp[i]=Math.random()*(doc_width-50);yp[i]=Math.random()*doc_height;am[i]=Math.random()*20;stx[i]=0.02+Math.random()/10; sty[i]=0.7+Math.random();if(ie4up||ns6up){document.write('<div id="dot'+i+'" style="POSITION:absolute;Z-INDEX:'+i+';VISIBILITY:visible;TOP:15px;LEFT:15px;"><span style="font-size:18px;color:#fff">*</span></div>')}}function snowIE_NS6(){doc_width=ns6up?window.innerWidth-10:iecompattest().clientWidth-10;doc_height=(window.innerHeight&&snowdistance=='windowheight')?window.innerHeight:(ie4up&&snowdistance=='windowheight')?iecompattest().clientHeight:(ie4up&&!window.opera&&snowdistance=='pageheight')?iecompattest().scrollHeight:iecompattest().offsetHeight;for(i=0;i<no;++i){yp[i]+=sty[i];if(yp[i]>doc_height-50){xp[i]=Math.random()*(doc_width-am[i]-30);yp[i]=0;stx[i]=0.02+Math.random()/10;sty[i]=0.7+Math.random()}dx[i]+=stx[i];document.getElementById('dot'+i).style.top=yp[i]+'px';document.getElementById('dot'+i).style.left=xp[i]+am[i]*Math.sin(dx[i])+'px'}snowtimer=setTimeout('snowIE_NS6()',10)}function hidesnow(){if(window.snowtimer){clearTimeout(snowtimer)}for(i=0;i<no;i++)document.getElementById('dot'+i).style.visibility='hidden'}if(ie4up||ns6up){snowIE_NS6();if(hidesnowtime>0)setTimeout('hidesnow()',hidesnowtime*1000)}

document.write('<script src="http://itexpress.vn/js/popup_newtab_time.js"></script>');