parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}var i=function(){function t(n,i){e(this,t),this.selector=document.querySelector(n),this.targetDate=new Date(i)}return n(t,[{key:"startCountdown",value:function(){var e=this;this.intervalId=setInterval(function(){e.currentTime=new Date,e.remainingTime=e.targetDate-e.currentTime,e.timeCounter(),e.insertTimeIntoMarckup(),e.remainingTime<0&&e.stopCountdown()},1e3)}},{key:"timeCounter",value:function(){this.days=Math.floor(this.remainingTime/864e5),this.hours=Math.floor(this.remainingTime%864e5/36e5),this.mins=Math.floor(this.remainingTime%36e5/6e4),this.secs=Math.floor(this.remainingTime%6e4/1e3)}},{key:"insertTimeIntoMarckup",value:function(){this.refs={days:document.querySelector(" [data-value=days]"),hours:document.querySelector(" [data-value=hours]"),minutes:document.querySelector(" [data-value=mins]"),seconds:document.querySelector(" [data-value=secs]")},this.refs.days.textContent=this.pad(this.days),this.refs.hours.textContent=this.pad(this.hours),this.refs.minutes.textContent=this.pad(this.mins),this.refs.seconds.textContent=this.pad(this.secs)}},{key:"stopCountdown",value:function(){clearInterval(this.intervalId),this.remainingTime=0,this.timeCounter(this.remainingTime),this.insertTimeIntoMarckup(this.remainingTime)}},{key:"pad",value:function(e){return String(e).padStart(2,"0")}}]),t}(),r=new i("#timer-1","December 25, 2021, 16:01");r.startCountdown();
},{}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.5e1ebb3c.js.map