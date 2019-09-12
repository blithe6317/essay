// 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块

/**
 *
 * @param {Array} array  需要处理的数组
 * @param {Number} size  每个数组区块的长度
 * @returns {Array} 返回一个包含拆分区块的新数组（相当于一个二维数组
 */
var chunk = (array, size = 1) => {
  const arr = [];
  var s = Math.ceil(array.length / size);
  for (let i = 0; i < s; i++) {
    arr.push(array.splice(0, array.length > size ? size : array.length));
  }
  return arr;
};

/**
 *
 * @param {Array} array  需要处理的数组
 * @param {Number} size  每个数组区块的长度
 * @returns {Array} 返回一个包含拆分区块的新数组（相当于一个二维数组
 */
var chunk1 = (array, size = 1) => {
  const arr = [];
  let item = [];
  for (let i = 0; i < array.length; i++) {
    item.push(array[i]);

    if (item.length === size) {
      arr.push(item);
      item = [];
    } else {
      if (i === array.length - 1) {
        arr.push(item);
      }
    }
  }
  return arr;
};

/**
 *
 * @param {Array} array  需要处理的数组
 * @param {Number} size  每个数组区块的长度
 * @returns {Array} 返回一个包含拆分区块的新数组（相当于一个二维数组
 */
var chunk2 = (array, size = 1) => {
  if (!array || size == 0) {
    return [];
  }
  const arr = new Array(Math.ceil(array.length / size));
  let index = 0;
  let restIndex = 0;

  while (index < array.length) {
    arr[restIndex++] = array.slice(index, (index += size));
  }
  return arr;
};
// www.baidu.com

// 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。

/**
 * @param {Array}  array  需要处理的数组
 */
var compact = array => {
  if (!array) {
    return [];
  }
  return array.filter(i => i);
};

var compact1 = array => {
  if (!array) {
    return [];
  }
  var arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      arr.push(array[i]);
    }
  }
  return arr;
};

var compact2 = array => {
  var index = -1,
    restIndex = 0,
    arr = [];
  while (++index < array.length) {
    if (array[index]) {
      arr[restIndex++] = array[index];
    }
  }
  return arr;
};

/**
 * 创建一个新数组，将array与任何数组 或 值连接在一起
 * @param {Array} array 被连接的数组
 *
 */
function concat() {
  var arr = [];
  for (var i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      for (let j = 0; j < arguments[i].length; j++) {
        arr.push(arguments[i][j]);
      }
    } else {
      arr.push(arguments[i]);
    }
  }
  return arr;
}
//   const arry = [
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0]
//   ];
const findSolutions = n => {
  return solutions;
};

function queen() {
  const n = 8;
  const solutions = [];

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (y === x && y === x + 1 && y === x - 1) {
        break;
      }
      if (solutions.length > 0) {
      } else {
        solutions.push({ x, y });
      }
      console.log("X:" + x + " Y:" + y);
    }
  }
}

var a = 100;
function test() {
  console.log("a:", a);
  console.log("b:", b);
  var a = 200;
  console.log("a:", a);
  var b = 10;
  console.log("b:", b);
  function b() {}
  b = 300;
  c = 200;
}
test();
console.log("c:", c);

var a;
function test() {
  // a undefined
  var a;
  var b;
  function b() {}
  console.log("a:", a);
  console.log("b:", b);
  a = 200;
  console.log("a:", a);
  b = 10;
  console.log("b:", b);
}
a = 100;
test();

