var Holder=Holder||{};!function(e,t){function n(e,t){var n="complete",i="readystatechange",a=!1,r=a,o=!0,s=e.document,l=s.documentElement,d=s.addEventListener?"addEventListener":"attachEvent",u=s.addEventListener?"removeEventListener":"detachEvent",h=s.addEventListener?"":"on",c=function(o){(o.type!=i||s.readyState==n)&&(("load"==o.type?e:s)[u](h+o.type,c,a),!r&&(r=!0)&&t.call(e,null))},g=function(){try{l.doScroll("left")}catch(e){return void setTimeout(g,50)}c("poll")};if(s.readyState==n)t.call(e,"lazy");else{if(s.createEventObject&&l.doScroll){try{o=!e.frameElement}catch(f){}o&&g()}s[d](h+"DOMContentLoaded",c,a),s[d](h+i,c,a),e[d](h+"load",c,a)}}function a(e){e=e.match(/^(\W)?(.*)/);var t=document["getElement"+(e[1]?"#"==e[1]?"ById":"sByClassName":"sByTagName")](e[2]),n=[];return null!=t&&(n=t.length?t:0==t.length?t:[t]),n}function r(e,t){var n={};for(var i in e)n[i]=e[i];for(var a in t)n[a]=t[a];return n}function o(e,t,n){var i=[t,e].sort(),a=Math.round(i[1]/16),r=(Math.round(i[0]/16),Math.max(n.size,a));return{height:r}}function s(e,t,n,i){var a=o(t.width,t.height,n),r=a.height,s=t.width*i,l=t.height*i;f.width=s,f.height=l,e.textAlign="center",e.textBaseline="middle",e.fillStyle=n.background,e.fillRect(0,0,s,l),e.fillStyle=n.foreground,e.font="bold "+r+"px sans-serif";var d=n.text?n.text:t.width+"x"+t.height;return e.measureText(d).width/s>1&&(r=n.size/(e.measureText(d).width/s)),e.font="bold "+r*i+"px sans-serif",e.fillText(d,s/2,l/2,s),f.toDataURL("image/png")}function l(e,t,n,i){var a=n.dimensions,o=n.theme,l=n.text,d=a.width+"x"+a.height;o=l?r(o,{text:l}):o;var u=1;window.devicePixelRatio&&window.devicePixelRatio>1&&(u=window.devicePixelRatio),"image"==e?(t.setAttribute("data-src",i),t.setAttribute("alt",l?l:o.text?o.text+" ["+d+"]":d),t.style.width=a.width+"px",t.style.height=a.height+"px",g?t.style.backgroundColor=o.background:t.setAttribute("src",s(m,a,o,u))):g||(t.style.backgroundImage="url("+s(m,a,o,u)+")",t.style.backgroundSize=a.width+"px "+a.height+"px")}function d(e,t,n){var i=t.dimensions,a=t.theme,o=t.text,s=i.width+"x"+i.height;a=o?r(a,{text:o}):a;var l=document.createElement("div");l.style.backgroundColor=a.background,l.style.color=a.foreground,l.className=e.className+" holderjs-fluid",l.style.width=t.dimensions.width+(t.dimensions.width.indexOf("%")>0?"":"px"),l.style.height=t.dimensions.height+(t.dimensions.height.indexOf("%")>0?"":"px"),l.id=e.id,a.text?l.appendChild(document.createTextNode(a.text)):(l.appendChild(document.createTextNode(s)),x.push(l),setTimeout(u,0)),e.parentNode.replaceChild(l,e)}function u(){for(i in x){var e=x[i],t=e.firstChild;e.style.lineHeight=e.offsetHeight+"px",t.data=e.offsetWidth+"x"+e.offsetHeight}}function h(t,n){var i={theme:v.themes.gray},a=!1;for(sl=t.length,j=0;j<sl;j++){var r=t[j];e.flags.dimensions.match(r)?(a=!0,i.dimensions=e.flags.dimensions.output(r)):e.flags.fluid.match(r)?(a=!0,i.dimensions=e.flags.fluid.output(r),i.fluid=!0):e.flags.colors.match(r)?i.theme=e.flags.colors.output(r):n.themes[r]?i.theme=n.themes[r]:e.flags.text.match(r)&&(i.text=e.flags.text.output(r))}return a?i:!1}var c=!1,g=!1,f=document.createElement("canvas");if(document.getElementsByClassName||(document.getElementsByClassName=function(e){var t,n,i,a=document,r=[];if(a.querySelectorAll)return a.querySelectorAll("."+e);if(a.evaluate)for(n=".//*[contains(concat(' ', @class, ' '), ' "+e+" ')]",t=a.evaluate(n,a,null,0,null);i=t.iterateNext();)r.push(i);else for(t=a.getElementsByTagName("*"),n=new RegExp("(^|\\s)"+e+"(\\s|$)"),i=0;i<t.length;i++)n.test(t[i].className)&&r.push(t[i]);return r}),window.getComputedStyle||(window.getComputedStyle=function(e,t){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return"float"==t&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this}),f.getContext)if(f.toDataURL("image/png").indexOf("data:image/png")<0)g=!0;else var m=f.getContext("2d");else g=!0;var x=[],v={domain:"holder.js",images:"img",elements:".holderjs",themes:{gray:{background:"#eee",foreground:"#aaa",size:12},social:{background:"#3a5a97",foreground:"#fff",size:12},industrial:{background:"#434A52",foreground:"#C2F200",size:12}},stylesheet:".holderjs-fluid {font-size:16px;font-weight:bold;text-align:center;font-family:sans-serif;margin:0}"};e.flags={dimensions:{regex:/^(\d+)x(\d+)$/,output:function(e){var t=this.regex.exec(e);return{width:+t[1],height:+t[2]}}},fluid:{regex:/^([0-9%]+)x([0-9%]+)$/,output:function(e){var t=this.regex.exec(e);return{width:t[1],height:t[2]}}},colors:{regex:/#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,output:function(e){var t=this.regex.exec(e);return{size:v.themes.gray.size,foreground:"#"+t[2],background:"#"+t[1]}}},text:{regex:/text\:(.*)/,output:function(e){return this.regex.exec(e)[1]}}};for(var p in e.flags)e.flags[p].match=function(e){return e.match(this.regex)};e.add_theme=function(t,n){return null!=t&&null!=n&&(v.themes[t]=n),e},e.add_image=function(t,n){var i=a(n);if(i.length)for(var r=0,o=i.length;o>r;r++){var s=document.createElement("img");s.setAttribute("data-src",t),i[r].appendChild(s)}return e},e.run=function(t){var n=r(v,t),i=a(n.images),o=a(n.elements),s=[];for(f=0,g=i.length;g>f;f++)s.push(i[f]);var u=document.createElement("style");u.type="text/css",u.styleSheet?u.styleSheet.cssText=n.stylesheet:u.textContent=n.stylesheet,document.getElementsByTagName("head")[0].appendChild(u);for(var c=new RegExp(n.domain+'/(.*?)"?\\)'),g=o.length,f=0;g>f;f++){var m=window.getComputedStyle(o[f],null).getPropertyValue("background-image"),x=m.match(c);if(x){var p=h(x[1].split("/"),n);p&&l("background",o[f],p,m)}}for(var g=s.length,f=0;g>f;f++){var m=s[f].getAttribute("src")||s[f].getAttribute("data-src");if(null!=m&&m.indexOf(n.domain)>=0){var p=h(m.substr(m.lastIndexOf(n.domain)+n.domain.length+1).split("/"),n);p&&(p.fluid?d(s[f],p,m):l("image",s[f],p,m))}}return e},n(t,function(){window.addEventListener?(window.addEventListener("resize",u,!1),window.addEventListener("orientationchange",u,!1)):window.attachEvent("onresize",u),c||e.run()})}(Holder,window);