parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),e="\n/*你好我叫小徐\n我是一名前端工程师\n接下来我要给我的字体加样式了-字体变色*/\nbody{\n  color:#4822DD;\n}\n/*接下来我要演示一下如何画一个太极\n*首先我要准备一个div\n*/\n#div1{\n  width:200px;\n  height:200px;\n}\n/*接下来我要演示一下如何画一个太极\n*首先把div变成一个圆*/\n\n#div1{\n  border-radius: 50%;\n  box-shadow:0 0 3px rgba(0,0,0,0.5)\n  border:none;\n}\n/*八卦是阴阳形成的\n*一黑一白*/\n#div1{\n  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);\n}\n/*接着加两个小圆球*/\n#div1::before {\n  width:100px;\n  height:100px;\n  border-radius: 50%;\n  top:0;\n  left:50%;\n  transform:translateX(-50%);\n  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n }\n#div1::after {\n  width:100px;\n  height:100px;\n  border-radius: 50%;\n  bottom:0;\n  left:50%;\n  transform:translateX(-50%);\n  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n }\n",a="",i=0;n.innerHTML=a,r.innerHTML=a;var t=function t(){setTimeout(function(){"\n"===e[i]?a+="<br>":" "===e[i]?a+="&nbsp;":a+=e[i],n.innerHTML=a,r.innerHTML=e.substring(0,i),window.scrollTo(0,99999),n.scrollTo(0,99999),i<e.length-1&&(i+=1,t())},50)};t();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.ac0430fc.js.map