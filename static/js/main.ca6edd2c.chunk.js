(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(n,e,t){n.exports=t(98)},98:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(9),o=t.n(i),u=t(2),l=t(1),c=t(35),s=t(36),f=t.n(s),d=t(10),m=function(){var n=localStorage.getItem("localPlayList")?JSON.parse(localStorage.getItem("localPlayList")):[{id:0,songName:"We Can't Stop - Miley Cyrus (Boyce Avenue feat. Bea Miller cover) on Spotify & Apple",singer:"Boyce Avenue",videoKey:"uzgp65UnPxA",thumbnail:"https://i.ytimg.com/vi/uzgp65UnPxA/maxresdefault.jpg",max_thumbnail:"https://i.ytimg.com/vi/uzgp65UnPxA/maxresdefault.jpg",duration:"04:30"},{id:1,songName:"Charlie Puth - Attention [Official Video]",singer:"Charlie Puth",videoKey:"nfs8NYg7yQM",thumbnail:"https://i.ytimg.com/vi/nfs8NYg7yQM/hqdefault.jpg",max_thumbnail:"https://i.ytimg.com/vi/nfs8NYg7yQM/hqdefault.jpg",duration:"03:52"},{id:2,songName:"Pharrell Williams - Happy (Official Music Video)",singer:"PharrellWilliamsVEVO",videoKey:"ZbZSe6N_BXs",thumbnail:"https://i.ytimg.com/vi/ZbZSe6N_BXs/maxresdefault.jpg",max_thumbnail:"https://i.ytimg.com/vi/ZbZSe6N_BXs/maxresdefault.jpg",duration:"04:01"}],e=Object(a.useState)(n),t=Object(d.a)(e,2),r=t[0],i=t[1];return Object(a.useEffect)(function(){localStorage.setItem("localPlayList",JSON.stringify(r))}),{statePlayList:r,addStatePlayList:function(n){var e=r.concat(n);i(e)},deleteStatePlayList:function(n){if(1!==r.length){var e=r.filter(function(e,t){return e.videoKey!==n});return i(e),!0}return!1}}},g=function(n){var e=Object(a.useState)(n),t=Object(d.a)(e,2);return{nowPlaying:t[0],setNowPlaying:t[1]}},p=t(20),h=t.n(p),b=t(37),v=t(6),C=t(5),x=t(38),y=t.n(x),w=t(39),j=t.n(w);function O(){var n=Object(u.a)(["\n  background: none;\n  width: 70%;\n  height: 100%;\n  color: #ececec;\n  border: none;\n  border-bottom: 2px solid #ececec;\n"]);return O=function(){return n},n}function E(){var n=Object(u.a)(["\n  font-size: 1.2rem;\n  cursor: pointer;\n  color: #dcdcdc;\n"]);return E=function(){return n},n}function k(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  width: 10%;\n  height: 40px;\n  border: 2px solid white;\n  border-radius: 10px;\n\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12),\n    0 3px 6px rgba(0, 0, 0, 0.1725);\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.1725);\n\n  &:hover {\n    animation: "," 0.1s ease;\n    animation-fill-mode: forwards;\n  }\n"]);return k=function(){return n},n}function P(){var n=Object(u.a)(["\n  100%{\n    background:rgba(255, 255, 255, 0.5);\n    box-shadow:none;\n  }\n"]);return P=function(){return n},n}function H(){var n=Object(u.a)(["\n  width: 15%;\n  margin-left: 2%;\n  margin-right: 2%;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #ececec;\n"]);return H=function(){return n},n}function V(){var n=Object(u.a)(["\n  display: flex;\n  align-items: baseline;\n  width: 100%;\n  height: 5%;\n  margin-top: 3%;\n"]);return V=function(){return n},n}var L=l.default.div(V()),M=l.default.span(H()),S=Object(l.keyframes)(P()),N=l.default.span(k(),S),z=Object(l.default)(v.a)(E()),Z=l.default.input(O()),I=function(n){var e=n.statePlayList,t=n.addStatePlayList,i=Object(a.useState)(""),o=Object(d.a)(i,2),u=o[0],l=o[1],c=function(){var n=Object(b.a)(h.a.mark(function n(){var a,r,i,o,c,s,f;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(u){n.next=3;break}return alert("URL \uc774\ub098 VideoId\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),n.abrupt("return",!1);case 3:return r="",!1===(a=u).includes("v=")?r=a:(r=a.split("v=")[1],-1!==(i=r.indexOf("&"))&&(r=r.substring(0,i))),o="https://www.googleapis.com/youtube/v3/videos?id=".concat(r,"&key=").concat("AIzaSyCC2pMVczqa5crA9qxUFnceNC_0p2gV7gg","&part=snippet,contentDetails,statistics,status"),n.next=10,y.a.get(o);case 10:if(c=n.sent,l(""),!(200===c.status&&c.data.items.length>=1)){n.next=21;break}if(s=function(){var n="";return c.data.items[0].snippet.thumbnails.maxres?n=c.data.items[0].snippet.thumbnails.maxres.url:c.data.items[0].snippet.thumbnails.high?n=c.data.items[0].snippet.thumbnails.high.url:c.data.items[0].snippet.thumbnails.medium&&(n=c.data.items[0].snippet.thumbnails.medium.url),n},f=[{id:e.length||0,songName:c.data.items[0].snippet.title,singer:c.data.items[0].snippet.channelTitle,videoKey:c.data.items[0].id,thumbnail:s(),max_thumbnail:s(),duration:j()(c.data.items[0].contentDetails.duration)}],!e.find(function(n){return n.videoKey===c.data.items[0].id})){n.next=18;break}return alert("\uc774\ubbf8 \ub4f1\ub85d\ub41c \uc74c\uc6d0\uc785\ub2c8\ub2e4"),n.abrupt("return",!1);case 18:t(f),n.next=22;break;case 21:alert("\uc874\uc7ac\ud558\uc9c0 \uc54a\uac70\ub098 \uc801\uc808\ud558\uc9c0 \uc54a\uc740 \uc8fc\uc18c\uc785\ub2c8\ub2e4.");case 22:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}();return r.a.createElement(L,null,r.a.createElement(M,null,"Youtube Link:"),r.a.createElement(Z,{value:u,onChange:function(n){return l(n.target.value)},placeholder:"Insert Youtube URL or videoId"}),r.a.createElement(N,{onClick:function(){return c()}},r.a.createElement(z,{icon:C.e})))},K=t(7);function A(){var n=Object(u.a)(["\n  position: absolute;\n  right: 1rem;\n  font-size: 1.2rem;\n  cursor: pointer;\n  color: #8c8c8c;\n  &:hover {\n    color: white;\n  }\n"]);return A=function(){return n},n}function U(){var n=Object(u.a)(["\n  font-size: 15px;\n  color: white;\n  margin-left: 5px;\n"]);return U=function(){return n},n}function _(){var n=Object(u.a)(["\n  color: white;\n  font-size: 15px;\n  font-weight: bold;\n"]);return _=function(){return n},n}function B(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  float: right;\n  width: 20%;\n  height: 100%;\n"]);return B=function(){return n},n}function T(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  float: left;\n  width: 80%;\n  height: 100%;\n"]);return T=function(){return n},n}function R(){var n=Object(u.a)(["\n  display: block;\n  float: right;\n  width: 80%;\n  height: 100%;\n"]);return R=function(){return n},n}function Y(){var n=Object(u.a)(["\n      animation: "," 5s linear infinite;\n    "]);return Y=function(){return n},n}function q(){var n=Object(u.a)(["\n  display: block;\n  width: 70px;\n  height: 75%;\n  border-radius: 100%;\n  background-image: url(",");\n  background-size: cover;\n  background-position: bottom;\n  margin-right: 40px;\n  ",";\n"]);return q=function(){return n},n}function D(){var n=Object(u.a)(["\n  25%{\n    transform:rotate(90deg);\n  }\n  50%{\n    transform:rotate(180deg);\n  }\n  75%{\n    transform:rotate(270deg);\n  }\n  100%{\n    transform:rotate(360deg);\n  }\n"]);return D=function(){return n},n}function F(){var n=Object(u.a)(["\n      background: rgba(228, 43, 43, 0.4);\n    "]);return F=function(){return n},n}function J(){var n=Object(u.a)(["\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-bottom: 1px dashed white;\n  width: 100%;\n  height: 100px;\n  padding-left: 15px;\n  cursor: pointer;\n  ",";\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.5);\n  }\n"]);return J=function(){return n},n}var Q=l.default.div(J(),function(n){return n.isPlaying&&Object(l.css)(F())}),W=Object(l.keyframes)(D()),X=l.default.div(q(),function(n){return n.background},function(n){return n.isPlaying&&Object(l.css)(Y(),W)}),G=l.default.div(R()),$=l.default.div(T()),nn=l.default.div(B()),en=l.default.a(_()),tn=l.default.a(U()),an=Object(l.default)(v.a)(A()),rn=function(n){var e=n.thumbnail,t=n.movieId,a=n.statePlayList,i=n.nowPlaying,o=n.setNowPlaying,u=n.deleteStatePlayList,l=n.songName,c=n.singer,s=n.duration,f=t===i.videoKey;return r.a.createElement(Q,{onClick:function(){return o(a.find(function(n){return n.videoKey===t}))},isPlaying:f},r.a.createElement(X,{background:e,isPlaying:f}),r.a.createElement(G,null,r.a.createElement($,null,r.a.createElement(en,null,""!==l&&void 0!==l?(l.length>30&&(l=l.substring(0,30)+"..."),l+" - "+c):null),r.a.createElement(tn,null,"(".concat(s,")"))),r.a.createElement(nn,null,r.a.createElement(an,{icon:C.f,onClick:function(n){n.stopPropagation(),!0!==u(t)&&K.toast.error("\ud558\ub098\uc758 \ud56d\ubaa9\uc740 \uc720\uc9c0\ud558\uc5ec\uc57c \ud569\ub2c8\ub2e4.")}}))))};function on(){var n=Object(u.a)(["\n  flex: 1;\n  height: 100%;\n  overflow-y: scroll;\n"]);return on=function(){return n},n}var un=l.default.div(on()),ln=function(n){var e=n.statePlayList,t=n.nowPlaying,a=n.setNowPlaying,i=n.deleteStatePlayList;return r.a.createElement(un,null,e.map(function(n,o){return r.a.createElement(rn,{key:o.toString(),thumbnail:n.thumbnail,movieId:n.videoKey,songName:n.songName,singer:n.singer,duration:n.duration,nowPlaying:t,setNowPlaying:a,statePlayList:e,deleteStatePlayList:i})}))};function cn(){var n=Object(u.a)(["\n  margin-top: 0.5rem;\n  color: #cbcbcb;\n  font-size: 1rem;\n"]);return cn=function(){return n},n}function sn(){var n=Object(u.a)(["\n  margin-top: 1.3rem;\n  color: white;\n  font-size: 1.2rem;\n  letter-spacing: 1px;\n"]);return sn=function(){return n},n}function fn(){var n=Object(u.a)(["\n  width: 85%;\n  height: 70%;\n  -webkit-box-shadow: 0 15px 14px rgba(0, 0, 0, 0.5),\n    0 25px 25px rgba(0, 0, 0, 0.075);\n  box-shadow: 0 15px 14px rgba(0, 0, 0, 0.5), 0 25px 25px rgba(0, 0, 0, 0.075);\n"]);return fn=function(){return n},n}function dn(){var n=Object(u.a)(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n"]);return dn=function(){return n},n}var mn=l.default.div(dn()),gn=l.default.img(fn()),pn=l.default.p(sn()),hn=l.default.p(cn()),bn=function(n){var e=n.nowPlaying,t=e.max_thumbnail,a=e.songName,i=e.singer,o="";return r.a.createElement(mn,null,r.a.createElement(gn,{src:t,alt:"DetailPlayingThumbnail"}),r.a.createElement(pn,null,""!==a&&void 0!==a?(a.length>30&&(o=a.substring(0,30)+"..."),o):null),r.a.createElement(hn,null,i))},vn=t(42);function Cn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex: 3.75;\n"]);return Cn=function(){return n},n}function xn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex: 6.25;\n"]);return xn=function(){return n},n}function yn(){var n=Object(u.a)(["\n  font-size: 1rem;\n  color: white;\n  cursor: pointer;\n"]);return yn=function(){return n},n}function wn(){var n=Object(u.a)(["\n  cursor: pointer;\n  font-size: 2rem;\n  color: white;\n"]);return wn=function(){return n},n}function jn(){var n=Object(u.a)(["\n  cursor: pointer;\n  font-size: 3rem;\n  color: white;\n  margin-left: 5px;\n  margin-right: 5px;\n"]);return jn=function(){return n},n}function On(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n"]);return On=function(){return n},n}function En(){var n=Object(u.a)(["\n  -webkit-appearance: none;\n  width: 40%;\n  height: 10px;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n  outline: none;\n  cursor: pointer;\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 5px;\n    height: 20px;\n    background: white;\n    cursor: pointer;\n  }\n  &::-moz-range-thumb {\n    width: 5px;\n    height: 20px;\n    background: white;\n    cursor: pointer;\n  }\n"]);return En=function(){return n},n}function kn(){var n=Object(u.a)(["\n  -webkit-appearance: none;\n  width: 100%;\n  height: 10px;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n  outline: none;\n  cursor: pointer;\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 5px;\n    height: 20px;\n    background: white;\n    cursor: pointer;\n  }\n  &::-moz-range-thumb {\n    width: 5px;\n    height: 20px;\n    background: white;\n    cursor: pointer;\n  }\n"]);return kn=function(){return n},n}function Pn(){var n=Object(u.a)(["\n  width: 100%;\n  height: 35px;\n  color: white;\n  font-size: 0.8rem;\n  text-align: right;\n  letter-spacing: 0.1rem;\n"]);return Pn=function(){return n},n}function Hn(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 500px;\n\n  padding-top: 5%;\n"]);return Hn=function(){return n},n}function Vn(){var n=Object(u.a)(["\n  display: none;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n"]);return Vn=function(){return n},n}function Ln(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n"]);return Ln=function(){return n},n}function Mn(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Mn=function(){return n},n}var Sn=l.default.div(Mn()),Nn=l.default.div(Ln()),zn=l.default.div(Vn()),Zn=l.default.div(Hn()),In=l.default.div(Pn()),Kn=l.default.input(kn()),An=l.default.input(En()),Un=l.default.div(On()),_n=Object(l.default)(v.a)(jn()),Bn=Object(l.default)(v.a)(wn()),Tn=Object(l.default)(v.a)(yn()),Rn=l.default.div(xn()),Yn=l.default.div(Cn()),qn=function(n){var e=n.nowPlaying,t=n.statePlayList,a=n.setNowPlaying;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Nn,null,r.a.createElement(vn.a,{videoId:e.videoKey,autoplay:!0,render:function(n){var i=n.iframe,o=n.getPlayerState,u=n.getCurrentTime,l=n.getDuration,c=n.playVideo,s=n.pauseVideo,f=n.seekTo,d=n.getVolume,m=n.setVolume,g=n.isMuted,p=n.mute,h=n.unMute,b=1===o(),v=u(),x=l(),y=t.findIndex(function(n){return n.videoKey===e.videoKey}),w=function(n){if(0===n)return"0:00";var e=Math.floor(n/60),t=n-60*e;return"".concat(e,":").concat(t<10?"0"+t:t)};return r.a.createElement(Sn,null,r.a.createElement(zn,null,i),r.a.createElement(bn,{nowPlaying:e}),r.a.createElement(Zn,null,r.a.createElement(In,null,w(v)," / ",w(x),r.a.createElement(Kn,{type:"range",min:0,max:100,value:function(n,e){if(void 0===typeof n||void 0===typeof e||0===e)return 0;if(n===e&&0!==e){var r=Math.floor(Math.random()*t.length);a(t[r])}return Math.ceil(n/e*100)}(v,x),onChange:function(n){return function(n,e){void 0!==typeof n&&void 0!==typeof e&&(c(),f(Math.ceil(n/100*e)))}(n.target.value,x)}})),r.a.createElement(Un,null,r.a.createElement(Rn,null,r.a.createElement(Bn,{icon:C.a,onClick:function(){!function(n){0===n?K.toast.error("\uc774\uc804 \ud56d\ubaa9\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."):a(t[n-1])}(y)}}),b?r.a.createElement(_n,{icon:C.c,onClick:function(n){return s()}}):r.a.createElement(_n,{icon:C.d,onClick:function(n){return c()}}),r.a.createElement(Bn,{icon:C.b,onClick:function(){!function(n){t.length-1===n?K.toast.error("\ub2e4\uc74c \ud56d\ubaa9\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."):a(t[n+1])}(y)}})),r.a.createElement(Yn,null,g()&&r.a.createElement(Tn,{icon:C.h,onClick:function(){return h()}}),!g()&&r.a.createElement(Tn,{icon:C.g,onClick:function(){return p()}}),r.a.createElement(An,{type:"range",min:0,max:100,value:d(),onChange:function(n){return m(n.target.value)}})))))}})))};function Dn(){var n=Object(u.a)(["\n  display: flex;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n\n  filter: blur(8px) opacity(0.8);\n  -webkit-filter: blur(8px) opacity(0.8);\n  z-index: 1;\n"]);return Dn=function(){return n},n}var Fn=l.default.div(Dn(),function(n){return n.backgroundURL}),Jn=function(n){var e=n.backgroundURL;return r.a.createElement(Fn,{backgroundURL:e})},Qn=t(43),Wn=t.n(Qn);function Xn(){var n=Object(u.a)(["\n  font-size: 1.2rem;\n  color: white;\n  padding-top: 30px;\n  padding-left: 30px;\n"]);return Xn=function(){return n},n}function Gn(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  height: 100%;\n  background: rgba(50, 50, 50, 0.5);\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12),\n    0 3px 6px rgba(0, 0, 0, 0.1725);\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.1725);\n"]);return Gn=function(){return n},n}function $n(){var n=Object(u.a)(["\n  /*flex: 1;*/\n  width: 700px;\n  height: 100%;\n  @media (max-width: 985px) {\n    height: 66%;\n  }\n"]);return $n=function(){return n},n}function ne(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  height: 80%;\n  width: 70%;\n"]);return ne=function(){return n},n}function ee(){var n=Object(u.a)(["\n  display: flex;\n\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  top: 0;\n  left: 0;\n  z-index: 2;\n"]);return ee=function(){return n},n}var te=l.default.div(ee()),ae=l.default.div(ne()),re=l.default.div($n()),ie=l.default.div(Gn()),oe=l.default.div(Xn());var ue=function(){var n=m(),e=n.statePlayList,t=n.addStatePlayList,a=n.deleteStatePlayList,i=g(e[0]),o=i.nowPlaying,u=i.setNowPlaying;return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{url:"//raw.githubusercontent.com/dev4us/source_warehouse/master/images/favicon.ico"}),r.a.createElement(c.Helmet,null,r.a.createElement("title",null,"HookPlayer - dev4us")),r.a.createElement(Jn,{backgroundURL:o.thumbnail}),r.a.createElement(Wn.a,{href:"https://github.com/dev4us/hook-player",size:100,bgColor:"#9f4940"}),r.a.createElement(te,null,r.a.createElement(ae,null,r.a.createElement(re,null,r.a.createElement(qn,{nowPlaying:o,statePlayList:e,setNowPlaying:u})),r.a.createElement(ie,null,r.a.createElement(oe,null,r.a.createElement("svg",{width:"124",height:"35",viewBox:"0 0 124 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M12.78 7.94446V28.1345C12.78 28.4545 12.72 28.6745 12.6 28.7945C12.5 28.8945 12.29 28.9445 11.97 28.9445H10.38V8.75446C10.38 8.43446 10.43 8.22446 10.53 8.12446C10.65 8.00446 10.87 7.94446 11.19 7.94446H12.78ZM4.56 18.9245V28.1345C4.56 28.4545 4.5 28.6745 4.38 28.7945C4.28 28.8945 4.07 28.9445 3.75 28.9445H2.16V8.75446C2.16 8.43446 2.21 8.22446 2.31 8.12446C2.43 8.00446 2.65 7.94446 2.97 7.94446H4.56V17.1845H9.18V18.1145C9.18 18.4345 9.13 18.6545 9.03 18.7745C8.95 18.8745 8.75 18.9245 8.43 18.9245H4.56ZM16.8314 16.5545C16.8314 15.5145 17.0414 14.7845 17.4614 14.3645C17.9014 13.9245 18.6414 13.7045 19.6814 13.7045H23.8814C24.9214 13.7045 25.6514 13.9245 26.0714 14.3645C26.5114 14.7845 26.7314 15.5145 26.7314 16.5545V26.0945C26.7314 27.1345 26.5114 27.8745 26.0714 28.3145C25.6514 28.7345 24.9214 28.9445 23.8814 28.9445H19.6814C18.6414 28.9445 17.9014 28.7345 17.4614 28.3145C17.0414 27.8745 16.8314 27.1345 16.8314 26.0945V16.5545ZM20.6414 15.4445C20.0214 15.4445 19.6314 15.5745 19.4714 15.8345C19.3114 16.0945 19.2314 16.5345 19.2314 17.1545V25.4945C19.2314 26.1145 19.3114 26.5545 19.4714 26.8145C19.6314 27.0745 20.0214 27.2045 20.6414 27.2045H22.9214C23.5414 27.2045 23.9314 27.0745 24.0914 26.8145C24.2514 26.5545 24.3314 26.1145 24.3314 25.4945V17.1545C24.3314 16.5345 24.2514 16.0945 24.0914 15.8345C23.9314 15.5745 23.5414 15.4445 22.9214 15.4445H20.6414ZM30.513 16.5545C30.513 15.5145 30.723 14.7845 31.143 14.3645C31.583 13.9245 32.323 13.7045 33.363 13.7045H37.563C38.603 13.7045 39.333 13.9245 39.753 14.3645C40.193 14.7845 40.413 15.5145 40.413 16.5545V26.0945C40.413 27.1345 40.193 27.8745 39.753 28.3145C39.333 28.7345 38.603 28.9445 37.563 28.9445H33.363C32.323 28.9445 31.583 28.7345 31.143 28.3145C30.723 27.8745 30.513 27.1345 30.513 26.0945V16.5545ZM34.323 15.4445C33.703 15.4445 33.313 15.5745 33.153 15.8345C32.993 16.0945 32.913 16.5345 32.913 17.1545V25.4945C32.913 26.1145 32.993 26.5545 33.153 26.8145C33.313 27.0745 33.703 27.2045 34.323 27.2045H36.603C37.223 27.2045 37.613 27.0745 37.773 26.8145C37.933 26.5545 38.013 26.1145 38.013 25.4945V17.1545C38.013 16.5345 37.933 16.0945 37.773 15.8345C37.613 15.5745 37.223 15.4445 36.603 15.4445H34.323ZM46.6847 28.1345C46.6847 28.4545 46.6247 28.6745 46.5047 28.7945C46.4047 28.8945 46.1947 28.9445 45.8747 28.9445H44.2847V8.75446C44.2847 8.43446 44.3347 8.22446 44.4347 8.12446C44.5547 8.00446 44.7747 7.94446 45.0947 7.94446H46.6847V28.1345ZM47.5847 19.7345L50.8847 14.5145C51.0447 14.2345 51.1947 14.0345 51.3347 13.9145C51.4747 13.7745 51.7047 13.7045 52.0247 13.7045H53.9147L49.3547 20.4845L54.2147 28.9445H52.1447C51.8247 28.9445 51.5947 28.8845 51.4547 28.7645C51.3147 28.6245 51.1647 28.4145 51.0047 28.1345L47.5847 21.6545V19.7345ZM62.9138 18.3845C63.5338 18.3845 63.9238 18.2545 64.0838 17.9945C64.2438 17.7345 64.3238 17.2945 64.3238 16.6745V11.3945C64.3238 10.7745 64.2438 10.3345 64.0838 10.0745C63.9238 9.81446 63.5338 9.68446 62.9138 9.68446H59.4038V28.1345C59.4038 28.4545 59.3438 28.6745 59.2238 28.7945C59.1238 28.8945 58.9138 28.9445 58.5938 28.9445H57.0038V8.75446C57.0038 8.43446 57.0538 8.22446 57.1538 8.12446C57.2738 8.00446 57.4938 7.94446 57.8138 7.94446H63.8738C64.9138 7.94446 65.6438 8.16446 66.0638 8.60446C66.5038 9.02446 66.7238 9.75446 66.7238 10.7945V17.2745C66.7238 18.3145 66.5038 19.0545 66.0638 19.4945C65.6438 19.9145 64.9138 20.1245 63.8738 20.1245H61.3538C61.0338 20.1245 60.8238 20.0745 60.7238 19.9745C60.6438 19.8545 60.6038 19.6345 60.6038 19.3145V18.3845H62.9138ZM72.7331 7.94446V28.1345C72.7331 28.4545 72.6731 28.6745 72.5531 28.7945C72.4531 28.8945 72.2431 28.9445 71.9231 28.9445H70.3331V8.75446C70.3331 8.43446 70.3831 8.22446 70.4831 8.12446C70.6031 8.00446 70.8231 7.94446 71.1431 7.94446H72.7331ZM83.5542 17.1545C83.5542 16.5345 83.4742 16.0945 83.3142 15.8345C83.1542 15.5745 82.7642 15.4445 82.1442 15.4445H76.9542C77.0742 14.8645 77.2542 14.4345 77.4942 14.1545C77.7542 13.8545 78.1742 13.7045 78.7542 13.7045H83.1042C84.1442 13.7045 84.8742 13.9245 85.2942 14.3645C85.7342 14.7845 85.9542 15.5145 85.9542 16.5545V28.9445H84.3642C84.0442 28.9445 83.8242 28.8945 83.7042 28.7945C83.6042 28.6745 83.5542 28.4545 83.5542 28.1345V17.1545ZM79.2042 28.9445C78.1642 28.9445 77.4242 28.7345 76.9842 28.3145C76.5642 27.8745 76.3542 27.1345 76.3542 26.0945V22.7945C76.3542 21.7545 76.5642 21.0245 76.9842 20.6045C77.4242 20.1645 78.1642 19.9445 79.2042 19.9445H81.7542C82.3342 19.9445 82.7442 20.0945 82.9842 20.3945C83.2442 20.6745 83.4342 21.1045 83.5542 21.6845H80.1642C79.5442 21.6845 79.1542 21.8145 78.9942 22.0745C78.8342 22.3345 78.7542 22.7745 78.7542 23.3945V25.7345C78.7542 26.3545 78.8642 26.7545 79.0842 26.9345C79.3242 27.1145 79.7542 27.2045 80.3742 27.2045H82.3542V28.1345C82.3542 28.4545 82.3042 28.6745 82.2042 28.7945C82.1242 28.8945 81.9242 28.9445 81.6042 28.9445H79.2042ZM99.7706 13.7045L94.1006 34.1645C94.0006 34.4845 93.8806 34.6945 93.7406 34.7945C93.6206 34.9145 93.4006 34.9745 93.0806 34.9745H91.7606L93.3506 28.9445H92.5706L88.8806 14.5145C88.7606 13.9745 88.9606 13.7045 89.4806 13.7045H90.8306L93.3806 23.3945L93.9806 27.0245H94.1606L94.9106 23.4245L97.5206 14.5145C97.6006 14.1945 97.7106 13.9845 97.8506 13.8845C97.9906 13.7645 98.2206 13.7045 98.5406 13.7045H99.7706ZM110.625 27.2045V28.1345C110.625 28.4545 110.575 28.6745 110.475 28.7945C110.395 28.8945 110.195 28.9445 109.875 28.9445H105.345C104.305 28.9445 103.565 28.7345 103.125 28.3145C102.705 27.8745 102.495 27.1345 102.495 26.0945V16.5545C102.495 15.5145 102.705 14.7845 103.125 14.3645C103.565 13.9245 104.305 13.7045 105.345 13.7045H108.645C109.685 13.7045 110.415 13.9245 110.835 14.3645C111.275 14.7845 111.495 15.5145 111.495 16.5545V19.9145C111.495 20.9545 111.275 21.6945 110.835 22.1345C110.415 22.5545 109.685 22.7645 108.645 22.7645H106.845C106.525 22.7645 106.315 22.7145 106.215 22.6145C106.135 22.4945 106.095 22.2745 106.095 21.9545V21.0245H107.835C108.455 21.0245 108.845 20.8945 109.005 20.6345C109.165 20.3745 109.245 19.9345 109.245 19.3145V17.0045C109.245 16.3845 109.145 15.9745 108.945 15.7745C108.745 15.5545 108.335 15.4445 107.715 15.4445H106.425C105.765 15.4445 105.345 15.5645 105.165 15.8045C104.985 16.0245 104.895 16.4745 104.895 17.1545V25.4945C104.895 26.1145 104.975 26.5545 105.135 26.8145C105.295 27.0745 105.685 27.2045 106.305 27.2045H110.625ZM117.348 15.4445V28.1345C117.348 28.4545 117.288 28.6745 117.168 28.7945C117.068 28.8945 116.858 28.9445 116.538 28.9445H114.948V14.5145C114.948 14.1945 114.998 13.9845 115.098 13.8845C115.218 13.7645 115.438 13.7045 115.758 13.7045H117.348V15.4445C117.608 14.7645 117.878 14.3045 118.158 14.0645C118.438 13.8245 118.868 13.7045 119.448 13.7045H120.618C120.938 13.7045 121.138 13.7645 121.218 13.8845C121.318 13.9845 121.368 14.1945 121.368 14.5145V15.4445H117.348Z",fill:"white"}),r.a.createElement("ellipse",{cx:"2.76432",cy:"1.62037",rx:"1.97452",ry:"1.62037",fill:"white"}))),r.a.createElement(I,{statePlayList:e,addStatePlayList:t}),r.a.createElement("br",null),r.a.createElement(ln,{statePlayList:e,nowPlaying:o,setNowPlaying:u,deleteStatePlayList:a})))))},le=t(44),ce=t.n(le);function se(){var n=Object(u.a)(["\n  @import url('https://fonts.googleapis.com/css?family=PT+Sans:400,700');\n ","\n .App, .root{\n   width:100%;\n   height:100%;\n }\n  * {\n    box-sizing: border-box;\n  }\n  *:focus{\n    outline:none;\n  }\n  html,body{\n    width:100%;\n    height:100%;\n  }\n  body{\n    font-family: 'PT Sans', sans-serif, -apple-system,system-ui,BlinkMacSystemFont;\n    font-weight:400;\n  }\n  a{\n    color:inherit;\n    text-decoration:none;\n  }\n  input,\n  button{\n    &.focus,\n    &.active{outline:none}\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family:'Maven Pro', sans-serif;\n  }\n"]);return se=function(){return n},n}var fe=Object(l.createGlobalStyle)(se(),ce.a);t(97);o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,null),r.a.createElement(fe,null),r.a.createElement(K.ToastContainer,{draggable:!0,position:"bottom-center"})),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.ca6edd2c.chunk.js.map