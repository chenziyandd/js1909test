"use strict";require(["config"],function(){require(["jquery"],function(){var g,j;$("#Header").load("indexheader.html"),$("#loginFooter").load("footer.html"),g=$(".goodsdetailsMain"),j=location.search.split("=")[1],$.ajax({type:"get",url:"../php/details.php",dataType:"json",data:{productid:j}}).done(function(t){var s="",e=[],c=0;$.each(t,function(t,a){c=a.pamount;var n=Number(a.pprice).toFixed(2);e=a.purls.split(","),$("title").html("寺库网-"+a.ptitle),s='<div class="goodsdetailsType">\n            <span>'+a.ptype+"</span>&gt;<span>"+a.pcategory+"</span>&gt;<span>"+a.ptitle+'</span>\n            </div>\n            <article>\n            <div id="fdj"></div>\n            <div class="goodsPic">\n                    <ul class="thumbnail">\n                      \n                    </ul>\n                    <div class="normalPic">\n                        <img src='+a.ppic+' alt="">\n                        <div class="picmask"></div>\n                    </div>\n                </div>\n                <div class="goodsInfo">\n                    <p class="goodsTitle">'+a.pdetail+'</p>\n                    <hr>\n                    <p class="goodsPrice">一口价&nbsp;&nbsp;&nbsp;￥<span>'+n+'</span></p>\n                    <hr>\n                    <div class="goodsCSA">\n                        <span>颜色:'+a.pcolor+"</span>\n                        <br>\n                        <span>尺寸:"+a.psize+'</span>\n                        <br>\n                        <span>购买数量:\n                        <div class="countNum">\n                            <div class="minus">-</div>\n                            <input class="shownum" type="text" value="1">\n                            <div class="add">+</div>\n                            </div>\n                            库存'+c+'件\n                        </span>\n                    </div>\n                    <a href="javascript:;" id="jrgwc">加入购物车</a>\n                </div>\n            </article>'}),g.html(s);for(var a=$(".thumbnail"),n="",i=0;i<e.length;i++)n+='<li><a href="javascript:;"><img src='+e[i]+' alt=""></a></li>';a.html(n);var o=$(".thumbnail li"),l=$(".normalPic"),r=$("#fdj"),p=$(".minus"),d=$(".shownum"),f=$(".add"),u=$("#jrgwc"),h=$("#cartsuccess"),v=$("#cartsuccess .close"),m=$("#detailjxgw");o.on("click",function(){l.html("<img src="+e[$(this).index()]+' alt=""><div class="picmask"></div>')}),l.on("mouseover",function(){var s=$(".normalPic .picmask");r.show(),s.show(),r.html(l.html());var e=$("#fdj img");$(this).on("mousemove",function(t){var a=(t=t||window.event).clientX-l[0].offsetLeft-g[0].offsetLeft-s[0].offsetWidth/2,n=t.clientY-l[0].offsetTop-g[0].offsetTop+document.documentElement.scrollTop-s[0].offsetHeight/2;a<=0?a=0:a>=l[0].offsetWidth-s[0].offsetWidth&&(a=l[0].offsetWidth-s[0].offsetWidth),n<=0?n=0:n>=l[0].offsetHeight-s[0].offsetHeight&&(n=l[0].offsetHeight-s[0].offsetHeight),s.css("left",a),s.css("top",n),e.css("left",2*-a),e.css("top",2*-n)})}),l.on("mouseout",function(){var t=$(".normalPic .picmask");r.hide(),t.hide()}),d.on("blur",function(){var t=parseInt(d.val());t<1?t=1:c<t&&(t=c),d.val(t)}),f.on("click",function(){var t=parseInt(d.val());t<c?t++:t=c,d.val(t)}),p.on("click",function(){var t=parseInt(d.val());1<t?t--:t=1,d.val(t)}),u.on("click",function(){localStorage.getItem("adminname")?(h.show(),$.ajax({type:"get",url:"../php/getcart.php",dataType:"json",data:{userid:localStorage.getItem("adminname")}}).done(function(t){var a="";if(t[0].usercart){var s=t[0].usercart.split("-"),e=[],i=[];$.each(s,function(t,a){var n=s[t].split(",");e.push(n[0]),i.push(n[1])});for(var n=0;n<e.length;n++){if(e[n]==j){if(parseInt(i[n])+parseInt(d.val())<=c){i[n]=parseInt(i[n])+parseInt(d.val());break}i[n]=c;break}if(n==e.length-1){e.push(j),i.push(parseInt(d.val()));break}}for(var o=[],l=0;l<e.length;l++)o.push(e[l]+","+i[l]);a=o.join("-")}else a=j+","+c;$.ajax({type:"post",url:"../php/sendcart.php",dataType:"json",data:{userid:localStorage.getItem("adminname"),usercart:a}})})):carterror.style.display="block"}),v.on("click",function(){h.hide()}),m.on("click",function(){h.hide()})})})});