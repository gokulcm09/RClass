(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7735],{93096:function(e,t,n){var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,s="object"==typeof self&&self&&self.Object===Object&&self,f=l||s||Function("return this")(),m=Object.prototype.toString,d=Math.max,b=Math.min,p=function(){return f.Date.now()};function y(e,t,n){var i,a,o,u,c,l,s=0,f=!1,m=!1,y=!0;if("function"!=typeof e)throw new TypeError(r);function w(t){var n=i,r=a;return i=a=void 0,s=t,u=e.apply(r,n)}function k(e){return s=e,c=setTimeout(T,t),f?w(e):u}function C(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-s>=o}function T(){var e=p();if(C(e))return h(e);c=setTimeout(T,function(e){var n=t-(e-l);return m?b(n,o-(e-s)):n}(e))}function h(e){return c=void 0,y&&i?w(e):(i=a=void 0,u)}function O(){var e=p(),n=C(e);if(i=arguments,a=this,l=e,n){if(void 0===c)return k(l);if(m)return c=setTimeout(T,t),w(l)}return void 0===c&&(c=setTimeout(T,t)),u}return t=g(t)||0,v(n)&&(f=!!n.leading,o=(m="maxWait"in n)?d(g(n.maxWait)||0,t):o,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==c&&clearTimeout(c),s=0,i=l=a=c=void 0},O.flush=function(){return void 0===c?u:h(p())},O}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||u.test(e)?c(e.slice(2),n?2:8):a.test(e)?NaN:+e}e.exports=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(r);return v(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),y(e,t,{leading:i,maxWait:t,trailing:a})}},77735:function(e,t,n){"use strict";n.d(t,{n:function(){return f}});var r=n(45697),i=n.n(r),a=n(67294),o=n(93096),u=n.n(o);const c="animate__animated",l="undefined"===typeof window;let s;l||(s=window);const f=({offset:e=150,duration:t=1,style:n,className:r,initiallyVisible:i=!1,animateIn:o,afterAnimatedIn:f,animateOut:m,delay:d=0,animatePreScroll:b=!0,afterAnimatedOut:p,scrollableParentSelector:y,animateOnce:v=!1,children:g})=>{const[w,k]=(0,a.useState)(c),[C,T]=(0,a.useState)({animationDuration:`${t}s`,opacity:i?1:0}),h=(0,a.useRef)(null),O=(0,a.useRef)(!1),S=(0,a.useRef)({onScreen:!1,inViewport:!1}),$=(0,a.useRef)(void 0),j=(0,a.useRef)(void 0),E=(0,a.useRef)(s),N=(0,a.useCallback)((e=>{let t=0;for(;e&&void 0!==e.offsetTop&&void 0!==e.clientTop;)t+=e.offsetTop+e.clientTop,e=e.offsetParent;return t}),[]),V=(0,a.useCallback)((()=>void 0!==E.current.pageYOffset?E.current.pageYOffset:E.current.scrollTop),[E]),x=(0,a.useCallback)((()=>void 0!==E.current.innerHeight?E.current.innerHeight:E.current.clientHeight),[E]),D=(0,a.useCallback)((()=>V()+e),[e,V]),R=(0,a.useCallback)((()=>V()+x()-e),[e,V,x]),_=(0,a.useCallback)((e=>e>=D()&&e<=R()),[D,R]),I=(0,a.useCallback)((e=>e<D()),[D]),P=(0,a.useCallback)((e=>e>R()),[R]),A=(0,a.useCallback)(((e,t)=>_(e)||_(t)||I(e)&&P(t)),[_,I,P]),H=(0,a.useCallback)((e=>e<V()),[V]),L=(0,a.useCallback)((e=>e>V()+x()),[V,x]),M=(0,a.useCallback)(((e,t)=>!H(t)&&!L(e)),[H,L]),W=(0,a.useCallback)((()=>{const e=N(h.current)-N(E.current),t=e+h.current.clientHeight;return{inViewport:A(e,t),onScreen:M(e,t)}}),[N,h,A,M,E]),Y=(0,a.useCallback)(((e,t)=>e.inViewport!==t.inViewport||e.onScreen!==t.onScreen),[]),q=(0,a.useCallback)(((e,n)=>{$.current=setTimeout((()=>{O.current=!0,k(`${c} ${e}`),T({animationDuration:`${t}s`}),j.current=setTimeout(n,1e3*t)}),d)}),[O,d,t]),F=(0,a.useCallback)((e=>{q(o,(()=>{v||(T({animationDuration:`${t}s`,opacity:1}),O.current=!1);const n=W();e&&e(n)}))}),[O,o,v,t,q,W]),z=(0,a.useCallback)((e=>{q(m,(()=>{k(c),T({animationDuration:`${t}s`,opacity:0});const n=W();n.inViewport&&o?F(f):O.current=!1,e&&e(n)}))}),[O,q,o,t,f,F,m,W]),B=(0,a.useCallback)((()=>{if(!O.current){const{current:e}=S,n=W();Y(e,n)&&(clearTimeout($.current),n.onScreen?n.inViewport&&o?F(f):n.onScreen&&e.inViewport&&m&&"1"===h.current.style.opacity&&z(p):(k(c),T({animationDuration:`${t}s`,opacity:i?1:0})),S.current=n)}}),[f,p,o,F,m,t,i,Y,z,W]),G=(0,a.useMemo)((()=>u()((()=>{B()}),50)),[B]);return(0,a.useEffect)((()=>{if(!l){const e=y;return E.current=e?document.querySelector(e):window,E.current&&E.current.addEventListener?E.current.addEventListener("scroll",G):console.warn(`Cannot find element by locator: ${y}`),b&&B(),()=>{clearTimeout($.current),clearTimeout(j.current),window&&window.removeEventListener&&window.removeEventListener("scroll",G)}}}),[B,y,E,G,b]),a.createElement("div",{ref:h,className:r?`${r} ${w}`:w,style:Object.assign({},C,n)},g)};f.propTypes={offset:i().number,duration:i().number,style:i().any,className:i().string,initiallyVisible:i().bool,animateIn:i().string,afterAnimatedIn:i().any,animateOut:i().string,delay:i().number,animatePreScroll:i().bool,afterAnimatedOut:i().any,scrollableParentSelector:i().string,animateOnce:i().bool,children:i().any}}}]);