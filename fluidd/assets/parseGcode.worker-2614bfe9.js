(function(){"use strict";var A=(e=>(e.Clockwise="clockwise",e.CounterClockwise="counter-clockwise",e))(A||{}),f=(e=>(e.Relative="relative",e.Absolute="absolute",e))(f||{});const ee=(e,t)=>e in t;var te=typeof global=="object"&&global&&global.Object===Object&&global,ne=te,re=typeof self=="object"&&self&&self.Object===Object&&self,ie=ne||re||Function("return this")(),E=ie,oe=E.Symbol,d=oe,D=Object.prototype,ae=D.hasOwnProperty,se=D.toString,b=d?d.toStringTag:void 0;function ce(e){var t=ae.call(e,b),n=e[b];try{e[b]=void 0;var r=!0}catch{}var i=se.call(e);return r&&(t?e[b]=n:delete e[b]),i}var le=Object.prototype,ue=le.toString;function fe(e){return ue.call(e)}var he="[object Null]",pe="[object Undefined]",H=d?d.toStringTag:void 0;function I(e){return e==null?e===void 0?pe:he:H&&H in Object(e)?ce(e):fe(e)}function M(e){return e!=null&&typeof e=="object"}var de="[object Symbol]";function N(e){return typeof e=="symbol"||M(e)&&I(e)==de}function ge(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var ye=Array.isArray,m=ye,ve=1/0,L=d?d.prototype:void 0,U=L?L.toString:void 0;function K(e){if(typeof e=="string")return e;if(m(e))return ge(e,K)+"";if(N(e))return U?U.call(e):"";var t=e+"";return t=="0"&&1/e==-ve?"-0":t}function x(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function _e(e){return e}var be="[object AsyncFunction]",me="[object Function]",Pe="[object GeneratorFunction]",xe="[object Proxy]";function we(e){if(!x(e))return!1;var t=I(e);return t==me||t==Pe||t==be||t==xe}var Oe=E["__core-js_shared__"],R=Oe,Y=function(){var e=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Se(e){return!!Y&&Y in e}var ze=Function.prototype,Te=ze.toString;function $e(e){if(e!=null){try{return Te.call(e)}catch{}try{return e+""}catch{}}return""}var Ce=/[\\^$.*+?()[\]{}|]/g,Ae=/^\[object .+?Constructor\]$/,Ee=Function.prototype,Ie=Object.prototype,Me=Ee.toString,Ne=Ie.hasOwnProperty,Re=RegExp("^"+Me.call(Ne).replace(Ce,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ge(e){if(!x(e)||Se(e))return!1;var t=we(e)?Re:Ae;return t.test($e(e))}function Fe(e,t){return e==null?void 0:e[t]}function G(e,t){var n=Fe(e,t);return Ge(n)?n:void 0}function je(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var De=800,He=16,Le=Date.now;function Ue(e){var t=0,n=0;return function(){var r=Le(),i=He-(r-n);if(n=r,i>0){if(++t>=De)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function Ke(e){return function(){return e}}var Ye=function(){try{var e=G(Object,"defineProperty");return e({},"",{}),e}catch{}}(),w=Ye,ke=w?function(e,t){return w(e,"toString",{configurable:!0,enumerable:!1,value:Ke(t),writable:!0})}:_e,Xe=ke,Je=Ue(Xe),Ze=Je,qe=9007199254740991,Be=/^(?:0|[1-9]\d*)$/;function k(e,t){var n=typeof e;return t=t??qe,!!t&&(n=="number"||n!="symbol"&&Be.test(e))&&e>-1&&e%1==0&&e<t}function We(e,t,n){t=="__proto__"&&w?w(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function X(e,t){return e===t||e!==e&&t!==t}var Qe=Object.prototype,Ve=Qe.hasOwnProperty;function et(e,t,n){var r=e[t];(!(Ve.call(e,t)&&X(r,n))||n===void 0&&!(t in e))&&We(e,t,n)}var J=Math.max;function tt(e,t,n){return t=J(t===void 0?e.length-1:t,0),function(){for(var r=arguments,i=-1,a=J(r.length-t,0),l=Array(a);++i<a;)l[i]=r[t+i];i=-1;for(var c=Array(t+1);++i<t;)c[i]=r[i];return c[t]=n(l),je(e,this,c)}}var nt=9007199254740991;function rt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=nt}var it="[object Arguments]";function Z(e){return M(e)&&I(e)==it}var q=Object.prototype,ot=q.hasOwnProperty,at=q.propertyIsEnumerable,st=Z(function(){return arguments}())?Z:function(e){return M(e)&&ot.call(e,"callee")&&!at.call(e,"callee")},B=st,ct=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,lt=/^\w*$/;function ut(e,t){if(m(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||N(e)?!0:lt.test(e)||!ct.test(e)||t!=null&&e in Object(t)}var ft=G(Object,"create"),P=ft;function ht(){this.__data__=P?P(null):{},this.size=0}function pt(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var dt="__lodash_hash_undefined__",gt=Object.prototype,yt=gt.hasOwnProperty;function vt(e){var t=this.__data__;if(P){var n=t[e];return n===dt?void 0:n}return yt.call(t,e)?t[e]:void 0}var _t=Object.prototype,bt=_t.hasOwnProperty;function mt(e){var t=this.__data__;return P?t[e]!==void 0:bt.call(t,e)}var Pt="__lodash_hash_undefined__";function xt(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=P&&t===void 0?Pt:t,this}function g(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}g.prototype.clear=ht,g.prototype.delete=pt,g.prototype.get=vt,g.prototype.has=mt,g.prototype.set=xt;function wt(){this.__data__=[],this.size=0}function O(e,t){for(var n=e.length;n--;)if(X(e[n][0],t))return n;return-1}var Ot=Array.prototype,St=Ot.splice;function zt(e){var t=this.__data__,n=O(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():St.call(t,n,1),--this.size,!0}function Tt(e){var t=this.__data__,n=O(t,e);return n<0?void 0:t[n][1]}function $t(e){return O(this.__data__,e)>-1}function Ct(e,t){var n=this.__data__,r=O(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function _(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}_.prototype.clear=wt,_.prototype.delete=zt,_.prototype.get=Tt,_.prototype.has=$t,_.prototype.set=Ct;var At=G(E,"Map"),Et=At;function It(){this.size=0,this.__data__={hash:new g,map:new(Et||_),string:new g}}function Mt(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function S(e,t){var n=e.__data__;return Mt(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Nt(e){var t=S(this,e).delete(e);return this.size-=t?1:0,t}function Rt(e){return S(this,e).get(e)}function Gt(e){return S(this,e).has(e)}function Ft(e,t){var n=S(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function y(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}y.prototype.clear=It,y.prototype.delete=Nt,y.prototype.get=Rt,y.prototype.has=Gt,y.prototype.set=Ft;var jt="Expected a function";function F(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(jt);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var l=e.apply(this,r);return n.cache=a.set(i,l)||a,l};return n.cache=new(F.Cache||y),n}F.Cache=y;var Dt=500;function Ht(e){var t=F(e,function(r){return n.size===Dt&&n.clear(),r}),n=t.cache;return t}var Lt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ut=/\\(\\)?/g,Kt=Ht(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Lt,function(n,r,i,a){t.push(i?a.replace(Ut,"$1"):r||n)}),t}),Yt=Kt;function kt(e){return e==null?"":K(e)}function z(e,t){return m(e)?e:ut(e,t)?[e]:Yt(kt(e))}var Xt=1/0;function j(e){if(typeof e=="string"||N(e))return e;var t=e+"";return t=="0"&&1/e==-Xt?"-0":t}function Jt(e,t){t=z(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[j(t[n++])];return n&&n==r?e:void 0}function Zt(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var W=d?d.isConcatSpreadable:void 0;function qt(e){return m(e)||B(e)||!!(W&&e&&e[W])}function Q(e,t,n,r,i){var a=-1,l=e.length;for(n||(n=qt),i||(i=[]);++a<l;){var c=e[a];t>0&&n(c)?t>1?Q(c,t-1,n,r,i):Zt(i,c):r||(i[i.length]=c)}return i}function Bt(e){var t=e==null?0:e.length;return t?Q(e,1):[]}function Wt(e){return Ze(tt(e,void 0,Bt),e+"")}function Qt(e,t){return e!=null&&t in Object(e)}function Vt(e,t,n){t=z(t,e);for(var r=-1,i=t.length,a=!1;++r<i;){var l=j(t[r]);if(!(a=e!=null&&n(e,l)))break;e=e[l]}return a||++r!=i?a:(i=e==null?0:e.length,!!i&&rt(i)&&k(l,i)&&(m(e)||B(e)))}function en(e,t){return e!=null&&Vt(e,t,Qt)}function tn(e,t,n,r){if(!x(e))return e;t=z(t,e);for(var i=-1,a=t.length,l=a-1,c=e;c!=null&&++i<a;){var o=j(t[i]),u=n;if(o==="__proto__"||o==="constructor"||o==="prototype")return e;if(i!=l){var h=c[o];u=r?r(h,o,c):void 0,u===void 0&&(u=x(h)?h:k(t[i+1])?[]:{})}et(c,o,u),c=c[o]}return e}function nn(e,t,n){for(var r=-1,i=t.length,a={};++r<i;){var l=t[r],c=Jt(e,l);n(c,l)&&tn(a,z(l,e),c)}return a}function rn(e,t){return nn(e,t,function(n,r){return en(e,r)})}var on=Wt(function(e,t){return e==null?{}:rn(e,t)}),V=on;const an=e=>{const t=e.trim().split(";",2)[0],n=t.toUpperCase();if(n.startsWith("SET_PRINT_STATS_INFO ")&&n.includes(" CURRENT_LAYER="))return{command:";LAYER"};const[,r,i=""]=t.split(/^([a-z][0-9]+)\s+/i);if(!/^(G|M)\d+$/.test(r))return null;const a={};for(const[,l,c]of i.matchAll(/([a-z])[ \t]*(-?(?:\d+(?:\.\d+)?|\.\d+))/ig))a[l.toLowerCase()]=Number(c);return{command:r.toUpperCase(),args:a}},v=e=>Math.round(e*1e4)/1e4,sn=(e,t)=>{const n=[],r=[],i=e.split(`
`);let a=!1,l=f.Relative,c=f.Absolute;const o={x:0,y:0,z:0,e:0,filePosition:0},u={length:1,extrudeExtra:0,z:0};for(let h=0;h<i.length;h++){const{command:T,args:p}=an(i[h])??{};if(T===";LAYER"){a=!0,o.filePosition+=i[h].length+1;continue}else if(!T||!p){o.filePosition+=i[h].length+1;continue}let s=null;switch(T){case"G0":case"G1":s={...V(p,["x","y","z","e"]),filePosition:o.filePosition};break;case"G2":case"G3":s={...V(p,["x","y","z","e","i","j","k","r"]),direction:T==="G2"?A.Clockwise:A.CounterClockwise,filePosition:o.filePosition};break;case"G10":s={e:-u.length,filePosition:0},u.z!==0&&(s.z=v(o.z+u.z));break;case"G11":s={e:v(u.length+u.extrudeExtra),filePosition:o.filePosition},u.z!==0&&(s.z=v(o.z-u.z));break;case"G90":c=f.Absolute;case"M82":l=f.Absolute,o.e=0;break;case"G91":c=f.Relative;case"M83":l=f.Relative;break;case"G92":l===f.Absolute&&(o.e=p.e??o.e),c===f.Absolute&&(o.x=p.x??o.x,o.y=p.y??o.y,o.z=p.z??o.z);break;case"M207":u.length=p.s??u.length,u.extrudeExtra=p.s??u.extrudeExtra,u.z=p.z??u.z;break}if(s){if(l===f.Absolute&&s.e!==void 0){const $=v(s.e-o.e);o.e=s.e,s.e=$}if(c===f.Relative&&(s.x!==void 0&&(s.x=v(s.x+o.x)),s.y!==void 0&&(s.y=v(s.y+o.y)),s.z!==void 0&&(s.z=v(s.z+o.z))),a&&s.e&&s.e>0){const $=s;if(["x","y","i","j"].some(C=>ee(C,$)&&$[C]!==0)){const C={z:o.z,move:n.length-1,filePosition:o.filePosition};r.push(Object.freeze(C)),a=!1}}o.x=s.x??o.x,o.y=s.y??o.y,o.z=s.z??o.z,n.push(Object.freeze(s))}h%Math.floor(i.length/100)===0&&t(o.filePosition),o.filePosition+=i[h].length+1}return t(o.filePosition),{moves:n,layers:r}},cn=e=>{const t={action:"progress",filePosition:e};self.postMessage(t)},ln=(e,t)=>{const n={action:"result",moves:e,layers:t};self.postMessage(n)};self.onmessage=e=>{const t=e.data;switch(t.action){case"parse":{const{moves:n,layers:r}=sn(t.gcode,cn);ln(n,r);break}}}})();