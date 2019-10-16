"use strict";var _createClass=function(){function e(t,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}require(["config"],function(){require(["jquery"],function(){require(["lazyload"],function(){var t=(_createClass(i,[{key:"init",value:function(){this.videoPlay(),this.videoPause(),this.stairsInit(),this.stairsRun(),this.render()}},{key:"videoPlay",value:function(){var i=this;this.videobtn.on("click",function(t){i.video[0].play(),$(this).hide(),t.stopPropagation()})}},{key:"videoPause",value:function(){var t=this;this.bannerVideo.on("click",function(){t.video[0].pause(),t.videobtn.show()})}},{key:"stairsInit",value:function(){180<=$(window).scrollTop()?this.stairsBox.show():this.stairsBox.hide()}},{key:"stairsRun",value:function(){var e=this;$(window).on("scroll",function(){var n=$(this).scrollTop();180<=n?e.stairsBox.show():e.stairsBox.hide(),e.stairsbtn.removeClass("active"),e.floor.each(function(t,i){if($(this).offset().top>=n-200)return e.stairsbtn.eq(t).addClass("active"),!1})}),this.stairsbtn.on("click",function(){$(this).addClass("active").siblings("li").removeClass("active"),$("html,body").stop(!0).animate({scrollTop:e.floor.eq($(this).index()).offset().top-10})}),this.bttop.on("click",function(){$("html,body").stop(!0).animate({scrollTop:0})})}},{key:"render",value:function(){var r=this;$.ajax({type:"get",url:"../php/editorpick.php",dataType:"json"}).done(function(t){var e="",s=1;$.each(t,function(t,i){var n=Number(i.pprice).toFixed(2);s%5==1&&(e+='<ul class="productList">'),e+=' <li>\n                            <a href="details.html?pid='+i.pid+'">\n                                <div class="product-img">\n                                    <img data-original='+i.ppic+' alt="" width="232" height="232" class="lazy">\n                                    <div class="product-img-mask"></div>\n                                </div>\n                                <div class="product-details">\n                                    <p class="product-name">'+i.ptitle+'</p>\n                                    <p class="product-desc">'+i.pdetail+'</p>\n                                    <div class="line"></div>\n                                    <p class="product-price">￥'+n+"</p>\n                                </div>\n                            </a>\n                        </li>",s%5==0&&(e+="</ul>"),s++});var i=Math.ceil(s/5)+2;r.productList.css("width",1200*i),r.productList.html(e);var n=$(".productList").clone(),o=n[0],a=n[n.length-1];r.productList.append(o),r.productList.prepend(a),r.lunbo(i),$(function(){$("img.lazy").lazyload({effect:"fadeIn"})})})}},{key:"lunbo",value:function(i){var n=this,e=1,s=!0;this.nextbtn.on("click",function(){var t=parseInt(n.productList.css("left"));s&&(s=!1,i-2<=e?(e=1,t-=1200,n.productList.stop(!0).animate({left:t},function(){n.productList.css("left",-1200),s=!0})):(t-=1200,n.productList.stop(!0).animate({left:t},function(){s=!0}),e++))}),this.prevbtn.on("click",function(){var t=parseInt(n.productList.css("left"));s&&(s=!1,e<=1?(e=i-2,t+=1200,n.productList.stop(!0).animate({left:t},function(){var t=1200*-(i-2);n.productList.css("left",t),s=!0})):(t+=1200,n.productList.stop(!0).animate({left:t},function(){s=!0}),e--))})}}]),i);function i(){_classCallCheck(this,i),this.bannerVideo=$("#banner .bannerMain .banner-video"),this.videobtn=$("#banner .bannerMain .banner-video .video-play"),this.video=$("#banner .bannerMain .banner-video video"),this.stairsBox=$("#stairs"),this.stairsbtn=$("#stairs ul li").not(".bttop"),this.floor=$("section"),this.bttop=$("#stairs ul .bttop"),this.productList=$(".editorPickList"),this.nextbtn=$(".next"),this.prevbtn=$(".prev")}$("#Header").load("indexheader.html"),$("#loginFooter").load("footer.html"),(new t).init()})})});