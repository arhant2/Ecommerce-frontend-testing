parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Koq2":[function(require,module,exports) {

},{}],"CIQt":[function(require,module,exports) {
var e=function(e,t,n){e.dataset.sliders=JSON.stringify({slided:t,slideTotal:n})},t=function(e,t,n){return JSON.parse(e.dataset.sliders)},n=function(e){var t=setInterval(function(){l(e,"right")},4e3);e.dataset.autoScroll=t},s=function(e){void 0!==e.dataset.autoScroll&&clearInterval(e.dataset.autoScroll)},l=function(n){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"left",l=t(n);"left"===(s=s.toLowerCase())?(l.slided-=1,l.slided<0&&(l.slided=l.slideTotal-1)):(l.slided+=1,l.slided>=l.slideTotal&&(l.slided=0));var i=n.getElementsByClassName("home-intro-box__container")[0];i&&(i.style.transform="translateX(-".concat(n.offsetWidth*l.slided,"px)")),e(n,l.slided,l.slideTotal)};Array.from(document.getElementsByClassName("js--components-function--sliders")).forEach(function(t){e(t,0,t.getElementsByClassName("js--components-function--sliders__each").length);var i=t.querySelector(".js--components-function--sliders__btn--left"),a=t.querySelector(".js--components-function--sliders__btn--right");n(t),i&&i.addEventListener("click",function(){s(this.parentElement),l(this.parentElement,"left")}),a&&a.addEventListener("click",function(){s(this.parentElement),l(this.parentElement,"right")})});
},{}],"kXhK":[function(require,module,exports) {
var n=function(n){var e=n.closest(".js--components-function--increment-decrement-input-number");return e?e.querySelector(".js--components-function--increment-decrement-input-number__input"):null};Array.from(document.getElementsByClassName("js--components-function--increment-decrement-input-number__decrease")).forEach(function(e){e.addEventListener("click",function(){var e=n(this);e&&e.stepDown()})}),Array.from(document.getElementsByClassName("js--components-function--increment-decrement-input-number__increase")).forEach(function(e){e.addEventListener("click",function(){var e=n(this);e&&e.stepUp()})});
},{}],"hbMI":[function(require,module,exports) {
var e=document.querySelector(".js--page-each-product--big-img"),t=document.querySelectorAll(".js--page-each-product--imgs"),o=document.querySelector(".js--page-each-product--lens"),s=document.querySelector(".js--page-each-product--zoomed-img"),c=document.querySelector(".js--page-each-product--to-zoom");if(Array.from(t).forEach(function(t){t.addEventListener("mouseover",function(){e&&(e.src=this.src,s.style.backgroundImage='url("'.concat(e.src,'")'))})}),o&&s&&c&&e){var n,a;function f(e){e.preventDefault();var t=d(e),f=t.x-o.offsetWidth/2,i=t.y-o.offsetHeight/2;f>c.offsetWidth-o.offsetWidth?f=c.offsetWidth-o.offsetWidth:f<0&&(f=0),i>c.offsetHeight-o.offsetHeight?i=c.offsetHeight-o.offsetHeight:i<0&&(i=0),o.style.left="".concat(f,"px"),o.style.top="".concat(i,"px"),s.style.backgroundPosition="-".concat(f*n,"px -").concat(i*a,"px")}function i(){console.log("yaha aaya"),s.style.display="block",o.style.display="block",s.style.height="".concat(s.offsetWidth,"px"),n=s.offsetWidth/o.offsetWidth,a=s.offsetHeight/o.offsetHeight,s.style.backgroundSize="".concat(c.offsetWidth*n,"px ").concat(c.offsetHeight*a,"px")}function r(){s.style.display="none",o.style.display="none"}function d(e){var t,o=0,s=0;return e=e||window.event,t=c.getBoundingClientRect(),o=e.pageX-t.left,s=e.pageY-t.top,{x:o-=window.pageXOffset,y:s-=window.pageYOffset}}s.style.backgroundImage='url("'.concat(e.src,'")'),o.addEventListener("mousemove",f),c.addEventListener("mousemove",f),c.addEventListener("mouseenter",i),c.addEventListener("mouseleave",r)}
},{}],"Focm":[function(require,module,exports) {
"use strict";require("../scss/main.scss"),require("./component-functions/sliders"),require("./component-functions/increment-decrement-input-number"),require("./pages/each-product");
},{"../scss/main.scss":"Koq2","./component-functions/sliders":"CIQt","./component-functions/increment-decrement-input-number":"kXhK","./pages/each-product":"hbMI"}]},{},["Focm"], null)