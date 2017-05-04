!function(h){h.fn.validation=function(m,l){if(!this.length){if(l&&l.debug&&window.console){console.warn("Nothing selected, can't validate, returning nothing.")}return}if(typeof m==="object"){l=m;m=null}return this.each(function(){k=h.extend({},h.fn.validation.defaults,l);k.callback=m;h(this).attr("novalidate","novalidate");a=f(this);b(this)})};h.fn.valid=function(p,o,l){if(c){return false}h("#validerrmsg").remove();var q;var n;var m;if(typeof p==="object"){q=h(p);if(typeof o==="string"){n=o;m=l}else{m=o}}else{if(typeof p==="string"){n=p;m=l}else{m=p}}c=true;var r=false;h("input, textarea",this).each(function(){var s=h(this),u=s.parents(".form-group"),t=(s.attr("check-type")==undefined)?null:s.attr("check-type").split(" ");if(!u.hasClass("has-success")&&t!=null&&t.length>0){if(!d(this,t)){if(e==false){scrollTo(0,s[0].offsetTop-50);e=true}r=true}}});e=false;c=false;if(m){m(r)}return !r};h.fn.validation.defaults={validRules:[{name:"required",validate:function(l){return(h.trim(l)=="")},defaultMsg:"请输入内容"},{name:"number",validate:function(l){return(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(l))},defaultMsg:"请输入数字"},{name:"mail",validate:function(l){return(!/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(l))},defaultMsg:"请输入邮箱地址。"},{name:"char",validate:function(l){return(!/^[a-z\_\-A-Z]*$/.test(l))},defaultMsg:"请输入英文字符"},{name:"chinese",validate:function(l){return(!/^[\\S\\s]*[\u4e00-\u9fff]+[\\S\\s]*$/.test(l))},defaultMsg:"请输入汉字"},{name:"url",validate:function(l){return(!/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(l))},defaultMsg:"请输入有效网址"},{name:"date",validate:function(l){return(/Invalid|NaN/.test(new Date(l).toString()))},defaultMsg:"日期格式XXXX-XX-XX"},{name:"mobile",validate:function(l){return(!/^0?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(l))},defaultMsg:"请输入正确的手机号码"}],reqmark:true,callback:null,icon:false};var c=false,g=false,e=false,a=0,k={};function f(l){if(h(l).hasClass("form-inline")){return 1}else{if(h(l).hasClass("form-horizontal")){return 2}else{return 0}}}var d=function(n,z){var o=h(n),B=false,q="";var w=(o.attr("minlength")?o.attr("minlength"):null);var y=(o.attr("range")?o.attr("range"):null);var s;for(i=0;i<z.length;i++){var v=true,D=z[i];s=(o.attr(D+"-message")==undefined)?null:o.attr(D+"-message");if(D.substr(0,1)=="!"){v=false;D=D.substr(1,D.length-1)}var u=k.validRules;for(j=0;j<u.length;j++){var t=u[j];if(D==t.name){var A;if(o.attr("type")!=null&&o.attr("type")=="checkbox"){A=o.is(":checked")?"true":""}else{A=o.val()}if(t.validate.call(n,A)==v){B=true;if(o.attr("type")!=null&&o.attr("type").toLowerCase()=="file"){q=(s==null)?"请选择文件。":s}else{q=(s==null)?t.defaultMsg:s}break}}}if(B){break}}if(w&&!B){B=o.val().length<w;if(B&&(s==null||q=="")){q="输入长度大于等于"+w}}if(h.inArray("number",z)>=0&&y&&!B){var p=y.split("~");if(p.length==2){B=parseFloat(o.val())<parseFloat(p[0])||parseFloat(o.val())>parseFloat(p[1]);if(B&&(s==null||q=="")){q="输入值在［"+p[0]+"~"+p[1]+"]之间。"}}else{var p=y.split(",");if(p.length>0){B=h.inArray(o.val(),p)<0;if(B&&(s==null||q=="")){q="输入值为"+y+"的其中一个。"}}}}if(!B&&k.callback){var E={msg:"",err:B};var F=h.ajaxSettings.async;h.ajaxSetup({async:false});k.callback(n,E);B=E.err;if(B&&(s==null||q=="")){q=E.msg}else{if(E.msg!=""){q=E.msg}}h.ajaxSetup({async:F})}var C=o.parents(".form-group");C.removeClass("has-error has-success");C.addClass(B==false?"has-success":"has-error");if(k.icon===true){C.find(".form-control-feedback").remove();C.addClass("has-feedback")}var m=o.parents("form");if(m){var r=f(m);var l=B==false?"glyphicon-ok":"glyphicon-remove";if(r==0){C.find("#valierr").remove();if(o.parent().hasClass("input-group")){o.parent().after('<span class="help-block" id="valierr">'+q+"</span>")}else{o.after('<span class="help-block" id="valierr">'+q+"</span>")}if(k.icon===true){if(o.find("option").length==0){o.after('<span class="glyphicon '+l+' form-control-feedback" aria-hidden="true"></span>')}else{o.after('<span class="glyphicon '+l+' form-control-feedback" aria-hidden="true" style="right: 25px;"></span>')}}}else{if(r==1){if(k.icon===true){if(o.find("option").length==0){o.after('<span class="glyphicon '+l+' form-control-feedback" aria-hidden="true"></span>')}else{o.after('<span class="glyphicon '+l+' form-control-feedback" aria-hidden="true" style="right: 25px;"></span>')}}}else{if(r==2){C.find("#valierr").remove();o.parent().after('<span class="help-block" id="valierr">'+q+"</span>");if(k.icon===true){if(o.find("option").length==0){o.after('<span class="glyphicon '+l+' form-control-feedback" aria-hidden="true"></span>')}else{o.after('<span class="glyphicon '+l+' form-control-feedback" aria-hidden="true" style="right: 25px;"></span>')}}}}}}return !B};var b=function(l){h(l).find("input, textarea,select").each(function(){var m=h(this);m.on("blur",function(){valid=(m.attr("check-type")==undefined)?null:m.attr("check-type").split(" ");if(valid){d(this,valid)}})});h(l).find("input[type='file']").each(function(){var m=h(this);m.on("change",function(){valid=(m.attr("check-type")==undefined)?null:m.attr("check-type").split(" ");if(valid){d(this,valid)}})});if(k.reqmark==true){if(a==0){h(l).find(".form-group>label").each(function(){var m=h(this);var n=m.parents(".form-group");n.removeClass("has-error has-success");n.find("#autoreqmark").remove();m.after('<span id="autoreqmark" style="color:#FF9966"> *</span>')})}else{if(a==1){}else{if(a==2){h(l).find("input, textarea,select").each(function(){var m=h(this);var n=m.parents(".form-group");n.removeClass("has-error has-success");n.find("#valierr").remove();valid=(m.attr("check-type")==undefined)?null:m.attr("check-type").split(" ");if(valid){if(h.inArray("required",valid)>=0){}}})}}}}h(l).find("input[type='reset'],button[type='reset']").each(function(){var m=h(this);m.on("click",function(){h(l).validation();h("#validerrmsg").remove()})})}}(window.jQuery);