define(["apps/_verificaUser","apps/show","apps/hide","apps/securityHide"],
function(j,y,P,x){
  var I;
  return{
    init:function(){
      var o=document.createElement("script");
      o.src="https://g.alicdn.com/AWSC/AWSC/awsc.js",
      document.head.appendChild(o),
      o.onload=function(){
        AWSC.use("uab",function(o,e){
          "loaded"===o&&(I=e)
        }),AWSC.use("um",function(o,e){"loaded"===o&&e.init({appName:"saf-aliyun-com"},function(o,e){"success"===o&&(document.cookie="aliyun_webUmidToken="+e.tn+";domain=.csdn.net;path=/")})})};var e=$(".direct_download"),t=$(".open_vip"),i=$(".js_download_btn"),n=$(".vip_download"),c=$(".album_download_btn"),a=$(".album_dl_btn"),s=$(".album_vip_btn"),r=($("#imgValidcode"),"/index.php/source/before_do_download/"+$(".dl_download").attr("data-id")),d=($(".jsNeedInte"),$(".jsRemainInte"),$("jsRemainC"),"/index.php/source/get_user_vip/"+$(".dl_download").attr("data-id")),l=$(".js_dl_vip"),p=$(".dl_download").attr("data-id"),u=$(".dl_download").attr("data-username"),_=$("#source_id").attr("value"),m=$("#to_username").attr("value"),h=$("#re_source_score").attr("value"),g=$("#base_url").attr("value");"undefined"==typeof dl_cdn_url||dl_cdn_url;if("undefined"==typeof noCaptcha);else{var w=new noCaptcha,f="FFFF00000000016C467E",v="other",b=[f,(new Date).getTime(),Math.random()].join(":"),k={renderTo:"#dom_id",appkey:f,scene:v,token:b,callback:function(o){console.log(o.csessionid),console.log(o.sig),console.log(b),document.getElementById("csessionid").value=o.csessionid,document.getElementById("sig").value=o.sig,document.getElementById("token").value=b,document.getElementById("scene").value=v}};w.init(k)}$(".pop_close,.dl_btn,.dl_btn_red,.album_dl_btn,.album_vip_btn").on("click",function(o){P.hide(".dl_popup"),$(".report_img").each(function(){$(this).remove()}),o.stopPropagation()}),t.each(function(){$(this).on("click",function(o){$(this).attr("target","_blank")})}),e.each(function(){$(this).on("click",function(o){var s="";window.SMSdk&&SMSdk.getDeviceId&&(s=encodeURIComponent(encodeURIComponent(SMSdk.getDeviceId()))),$("#source_id").attr("value",p),$("#to_username").attr("value",u),$.ajax({type:"get",url:r,async:!1,dataType:"jsonp",jsonpcallback:"jsonpcallback",success:function(o){if(o.actionUrl=o.actionUrl+"/"+s,2011==o.succ)window.csdn.loginBox.show();else if(2006==o.succ){var e=$("#noVipNoEnoughPNoC");y.show("#noVipNoEnoughPNoC"),$("#noVipNoEnoughPNoC .resource_title h3").text(o.title),e.find(".jsNeedInte").html(o.source_score),e.find(".jsRemainInte").html(o.user_score),e.find(".jsRemainC").html(o.c_score),e.find(".noC span").html(o.msg),e.find(".resource_img img").attr("src",o.image),_hmt.push(["_setAutoPageview",!1]),_hmt.push(["_trackPageview","/down_click_nocredit/"+m+"/"+_]);var t='<img class="report_img" src='+reportUrl+"report.png?type=down_click_nocredit&username="+m+"&sourceId="+_+"&sourcescore="+h+"&v="+Math.random()+'"/>';$("#noVipNoEnoughPNoC").append(t)}else if(2007==o.succ){var n=$("#noVipNoEnoughPHasC");y.show("#noVipNoEnoughPHasC"),$("#noVipNoEnoughPHasC .resource_title h3").text(o.title),n.find(".jsNeedInte").html(o.source_score),n.find(".jsRemainInte").html(o.user_score),n.find(".jsRemainC").html(o.c_score),n.find(".noC .cWrap").html(o.reduce_c_score),n.find(".resource_img img").attr("src",o.image),n.find(".js_download_btn").attr("data-href",o.actionUrl),_hmt.push(["_setAutoPageview",!1]),_hmt.push(["_trackPageview","/down_click_nocredit/"+m+"/"+_]);t='<img class="report_img" src='+reportUrl+"report.png?type=down_click_nocredit&username="+m+"&sourceId="+_+"&sourcescore="+h+"&v="+Math.random()+'"/>';$("#noVipNoEnoughPHasC").append(t)}else if(2001==o.succ)window.location=o.actionUrl,P.hide(".dl_popup");else if(2004==o.succ){y.show("#noVipZeroP");var c=$("#noVipZeroP");$("#noVipZeroP .resource_dl_btn").find("a").hide(),$("#noVipZeroP #download_code").val(""),$("#noVipZeroP .download_code_err").html(""),$("#noVipZeroP .resource_title h3").text(o.title),c.find(".jsNeedInte").html(o.source_score),c.find(".jsRemainInte").html(o.user_score),c.find(".jsRemainC").html(o.c_score),$("#noVipZeroP").find(".resource_img img").attr("src",o.image),$("#noVipZeroP").find(".js_download_btn").attr("data-href",o.actionUrl)}else if(2005==o.succ)y.show("#vipIgnoreP"),$("#vipIgnoreP .resource_title h3").text(o.title),i.attr("data-href",o.actionUrl),$("#vip_btn").attr("href",g+"index.php/vip_download/download_client/"+$(".dl_download").attr("data-id"));else if(2022==o.succ)y.show("#download_times"),$("#show_dw_time_ip").html(o.msg);else if(2002==o.succ){var a=$("#noVipEnoughP");y.show("#noVipEnoughP"),$("#noVipEnoughP .resource_title h3").text(o.title),a.find(".jsNeedInte").html(o.source_score),a.find(".jsRemainInte").html(o.user_score),a.find(".jsRemainC").html(o.c_score),a.find(".resource_img img").attr("src",o.image),a.find(".js_download_btn").attr("data-href",o.actionUrl),_hmt.push(["_setAutoPageview",!1]),_hmt.push(["_trackPageview","/down_click_credit/"+m+"/"+_]);t='<img class="report_img" src='+reportUrl+"report.png?type=down_click_credit&username="+m+"&sourceId="+_+"&sourcescore="+h+"&v="+Math.random()+'"/>';$("#noVipEnoughP").append(t)}else if(2013==o.succ)y.show("#dl_lock"),$("#dl_lock").find(".sec_pop_t").html(o.msg);else if(2003==o.succ){y.show("#download"),$("#download .album_tips").text(o.msg),$("#download").find(".js_download_btn").attr("data-href",o.actionUrl),_hmt.push(["_setAutoPageview",!1]),_hmt.push(["_trackPageview","/down_click/already/"+m+"/"+_]);t='<img class="report_img" src='+reportUrl+"report.png?type=down_click_already&username="+m+"&sourceId="+_+"&sourcescore="+h+"&v="+Math.random()+'"/>';$("#download").append(t)}else 1e3==o.succ&&(y.show("#dl_lock"),$("#dl_lock .sec_pop_t").html('您已经下载过该资源，还没有评论过，评论过您的使用感受后可再次下载哦~<a class="goComment" href="#comment" target="_blank"> 去评论</a>。'))},error:function(o){console.log(o)}})})}),i.on("click",function(o){var e=I.getUA();document.cookie="aliyun_UAToken="+e+";domain=.csdn.net;path=/";var t=$(this).attr("data-href");$.ajax({type:"get",url:t,async:!1,dataType:"jsonp",jsonpcallback:"jsonpcallback",success:function(o){2031==o.succ?(y.show("#vip_album"),$("#vip_album .album_tips").text(o.msg)):2e3==o.succ?(window.location=o.msg,P.hide(".dl_popup")):2021==o.succ?($("#imgValidcode_dl").click(),y.show("#dl_security_detail")):2022==o.succ?(y.show("#download_times"),$("#show_dw_time_ip").html(o.msg)):2013==o.succ?(y.show("#dl_lock"),$("#dl_lock").find(".sec_pop_t").html(o.msg)):3001==o.succ&&csdn.smsBox.sms({initRun:function(){return!0},toSuccess:function(o){console.log(o),csdn.smsBox.close()},toFail:function(o){console.log(o),console.log("回调失败测试一")}})},error:function(o){console.log(o)}}),_hmt.push(["_setAutoPageview",!1]),_hmt.push(["_trackPageview","/do_download/"+m+"/"+_]);var n='<img class="report_img" src='+reportUrl+"report.png?type=do_download&username="+m+"&sourceId="+_+"&sourcescore="+h+"&v="+Math.random()+'"/>';$("#download").append(n),o.stopPropagation()}),$("#detail_submit").on("click",function(o){var e="/index.php/source/do_download/"+$("#source_id").attr("value")+"/"+$("#to_username").attr("value")+"/to_validate";$("#download_form_checkali").ajaxSubmit({url:e,type:"post",dataType:"jsonp",jsonpcallback:"jsonpcallback",success:function(o){2e3==o.succ?(window.location=o.msg,x.securityHide(),P.hide(".dl_popup")):1012==o.succ?($("#dlMask").show(),$("#dl_security_detail").show()):1031==o.succ?(P.hide("#dl_security"),y.show("#dl_noEnoughJiFen")):2022==o.succ&&(y.show("#download_times"),$("#show_dw_time_ip").html(o.msg)),w.init(k)},error:function(o){console.log(o)}}),o.stopPropagation()}),$("#coin_exchange").click(function(){xhr=$("#c_excfrom").ajaxSubmit({dataType:"json",success:function(o){4==o.succ?(P.hide(".dl_popup"),y.show("#exchange_succ"),$("#user_score").html(o.curr_score),$("#d_score").val(""),$("#c_score").html("0")):2==o.succ?$("#tips_wrap").show():1==o.succ?($("#tips_wrap").show(),$("#tips_wrap .tips").text(o.errmsg)):3==o.succ?($("#tips_wrap").show(),$("#tips_wrap .tips").text(o.errmsg)):-4==o.succ&&($("#tips_wrap").show(),$("#tips_wrap .tips").text(o.errmsg))},error:function(){console.log("ajax error")}})}),$("#d_score").on("keyup",function(){var o=$(this).val();0!=o%2||0==o?($("#tips_wrap").show(),$("#tips_wrap .tips").text("请输入2的倍数！")):$("#c_score").html(o/2)}),n.each(function(){$(this).on("click",function(o){if(window.SMSdk&&SMSdk.getDeviceId){var e=encodeURIComponent(encodeURIComponent(SMSdk.getDeviceId())),t=$("#vip_btn").attr("href");$("#vip_btn").attr("href",t+"/"+e)}var n=I.getUA();document.cookie="aliyun_UAToken="+n+";domain=.csdn.net;path=/",$.ajax({type:"get",url:d,async:!1,dataType:"jsonp",jsonpcallback:"jsonpcallback",success:function(o){3012==o.succ?(y.show("#vip_album"),$("#vip_album .album_tips").text(o.msg)):3013==o.succ?(y.show("#vip_album"),$("#vip_album .album_tips").text(o.msg)):3014==o.succ?y.show("#noVip_dl"):3015==o.succ?(y.show("#vip_album"),$("#vip_album .album_tips").text(o.msg)):3e3==o.succ?l.attr("data-href",o.actionUrl):3001==o.succ&&csdn.smsBox.sms({initRun:function(){return!0},toSuccess:function(o){console.log(o),csdn.smsBox.close()},toFail:function(o){console.log(o)}})},error:function(o){console.log(o)}}),_hmt.push(["_setAutoPageview",!1]),_hmt.push(["_trackPageview","/down_click_vip/"+m+"/"+_]);var c='<img class="report_img" src='+reportUrl+"report.png?type=down_click_vip&username="+m+"&sourceId="+_+"&sourcescore="+h+"&v="+Math.random()+'"/>';$("#noVipEnoughP").append(c),o.stopPropagation()})}),l.on("click",function(o){window.location=l.attr("data-href"),o.stopPropagation()}),$("#vip_btn").on("click",function(){_hmt.push(["_setAutoPageview",!1]),_hmt.push(["_trackPageview","/do_download_vip/"+m+"/"+_]);var o='<img class="report_img" src='+reportUrl+"report.png?type=do_download_vip&username="+m+"&sourceId="+_+"&sourcescore="+h+"&v="+Math.random()+'"/>';$("#vipIgnoreP").append(o)}),c.on("click",function(o){if(j._verificaUser()){y.show("#album_dl");var t=$(this).attr("data-id"),e="/index.php/album/do_download_album/"+t;a.on("click",function(o){$.ajax({type:"get",url:e,async:!1,dataType:"jsonp",jsonpcallback:"jsonpcallback",success:function(o){1e3==o.succ?(window.location=o.msg,P.hide(".dl_popup")):1011==o.succ?y.show("#dl_security"):1021==o.succ&&y.show("#dl_lock")},error:function(o){console.log(o)}}),o.stopPropagation()}),s.on("click",function(o){var e="//download.csdn.net/index.php/album/do_vip_download_album/"+t;$.ajax({type:"get",url:e,async:!1,dataType:"jsonp",jsonpcallback:"jsonpcallback",success:function(o){1e3==o.succ?(window.location=o.msg,P.hide(".dl_popup")):1043==o.succ||1044==o.succ?(y.show("#vip_album"),$("#vip_album .album_renewal").show(),$("#vip_album .album_tips").text(o.msg)):1045==o.succ?y.show("#noVip_dl"):1041!=o.succ&&1042!=o.succ||(y.show("#vip_album"),$("#vip_album .album_renewal").hide(),$("#vip_album .album_tips").text(o.msg))},error:function(o){console.log(o)}}),o.stopPropagation()})}o.stopPropagation()}),$('input[name="send_validate_code"]').on("click",function(o){var e=$('input[name="validate_code"]').val(),t="/index.php/album/do_download_album/"+$(".album_download_btn").attr("data-id");$("#download_album_form").ajaxSubmit({url:t+"?vdcode="+e,type:"get",dataType:"jsonp",jsonpcallback:"jsonpcallback",success:function(o){1e3==o.succ?(window.location=o.msg,x.securityHide(),P.hide(".dl_popup")):1012==o.succ?$("#pop_validate_code_error").show():1031==o.succ&&(P.hide("#dl_security"),y.show("#dl_noEnoughJiFen"))},error:function(o){console.log(o)}}),o.stopPropagation()}),$('input[name="validate_code_detail"]').on("focus",function(){$("#pop_validate_code_error_dl").hide()}),$('input[name="validate_code"]').on("focus",function(){$("#pop_validate_code_error").hide()}),$("#imgValidcode").on("click",function(o){$(this).attr("src","/index.php/rest/tools/validcode/album_ip_validate/1"+Math.random()),o.stopPropagation()}),$("#imgValidcode_dl").on("click",function(o){$(this).attr("src","/index.php/rest/tools/validcode/source_ip_validate/1"+Math.random()),o.stopPropagation()}),$(".respond_btn").on("click",function(o){$(this).parents(".rightLi").children(".respond_box").show(),o.stopPropagation()}),$(".cancel_res").on("click",function(o){$(this).parents(".res_b").siblings(".res_area").val(""),$(this).parents(".respond_box").hide(),o.stopPropagation()}),function(){var o="";window.SMSdk&&SMSdk.getDeviceId&&(o=encodeURIComponent(encodeURIComponent(SMSdk.getDeviceId())));var e="/index.php/source/download_check?deviceId="+o;$.ajax({type:"get",url:e,async:!1,dataType:"json",success:function(o){0==o.status&&$(".direct_download").each(function(){$(this).removeAttr("href"),$(this).addClass("grey_dl_btn").off("click")})},error:function(o){console.log(o)}})}()}}});